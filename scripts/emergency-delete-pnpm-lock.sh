#!/bin/bash

echo "🚨 緊急：pnpm-lock.yamlを完全削除してnpmに統一"

# 1. 現在のファイル状況を確認
echo "📋 現在のファイル状況："
ls -la | grep -E "(pnpm-lock|package-lock)"

# 2. pnpm-lock.yamlを強制削除
echo "🧹 pnpm-lock.yamlを強制削除..."
rm -f pnpm-lock.yaml
rm -rf node_modules

# 3. npmで再インストール
echo "📦 npmで再インストール..."
npm install

# 4. 削除されたことを確認
echo "📋 削除後のファイル状況："
ls -la | grep -E "(pnpm-lock|package-lock)"

# 5. ビルドテスト
echo "🔨 ビルドテスト..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ ビルド成功！"
    
    # 6. Git add（削除も含む）
    echo "📤 変更をGitに追加..."
    git add .
    git add -u  # 削除されたファイルも追加
    
    # 7. コミット
    echo "📤 pnpm-lock.yaml削除をコミット..."
    git commit -m "URGENT: delete pnpm-lock.yaml completely, use npm only"
    
    # 8. プッシュ
    echo "🚀 GitHubにプッシュ..."
    git push origin main
    
    echo ""
    echo "🎊 完了！pnpm-lock.yamlが完全に削除されました！"
    echo "🔄 Vercelで再デプロイしてください"
else
    echo "❌ ビルドエラー..."
fi
