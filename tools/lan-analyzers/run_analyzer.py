#!/usr/bin/env python3
"""Simple CLI wrapper to run analyzer scripts included in this folder.
Usage: python run_analyzer.py --script blockchain_analysis_downloads.py
"""
import argparse
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).parent

parser = argparse.ArgumentParser(description='Run LAN analyzer script')
parser.add_argument('--script', '-s', default='blockchain_analysis_downloads.py', help='Script filename to run')
parser.add_argument('--timeout', '-t', type=int, default=600, help='Timeout seconds')
args = parser.parse_args()

script_path = ROOT / args.script
if not script_path.exists():
    print(f"Script not found: {script_path}")
    sys.exit(2)

try:
    p = subprocess.run([sys.executable, str(script_path)], capture_output=True, text=True, timeout=args.timeout)
    print(p.stdout)
    if p.stderr:
        print("--- STDERR ---", file=sys.stderr)
        print(p.stderr, file=sys.stderr)
    sys.exit(p.returncode)
except subprocess.TimeoutExpired:
    print(f"Script timed out after {args.timeout} seconds", file=sys.stderr)
    sys.exit(124)
