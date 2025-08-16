#!/bin/bash

echo "🚨 緊急修正：pnpm-lock.yamlを完全削除してnpmに統一"

# 1. 現在のGit状況を確認
echo "📋 現在のGit状況："
git status
echo ""

# 2. pnpm関連ファイルを完全削除
echo "🧹 pnpm関連ファイルを完全削除..."
rm -rf node_modules
rm -f pnpm-lock.yaml
rm -f .npmrc

# 3. 削除されたことを確認
echo "📋 削除後のファイル状況："
ls -la | grep -E "(pnpm-lock|package-lock|\.npmrc)"
echo ""

# 4. npmで再インストール
echo "📦 npmで依存関係をインストール..."
npm install

# 5. インストール後のバージョン確認
echo "🔍 重要なパッケージのバージョン確認："
echo "@hookform/resolvers: $(npm list @hookform/resolvers --depth=0 2>/dev/null | grep @hookform/resolvers || echo 'not found')"
echo "zod: $(npm list zod --depth=0 2>/dev/null | grep zod || echo 'not found')"
echo ""

# 6. ローカルビルドテスト
echo "🔨 ローカルビルドテスト..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ npmでビルド成功！"
    
    # 7. Git add（pnpm-lock.yamlの削除を含む）
    echo "📤 変更をGitに追加..."
    git add .
    git add -u  # 削除されたファイルも追加
    
    # 8. Git status確認
    echo "📋 コミット前のGit status："
    git status
    echo ""
    
    # 9. コミット
    echo "📤 コミット実行..."
    git commit -m "FINAL FIX: completely remove pnpm-lock.yaml, use npm exclusively"
    
    # 10. プッシュ
    echo "🚀 GitHubにプッシュ..."
    git push origin main
    
    echo ""
    echo "🎊 完了！次のステップ："
    echo "1. Vercelで以下を確認："
    echo "   - Install Command: npm install"
    echo "   - Build Command: npm run build"
    echo "   - Node.js Version: 20.x"
    echo "2. Build Cache: OFF で Redeploy"
    echo ""
    echo "✅ 今度は確実にnpmが使われます！"
else
    echo "❌ ローカルビルドエラー..."
    echo "エラーメッセージを確認してください"
fi
