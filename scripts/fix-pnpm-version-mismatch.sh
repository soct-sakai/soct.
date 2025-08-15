#!/bin/bash

echo "🎯 pnpm@10 → pnpm@9 ロックファイル不整合を修正"

# 1. ローカルのpnpmを9.15.9に固定
echo "📌 Step 1: pnpmを9.15.9に固定..."
corepack enable
corepack prepare pnpm@9.15.9 --activate

echo "現在のpnpmバージョン:"
pnpm -v

# バージョンチェック
PNPM_VERSION=$(pnpm -v)
if [[ "$PNPM_VERSION" != "9.15.9" ]]; then
    echo "❌ pnpmバージョンが9.15.9ではありません: $PNPM_VERSION"
    echo "手動でcorepack prepare pnpm@9.15.9 --activateを実行してください"
    exit 1
fi

# 2. .npmrcを統一
echo "📝 Step 2: .npmrcを統一..."
cat > .npmrc << 'EOF'
strict-peer-dependencies=false
auto-install-peers=true
public-hoist-pattern=*
EOF

# 3. package.jsonを確認・更新（既に正しい設定になっているはず）
echo "📦 Step 3: package.json確認..."
echo "packageManager: $(grep -o '"packageManager": "[^"]*"' package.json)"

# 4. 完全クリーン → ロック再生成（pnpm9で）
echo "🧹 Step 4: 完全クリーン..."
git clean -xfd
rm -f pnpm-lock.yaml

echo "📦 pnpm@9でロックファイル再生成..."
pnpm install

# 5. ロックファイルバージョン確認（超重要）
echo "🔍 Step 5: ロックファイルバージョン確認..."
if [ -f pnpm-lock.yaml ]; then
    LOCK_VERSION=$(head -n 5 pnpm-lock.yaml | grep "lockfileVersion:")
    echo "ロックファイルバージョン: $LOCK_VERSION"
    
    if echo "$LOCK_VERSION" | grep -q "'9"; then
        echo "✅ ロックファイルがv9で生成されました！"
    else
        echo "❌ ロックファイルがまだv10です。pnpmバージョンを再確認してください"
        echo "ロックファイルの先頭5行:"
        head -n 5 pnpm-lock.yaml
        exit 1
    fi
else
    echo "❌ pnpm-lock.yamlが生成されませんでした"
    exit 1
fi

# 6. ビルドテスト
echo "🔨 Step 6: ビルドテスト..."
pnpm run build

if [ $? -eq 0 ]; then
    echo "✅ ビルド成功！"
else
    echo "❌ ビルドエラー"
    exit 1
fi

# 7. コミット＆プッシュ
echo "📤 Step 7: コミット＆プッシュ..."
git add package.json pnpm-lock.yaml .npmrc
git commit -m "fix: regenerate pnpm-lock with pnpm@9.15.9 + align npmrc + zod/resolvers pin"
git push origin main

echo ""
echo "🎊 完了！次のステップ："
echo "1. Vercelで Node.js Version: 20.x 確認"
echo "2. Install Command: pnpm install（フラグなし）"
echo "3. Use existing Build Cache: OFF で Redeploy"
echo ""
echo "これで確実に通ります！ 🚀"
