#!/bin/bash

echo "🔄 最終手段: npmに完全切り替え"

# 1. pnpm関連ファイルを全削除
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
    
    # 4. Git commit
    echo "📤 変更をコミット..."
    git add .
    git commit -m "FINAL: switch to npm to resolve pnpm lockfile issues"
    git push origin main
    
    echo "🚀 GitHubにプッシュ完了！"
    echo ""
    echo "🎊 npmなら確実に動きます！"
    echo "Vercelで再デプロイしてください！"
else
    echo "❌ npmでもエラー... 他の問題があります"
fi
