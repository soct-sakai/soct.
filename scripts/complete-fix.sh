#!/bin/bash

echo "🔧 Complete fix for pnpm config mismatch and dependency issues..."

# 1. pnpmバージョンを固定（Vercelと同じ9.15.9）
echo "📌 Setting pnpm version to 9.15.9..."
corepack enable
corepack prepare pnpm@9.15.9 --activate

# バージョン確認
echo "Current pnpm version:"
pnpm -v

# 2. 完全クリーンアップ
echo "🧹 Complete cleanup..."
rm -rf node_modules
rm -f pnpm-lock.yaml
rm -f package-lock.json
rm -f yarn.lock

# 3. 依存関係を再インストール
echo "📦 Reinstalling with fixed config..."
pnpm install

# 4. ローカルビルドテスト
echo "🔨 Testing local build..."
pnpm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # 5. Git commit
    echo "📤 Committing changes..."
    git add .npmrc package.json pnpm-lock.yaml
    git commit -m "fix: align pnpm config & fix @hookform/resolvers compatibility"
    git push origin main
    
    echo "🚀 Pushed to GitHub!"
    echo "💡 Now redeploy on Vercel with Build Cache OFF"
else
    echo "❌ Build failed. Check error messages above."
fi
