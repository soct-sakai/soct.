#!/bin/bash

echo "🔄 完全npm切り替え（pnpm-lock.yaml削除込み）"

# 1. pnpm関連ファイルを完全削除
echo "🧹 pnpm関連ファイルを完全削除..."
rm -rf node_modules
rm -f pnpm-lock.yaml
rm -f .npmrc
find . -name ".npmrc" -not -path "./node_modules/*" -delete 2>/dev/null || true

# 2. package.jsonからpnpm設定を削除
echo "📝 package.jsonを更新..."
# packageManagerをnpmに変更済み

# 3. npmで再インストール
echo "📦 npmで依存関係をインストール..."
npm install

# 4. ローカルビルドテスト
echo "🔨 ローカルビルドテスト..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ npmでビルド成功！"
    
    # 5. Git commit & push（pnpm-lock.yamlの削除も含む）
    echo "📤 pnpm-lock.yaml削除とnpm切り替えをコミット..."
    git add .
    git commit -m "COMPLETE: remove pnpm-lock.yaml, switch to npm fully"
    git push origin main
    
    echo "🚀 完全npm切り替え完了！"
    echo ""
    echo "🎯 Vercel設定確認："
    echo "1. Node.js Version: 20.x に変更"
    echo "2. Install Command: npm install"
    echo "3. Build Command: npm run build"
    echo "4. Use existing Build Cache: OFF"
    echo "5. Redeploy"
    echo ""
    echo "🎊 これで確実にデプロイできます！"
else
    echo "❌ ビルドエラー..."
fi
