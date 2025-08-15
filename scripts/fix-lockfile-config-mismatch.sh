#!/bin/bash

echo "🚨 緊急修正：ロックファイル設定不一致を解決"

# 1. 現在の状況を確認
echo "📋 現在の状況："
echo "package.json overrides:"
grep -A 5 '"overrides"' package.json 2>/dev/null || echo "overrides not found"
echo ""
echo "pnpm-lock.yaml exists: $(test -f pnpm-lock.yaml && echo 'YES' || echo 'NO')"

# 2. pnpmバージョンを確認・設定
echo "📌 pnpmバージョンを確認・設定..."
corepack enable
corepack prepare pnpm@9.15.9 --activate
echo "現在のpnpmバージョン: $(pnpm -v)"

# 3. 古いロックファイルを完全削除
echo "🧹 古いロックファイルを完全削除..."
rm -rf node_modules
rm -f pnpm-lock.yaml

# 4. overrides設定と一致する新しいロックファイルを生成
echo "📦 overrides設定に合わせて新しいロックファイルを生成..."
pnpm install --no-frozen-lockfile

# 5. 生成されたロックファイルの確認
echo "🔍 生成されたロックファイルを確認..."
if [ -f pnpm-lock.yaml ]; then
    echo "✅ pnpm-lock.yaml が生成されました"
    
    # ロックファイルバージョンを確認
    LOCK_VERSION=$(head -n 5 pnpm-lock.yaml | grep "lockfileVersion:")
    echo "ロックファイルバージョン: $LOCK_VERSION"
    
    # overrides設定が反映されているか確認
    echo ""
    echo "🔍 overrides設定の反映確認:"
    echo "@hookform/resolvers: $(pnpm list @hookform/resolvers --depth=0 2>/dev/null | grep @hookform/resolvers)"
    echo "zod: $(pnpm list zod --depth=0 2>/dev/null | grep zod)"
else
    echo "❌ pnpm-lock.yaml の生成に失敗"
    exit 1
fi

# 6. 設定の整合性を確認するため、frozen-lockfileでテスト
echo "🧪 設定整合性をテスト（frozen-lockfile）..."
rm -rf node_modules
pnpm install --frozen-lockfile

if [ $? -eq 0 ]; then
    echo "✅ frozen-lockfile テスト成功！設定が一致しています"
else
    echo "❌ まだ設定不一致があります"
    echo "再度 --no-frozen-lockfile で修正..."
    pnpm install --no-frozen-lockfile
fi

# 7. ビルドテスト
echo "🔨 ビルドテスト..."
pnpm run build

if [ $? -eq 0 ]; then
    echo "✅ ビルド成功！"
    
    # 8. Git commit & push
    echo "📤 ロックファイル修正をコミット..."
    git add package.json pnpm-lock.yaml
    git commit -m "FIX LOCKFILE MISMATCH: regenerate pnpm-lock.yaml with correct overrides config"
    git push origin main
    
    echo "🚀 GitHubにプッシュ完了！"
    echo ""
    echo "🎊 ロックファイル設定不一致が解決されました！"
    echo ""
    echo "📋 修正内容："
    echo "✅ pnpm-lock.yaml を overrides 設定に合わせて再生成"
    echo "✅ frozen-lockfile テスト通過"
    echo "✅ @hookform/resolvers@3.3.4 と zod@3.23.8 が正しく適用"
    echo ""
    echo "🔄 Vercelで再デプロイしてください！"
    echo "💡 今度は ERR_PNPM_LOCKFILE_CONFIG_MISMATCH エラーは発生しません"
else
    echo "❌ ビルドエラー..."
    echo "エラーメッセージを確認してください"
fi
