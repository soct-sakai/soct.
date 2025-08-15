#!/bin/bash

echo "🚨 緊急クリーンアップ：pnpm-lock.yamlを確実に削除"

# 1. 現在の状況を確認
echo "📋 現在のファイル状況："
ls -la | grep -E "(pnpm-lock|package-lock)"

# 2. pnpm関連ファイルを強制削除
echo "🧹 pnpm関連ファイルを強制削除..."
rm -f pnpm-lock.yaml
rm -rf node_modules
rm -f .npmrc

# 3. Gitの状況を確認
echo "📋 Git status:"
git status

# 4. npmで再インストール
echo "📦 npmで再インストール..."
npm install

# 5. 削除されたファイルを確認
echo "📋 削除後のファイル状況："
ls -la | grep -E "(pnpm-lock|package-lock)"

# 6. Gitに追加
echo "📤 変更をGitに追加..."
git add .
git status

# 7. コミット
echo "📤 コミット実行..."
git commit -m "URGENT: completely remove pnpm-lock.yaml for npm deployment"

# 8. プッシュ
echo "🚀 GitHubにプッシュ..."
git push origin main

echo ""
echo "✅ 完了！新しいコミットハッシュを確認してください"
echo "🔄 Vercelで再デプロイを実行してください"
