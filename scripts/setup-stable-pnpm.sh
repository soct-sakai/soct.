#!/bin/bash

echo "🚀 戦略2：pnpm@8.15.6 + 安定版セットアップ"
echo "古いpnpmバージョンで確実に動かします"

# 1. pnpmを8.15.6に固定（Vercelが対応している古いバージョン）
echo "📌 pnpm@8.15.6に固定..."
corepack enable
corepack prepare pnpm@8.15.6 --activate

echo "現在のpnpmバージョン: $(pnpm -v)"

# バージョンチェック
PNPM_VERSION=$(pnpm -v)
if [[ "$PNPM_VERSION" != "8.15.6" ]]; then
    echo "❌ pnpmバージョンが8.15.6ではありません: $PNPM_VERSION"
    echo "手動でcorepack prepare pnpm@8.15.6 --activateを実行してください"
    exit 1
fi

# 2. 完全クリーンアップ
echo "🧹 完全クリーンアップ..."
rm -rf node_modules
rm -f pnpm-lock.yaml
rm -f package-lock.json
rm -f .npmrc
find . -name "pnpm-lock.yaml" -delete 2>/dev/null || true

# 3. package.jsonを安定版に置き換え
echo "📝 package.jsonを安定版に置き換え..."
cp package-pnpm.json package.json

# 4. .npmrcを設定
echo "📝 .npmrcを設定..."
cat > .npmrc << 'EOF'
strict-peer-dependencies=false
auto-install-peers=true
public-hoist-pattern=*
EOF

# 5. pnpm@8で依存関係をインストール
echo "📦 pnpm@8で依存関係をインストール..."
pnpm install

# 6. インストールされたバージョンを確認
echo "🔍 インストールされたバージョン確認..."
echo "Next.js: $(pnpm list next --depth=0 2>/dev/null | grep next || echo 'not found')"
echo "React: $(pnpm list react --depth=0 2>/dev/null | grep react || echo 'not found')"
echo "@hookform/resolvers: $(pnpm list @hookform/resolvers --depth=0 2>/dev/null | grep @hookform/resolvers || echo 'not found')"
echo "zod: $(pnpm list zod --depth=0 2>/dev/null | grep zod || echo 'not found')"

# 7. ロックファイルバージョンを確認
echo "🔍 ロックファイルバージョン確認..."
if [ -f pnpm-lock.yaml ]; then
    LOCK_VERSION=$(head -n 5 pnpm-lock.yaml | grep "lockfileVersion:")
    echo "ロックファイルバージョン: $LOCK_VERSION"
fi

# 8. ビルドテスト
echo "🔨 ビルドテスト..."
pnpm run build

if [ $? -eq 0 ]; then
    echo "✅ 戦略2成功！pnpm@8 + 安定版でビルド成功！"
    
    echo "📤 GitHubにプッシュ..."
    git add .
    git commit -m "STRATEGY 2: use pnpm@8.15.6 with stable versions (Next.js 14, React 18)"
    git push origin main
    
    echo "🚀 戦略2完了！"
    echo ""
    echo "🎯 Vercel設定確認："
    echo "1. Install Command: pnpm install"
    echo "2. Build Command: pnpm run build"
    echo "3. Node.js Version: 18.x"
    echo "4. Build Cache: OFF で Redeploy"
    echo ""
    echo "🎊 これで確実に動きます！"
else
    echo "❌ 戦略2も失敗...手動対応が必要です"
    echo "エラーメッセージを教えてください"
fi
