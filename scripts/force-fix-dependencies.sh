#!/bin/bash

echo "🔥 Force fixing dependencies..."

# 1. 完全クリーンアップ
rm -rf node_modules
rm -f pnpm-lock.yaml
rm -f package-lock.json
rm -f yarn.lock

# 2. 特定バージョンを強制インストール
echo "📦 Installing exact versions..."
pnpm add @hookform/resolvers@3.3.4 zod@3.23.8 --save-exact

# 3. 他の依存関係を再インストール
pnpm install

# 4. ビルドテスト
echo "🔨 Testing build..."
pnpm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # 5. Git commit
    git add .
    git commit -m "Force fix: @hookform/resolvers@3.3.4 and zod@3.23.8 exact versions"
    git push origin main
    
    echo "🚀 Pushed to GitHub. Ready for Vercel deployment!"
else
    echo "❌ Build still failing. Check error messages."
fi
