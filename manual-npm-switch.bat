@echo off
echo 🚨 Vercel緊急修正：npmに完全切り替え

echo 🧹 pnpm関連ファイルを削除...
if exist node_modules rmdir /s /q node_modules
if exist pnpm-lock.yaml del pnpm-lock.yaml
if exist .npmrc del .npmrc

echo 📦 npmで依存関係をインストール...
npm install

echo 🔨 ビルドテスト...
npm run build

if %errorlevel% == 0 (
    echo ✅ npmでビルド成功！
    
    echo 📤 緊急修正をコミット...
    git add .
    git commit -m "VERCEL FIX: switch to npm completely, remove pnpm-lock.yaml"
    git push origin main
    
    echo 🚀 GitHubにプッシュ完了！
    echo.
    echo 🎯 Vercel設定変更：
    echo 1. Project Settings → General
    echo 2. Build ^& Development Settings:
    echo    - Install Command: npm install
    echo    - Build Command: npm run build
    echo 3. Redeploy
    echo.
    echo 🎊 これで確実にデプロイできます！
) else (
    echo ❌ ビルドエラー...
)

pause
