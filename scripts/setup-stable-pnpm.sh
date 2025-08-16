#!/bin/bash

echo "🚀 pnpm@8.15.6で安定版セットアップ"

# 1. pnpmを8.15.6に固定
echo "📌 pnpm@8.15.6に固定..."
corepack enable
corepack prepare pnpm@8.15.6 --activate

echo "現在のpnpmバージョン: $(pnpm -v)"

# 2. 完全クリーンアップ
echo "🧹 完全クリーンアップ..."
rm -rf node_modules
rm -f pnpm-lock.yaml
rm -f package-lock.json
rm -f .npmrc

# 3. package.jsonを置き換え
echo "📝 package.jsonを安定版に置き換え..."
cp package-pnpm.json package.json

# 4. pnpm@8で依存関係をインストール
echo "📦 pnpm@8で依存関係をインストール..."
pnpm install

# 5. ビルドテスト
echo "🔨 ビルドテスト..."
pnpm run build

if [ $? -eq 0 ]; then
    echo "✅ pnpm@8 + 安定版でビルド成功！"
    
    git add .
    git commit -m "STABLE PNPM: use pnpm@8.15.6 with stable versions"
    git push origin main
    
    echo "🚀 pnpm安定版でプッシュ完了！"
    echo ""
    echo "🎯 Vercel設定："
    echo "1. Install Command: pnpm install"
    echo "2. Build Command: pnpm run build"
    echo "3. Node.js Version: 18.x"
else
    echo "❌ pnpm安定版でもエラー..."
fi
