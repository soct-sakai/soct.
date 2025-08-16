#!/bin/bash

echo "🚨 緊急デプロイ：npm切り替えで確実に通す"

# 1. pnpm関連ファイルを完全削除
echo "🧹 pnpm関連ファイルを削除..."
rm -rf node_modules
rm -f pnpm-lock.yaml
rm -f .npmrc
find . -name ".npmrc" -not -path "./node_modules/*" -delete 2>/dev/null || true

# 2. git clean で確実にクリーンアップ
echo "🧹 Git clean で完全クリーンアップ..."
git clean -xfd

# 3. npmで再インストール
echo "📦 npmで依存関係をインストール..."
npm install

# 4. ローカルビルドテスト
echo "🔨 ローカルビルドテスト..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ npmでビルド成功！"
    
    # 5. Git commit & push
    echo "📤 緊急デプロイ用にコミット..."
    git add package.json package-lock.json
    git commit -m "EMERGENCY: switch to npm for reliable deployment"
    git push origin main
    
    echo "🚀 GitHubにプッシュ完了！"
    echo ""
    echo "🎯 次のステップ（Vercel設定）："
    echo "1. Project Settings → General → Node.js Version: 20.x"
    echo "2. Build & Development Settings:"
    echo "   - Install Command: npm install"
    echo "   - Build Command: npm run build"
    echo "3. Environment Variables から PNPM_INSTALL_FLAGS を削除"
    echo "4. Deployments → Use existing Build Cache: OFF → Redeploy"
    echo ""
    echo "🎊 これで確実にデプロイできます！"
else
    echo "❌ npmでもビルドエラー..."
    echo "エラーメッセージを確認してください"
fi
