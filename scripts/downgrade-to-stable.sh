#!/bin/bash

echo "🔄 3月時点の安定版にダウングレード"

# 1. 完全クリーンアップ
echo "🧹 完全クリーンアップ..."
rm -rf node_modules
rm -f package-lock.json
rm -f pnpm-lock.yaml
rm -f .npmrc

# 2. npmで安定版をインストール
echo "📦 安定版をインストール..."
npm install

# 3. ビルドテスト
echo "🔨 ビルドテスト..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ 安定版でビルド成功！"
    
    git add .
    git commit -m "DOWNGRADE: revert to stable versions (Next.js 14, React 18)"
    git push origin main
    
    echo "🚀 安定版でプッシュ完了！"
else
    echo "❌ 安定版でもエラー..."
fi
