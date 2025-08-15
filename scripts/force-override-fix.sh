#!/bin/bash

echo "🚨 緊急修正: pnpm.overrides で強制バージョン固定"

# 1. 完全クリーンアップ
echo "🧹 完全クリーンアップ..."
rm -rf node_modules
rm -f pnpm-lock.yaml

# 2. pnpmバージョン確認
echo "📌 pnpmバージョン確認..."
corepack enable
corepack prepare pnpm@9.15.9 --activate
pnpm -v

# 3. 強制再インストール
echo "📦 pnpm.overrides で強制再インストール..."
pnpm install

# 4. バージョン確認
echo "🔍 インストールされたバージョンを確認..."
pnpm list @hookform/resolvers zod

# 5. ビルドテスト
echo "🔨 ビルドテスト..."
pnpm run build

if [ $? -eq 0 ]; then
    echo "✅ ビルド成功！overridesが効きました！"
    
    # 6. Git commit & push
    echo "📤 緊急プッシュ..."
    git add package.json pnpm-lock.yaml
    git commit -m "URGENT: force @hookform/resolvers@3.3.4 via pnpm.overrides"
    git push origin main
    
    echo "🚀 緊急修正完了！Vercelで再デプロイしてください！"
else
    echo "❌ まだエラーが... さらなる調査が必要です"
fi
