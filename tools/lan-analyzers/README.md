# LAN Analyzers imported

Files copied from user machine:
- /Users/james/Downloads/kainos/Kainos/blockchain_analysis.py -> blockchain_analysis_downloads.py
- /Users/james/Documents/Dev/kainos/Kainos/blockchain_analysis.py -> blockchain_analysis_docs.py
- /Users/james/Downloads/vlan_ip_nic_plan.csv

How to run:

Local CLI
- Create a virtualenv and install dependencies:
  python3 -m venv .venv
  source .venv/bin/activate
  pip install -r requirements.txt

- Run analyzer via CLI wrapper:
  python run_analyzer.py --script blockchain_analysis_downloads.py

Server / API
- Start the FastAPI server (for local testing):
  uvicorn api:app --reload --host 127.0.0.1 --port 8001

- Call the analyzer remotely:
  POST http://127.0.0.1:8001/run with JSON body { "script": "blockchain_analysis_downloads.py", "timeout": 300 }

Notes
- The scripts run on the server and return stdout/stderr. Review and harden before exposing publicly.
- If you prefer a Node service or serverless function, say which provider (AWS Lambda / Cloud Run / Vercel) and it can be scaffolded.
