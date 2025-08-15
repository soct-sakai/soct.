#!/bin/bash

# 1. 全てのキャッシュとロックファイルを削除
echo "🧹 Cleaning up cache and lock files..."
rm -rf node_modules
rm -f pnpm-lock.yaml
rm -f package-lock.json
rm -f yarn.lock

# 2. 依存関係を再インストール
echo "📦 Reinstalling dependencies..."
pnpm install

# 3. ローカルビルドテスト
echo "🔨 Testing local build..."
pnpm run build

# 4. Git操作
echo "📤 Committing changes..."
git add .
git commit -m "Fix deployment: update dependencies and clear cache"
git push origin main

echo "✅ Done! Check Vercel deployment status."
