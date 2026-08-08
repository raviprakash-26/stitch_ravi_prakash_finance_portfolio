@echo off
REM Persistent starter for the portfolio dev server.
SETLOCAL
SET "NODE_PATH=C:\Program Files\nodejs"
SET "PATH=%NODE_PATH%;%PATH%"
CD /D "C:\Users\RAVI PRAKASH\.gemini\antigravity\scratch\portfolio-ravi"
:restart
"C:\Program Files\nodejs\npm.cmd" run dev -- --host 0.0.0.0
TIMEOUT /T 5 /NOBREAK >nul
GOTO restart
