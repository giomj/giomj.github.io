from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import subprocess
import sys
from pathlib import Path
from typing import Optional

app = FastAPI(title='LAN Analyzer API')
ROOT = Path(__file__).parent

class RunRequest(BaseModel):
    script: str = 'blockchain_analysis_downloads.py'
    timeout: Optional[int] = 300

@app.post('/run')
async def run_analyzer(req: RunRequest):
    script_path = ROOT / req.script
    if not script_path.exists():
        raise HTTPException(status_code=404, detail=f"Script not found: {req.script}")
    try:
        proc = subprocess.run([sys.executable, str(script_path)], capture_output=True, text=True, timeout=req.timeout)
        return {
            'returncode': proc.returncode,
            'stdout': proc.stdout,
            'stderr': proc.stderr
        }
    except subprocess.TimeoutExpired:
        raise HTTPException(status_code=504, detail='Script timed out')
