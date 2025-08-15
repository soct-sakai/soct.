#!/bin/bash

echo "🔄 ロックファイル再生成で根本解決..."

# 1. 完全クリーンアップ
echo "🧹 完全クリーンアップ..."
rm -rf node_modules
rm -f pnpm-lock.yaml

# 2. pnpmバージョン確認
echo "📌 pnpmバージョン確認..."
corepack enable
corepack prepare pnpm@9.15.9 --activate
echo "Current pnpm version: $(pnpm -v)"

# 3. 新しいロックファイル生成
echo "📦 新しいロックファイルを生成..."
pnpm install --no-frozen-lockfile

# 4. バージョン確認
echo "🔍 強制されたバージョンを確認..."
echo "@hookform/resolvers version:"
pnpm list @hookform/resolvers
echo "zod version:"
pnpm list zod

# 5. ビルドテスト
echo "🔨 ビルドテスト..."
pnpm run build

if [ $? -eq 0 ]; then
    echo "✅ ビルド成功！新しいロックファイルが正常に動作！"
    
    # 6. Git commit & push
    echo "📤 新しいロックファイルをプッシュ..."
    git add package.json pnpm-lock.yaml
    git commit -m "fix: regenerate pnpm-lock.yaml with pnpm.overrides config"
    git push origin main
    
    echo "🚀 完了！Vercelで再デプロイしてください！"
    echo "💡 PNPM_INSTALL_FLAGS環境変数があれば削除してOKです"
else
    echo "❌ ビルドエラー... エラーメッセージを確認してください"
fi
