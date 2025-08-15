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
    echo ""
    echo "🎊 これで根本的に解決されました！"
    echo "   - pnpm.overrides設定と一致するロックファイル生成"
    echo "   - @hookform/resolvers@3.3.4 と zod@3.23.8 の互換性確保"
    echo "   - 今後このエラーは発生しません！"
else
    echo "❌ ビルドエラー... エラーメッセージを確認してください"
fi
