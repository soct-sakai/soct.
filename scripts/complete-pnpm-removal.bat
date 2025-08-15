@echo off
echo 🚨 完全pnpm削除：Gitからも完全に除去

echo 📋 現在のGit状況：
git status
git ls-files | findstr /R "pnpm-lock \.npmrc"

echo 🗑️ Gitからpnpm-lock.yamlを完全削除...
git rm -f pnpm-lock.yaml 2>nul
git rm -f .npmrc 2>nul

echo 🧹 ローカルファイルも削除...
if exist node_modules rmdir /s /q node_modules
if exist pnpm-lock.yaml del /f pnpm-lock.yaml
if exist .npmrc del /f .npmrc

echo 📦 npmで正確なバージョンをインストール...
npm install --save-exact @hookform/resolvers@3.3.4 zod@3.23.8
npm install

echo 🔨 ビルドテスト...
npm run build

if %errorlevel% == 0 (
    echo ✅ ビルド成功！
    
    echo 📤 完全削除をコミット...
    git add .
    git commit -m "COMPLETE REMOVAL: delete pnpm-lock.yaml from git, force npm with exact versions"
    git push origin main
    
    echo 🚀 完了！今度こそnpmが使われます！
) else (
    echo ❌ ビルドエラー...
)

pause
