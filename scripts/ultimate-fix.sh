#!/bin/bash

echo "🎯 究極の修正スクリプト実行中..."

# 1. pnpmを9.15.9に固定
echo "📌 pnpmバージョンを9.15.9に固定..."
corepack enable
corepack prepare pnpm@9.15.9 --activate

# バージョン確認
echo "現在のpnpmバージョン:"
pnpm -v

# 2. 完全クリーンアップ
echo "🧹 完全クリーンアップ..."
rm -rf node_modules
rm -f pnpm-lock.yaml

# 3. 依存関係を再インストール
echo "📦 依存関係を再インストール..."
pnpm install

# 4. ビルドテスト
echo "🔨 ビルドテスト..."
pnpm run build

if [ $? -eq 0 ]; then
    echo "✅ ビルド成功！完璧です！"
    
    # 5. Git commit & push
    echo "📤 GitHubにプッシュ..."
    git add package.json pnpm-lock.yaml .npmrc
    git commit -m "fix: pin pnpm@9.15.9 & align npmrc & fix zod/resolvers"
    git push origin main
    
    echo "🚀 GitHubにプッシュ完了！"
    echo ""
    echo "🎊 次のステップ："
    echo "1. Vercelで Build Cache を OFF にする"
    echo "2. Redeploy を実行"
    echo "3. PNPM_INSTALL_FLAGS 環境変数があれば削除"
    echo ""
    echo "これで確実に動きます！ ٩(◕‿◕)۶✨"
else
    echo "❌ まだビルドエラーが... エラーメッセージを確認してください"
fi
