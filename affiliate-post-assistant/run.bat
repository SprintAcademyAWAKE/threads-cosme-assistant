@echo off
chcp 65001 > nul
echo ========================================================
echo   Amazon SNS Affiliate Assistant (完全無料 0円ツール)
echo ========================================================
echo.
echo アプリケーションを起動しています...
echo ブラウザで http://127.0.0.1:8000 を開きます。
echo.

start http://127.0.0.1:8000
python app.py

pause
