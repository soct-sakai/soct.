@echo off
echo 🚨 緊急：pnpm-lock.yamlを完全削除してnpmに統一

echo 📋 現在のファイル状況：
dir pnpm-lock.yaml 2>nul && echo pnpm-lock.yaml が存在します || echo pnpm-lock.yaml は存在しません
dir package-lock.json 2>nul && echo package-lock.json が存在します || echo package-lock.json は存在しません

echo 🧹 pnpm-lock.yamlを強制削除...
if exist pnpm-lock.yaml del /f pnpm-lock.yaml
if exist node_modules rmdir /s /q node_modules

echo 📦 npmで再インストール...
npm install

echo 📋 削除後のファイル状況：
dir pnpm-lock.yaml 2>nul && echo pnpm-lock.yaml がまだ存在します！ || echo pnpm-lock.yaml は削除されました
dir package-lock.json 2>nul && echo package-lock.json が存在します || echo package-lock.json は存在しません

echo 🔨 ビルドテスト...
npm run build

if %errorlevel% == 0 (
    echo ✅ ビルド成功！
    
    echo 📤 変更をGitに追加...
    git add .
    git add -u
    
    echo 📤 pnpm-lock.yaml削除をコミット...
    git commit -m "URGENT: delete pnpm-lock.yaml completely, use npm only"
    
    echo 🚀 GitHubにプッシュ...
    git push origin main
    
    echo.
    echo 🎊 完了！pnpm-lock.yamlが完全に削除されました！
    echo 🔄 Vercelで再デプロイしてください
) else (
    echo ❌ ビルドエラー...
)

pause
