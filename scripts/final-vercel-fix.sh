#!/bin/bash

echo "🚨 Vercel緊急修正：npmに完全切り替え"

# 1. pnpm関連ファイルを完全削除
echo "🧹 pnpm関連ファイルを削除..."
rm -rf node_modules
rm -f pnpm-lock.yaml
rm -f .npmrc

# 2. npmで再インストール
echo "📦 npmで依存関係をインストール..."
npm install

# 3. ビルドテスト
echo "🔨 ビルドテスト..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ npmでビルド成功！"
    
    # 4. Git commit & push
    echo "📤 緊急修正をコミット..."
    git add .
    git commit -m "VERCEL FIX: switch to npm completely, remove pnpm-lock.yaml"
    git push origin main
    
    echo "🚀 GitHubにプッシュ完了！"
    echo ""
    echo "🎯 Vercel設定変更："
    echo "1. Project Settings → General"
    echo "2. Build & Development Settings:"
    echo "   - Install Command: npm install"
    echo "   - Build Command: npm run build"
    echo "3. Redeploy"
    echo ""
    echo "🎊 これで確実にデプロイできます！"
else
    echo "❌ ビルドエラー..."
fi
