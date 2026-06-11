@echo off
title Prince Nigam Portfolio - LIVE
color 0A
cd /d "%~dp0"

echo.
echo  ==========================================
echo    Prince Nigam Portfolio - LIVE SERVER
echo  ==========================================
echo.
echo  AUTO-REFRESH MODE:
echo  - data.js me koi bhi change karo
echo  - Ctrl+S se save karo
echo  - Portfolio AUTOMATICALLY update ho jayega!
echo.
echo  Starting Vite server...
echo  Band karne ke liye: Ctrl+C ya window close karo
echo.

:: Start vite in background briefly, then open browser after 2 seconds
timeout /t 2 /nobreak >nul

:: Check if port 3000 is free, else use 3001
netstat -ano | findstr ":3000 " >nul 2>&1
if errorlevel 1 (
    echo  URL: http://localhost:3000
    start "" "http://localhost:3000"
) else (
    echo  Port 3000 is busy - using 3001
    echo  URL: http://localhost:3001
    start "" "http://localhost:3001"
)

node_modules\.bin\vite.cmd

pause
