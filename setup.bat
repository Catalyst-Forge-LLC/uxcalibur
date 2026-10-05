@echo off
cd /d "%~dp0"
call pnpm install --frozen-lockfile
if errorlevel 1 exit /b 1
call pnpm test:e2e:install
if errorlevel 1 exit /b 1
echo Setup complete. Run run.bat to open the local fixture server.
