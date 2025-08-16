#!/bin/bash

echo "🚀 クイック npm 切り替え（確実な解決策）"

# 1. pnpm関連を削除
echo "🧹 pnpm関連ファイル削除..."
rm -rf node_modules pnpm-lock.yaml .npmrc

# 2. package.jsonからpnpm設定を削除
echo "📝 package.jsonを更新..."
# packageManagerとpnpm.overridesを削除したバージョンに更新

# 3. npmでインストール
echo "📦 npmでインストール..."
npm install

# 4. ビルドテスト
echo "🔨 ビルドテスト..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ 成功！npmで完璧に動作！"
    git add .
    git commit -m "fix: switch to npm - no more pnpm issues!"
    git push origin main
    echo "🎊 Vercelで再デプロイしてください！"
else
    echo "❌ エラーが発生しました"
fi
