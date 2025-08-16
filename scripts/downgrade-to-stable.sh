#!/bin/bash

echo "🔄 戦略1：3月時点の安定版にダウングレード"
echo "Next.js 15 → 14, React 19 → 18 に戻します"

# 1. 完全クリーンアップ
echo "🧹 完全クリーンアップ..."
rm -rf node_modules
rm -f package-lock.json
rm -f pnpm-lock.yaml
rm -f .npmrc
find . -name "pnpm-lock.yaml" -delete 2>/dev/null || true

# 2. 現在のバージョンを確認
echo "📋 現在のバージョン確認..."
echo "Node.js: $(node -v)"
echo "npm: $(npm -v)"

# 3. npmで安定版をインストール
echo "📦 npm + 安定版をインストール..."
npm install

# 4. インストールされたバージョンを確認
echo "🔍 インストールされたバージョン確認..."
echo "Next.js: $(npm list next --depth=0 2>/dev/null | grep next || echo 'not found')"
echo "React: $(npm list react --depth=0 2>/dev/null | grep react || echo 'not found')"
echo "@hookform/resolvers: $(npm list @hookform/resolvers --depth=0 2>/dev/null | grep @hookform/resolvers || echo 'not found')"
echo "zod: $(npm list zod --depth=0 2>/dev/null | grep zod || echo 'not found')"

# 5. ビルドテスト
echo "🔨 ビルドテスト..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ 戦略1成功！安定版でビルド成功！"
    
    echo "📤 GitHubにプッシュ..."
    git add .
    git commit -m "STRATEGY 1: downgrade to stable versions (Next.js 14, React 18)"
    git push origin main
    
    echo "🚀 戦略1完了！Vercelで再デプロイしてください！"
    echo ""
    echo "🎊 これで確実に動くはずです！"
    echo "📋 変更内容："
    echo "  - Next.js 15.2.4 → 14.2.3"
    echo "  - React 19.0.0 → 18.3.1"
    echo "  - 全て3月時点の安定版"
else
    echo "❌ 戦略1失敗...戦略2（pnpm@8）に切り替えましょう"
    echo ""
    echo "🔄 次は戦略2を試してください："
    echo "   scripts/setup-stable-pnpm.sh"
fi
