#!/bin/bash

echo "🚨 緊急：pnpm-lock.yamlをGitから完全削除"

# 1. 現在のGit状況を確認
echo "📋 現在のGit状況："
git status
echo ""
echo "📋 Gitで管理されているpnpm関連ファイル："
git ls-files | grep -E "(pnpm-lock|\.npmrc)"

# 2. Gitからpnpm-lock.yamlを完全削除
echo "🗑️ Gitからpnpm-lock.yamlを完全削除..."
git rm -f pnpm-lock.yaml 2>/dev/null || echo "pnpm-lock.yaml already removed from git"
git rm -f .npmrc 2>/dev/null || echo ".npmrc already removed from git"

# 3. ローカルファイルも確実に削除
echo "🧹 ローカルファイルも削除..."
rm -rf node_modules
rm -f pnpm-lock.yaml
rm -f .npmrc
find . -name "pnpm-lock.yaml" -delete 2>/dev/null || true
find . -name ".npmrc" -not -path "./node_modules/*" -delete 2>/dev/null || true

# 4. package.jsonを確実にnpm専用に更新
echo "📝 package.jsonをnpm専用に更新..."
cat > package.json << 'EOF'
{
  "name": "tv-mounting-service",
  "version": "0.1.0",
  "private": true,
  "engines": {
    "node": ">=18 <21",
    "npm": ">=8.0.0"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@hookform/resolvers": "3.3.4",
    "@radix-ui/react-accordion": "^1.2.2",
    "@radix-ui/react-alert-dialog": "^1.1.4",
    "@radix-ui/react-aspect-ratio": "^1.1.1",
    "@radix-ui/react-avatar": "^1.1.2",
    "@radix-ui/react-checkbox": "^1.1.3",
    "@radix-ui/react-collapsible": "^1.1.2",
    "@radix-ui/react-context-menu": "^2.2.4",
    "@radix-ui/react-dialog": "^1.1.4",
    "@radix-ui/react-dropdown-menu": "^2.1.4",
    "@radix-ui/react-hover-card": "^1.1.4",
    "@radix-ui/react-label": "^2.1.1",
    "@radix-ui/react-menubar": "^1.1.4",
    "@radix-ui/react-navigation-menu": "^1.2.3",
    "@radix-ui/react-popover": "^1.1.4",
    "@radix-ui/react-progress": "^1.1.1",
    "@radix-ui/react-radio-group": "^1.2.2",
    "@radix-ui/react-scroll-area": "^1.2.2",
    "@radix-ui/react-select": "^2.1.4",
    "@radix-ui/react-separator": "^1.1.1",
    "@radix-ui/react-slider": "^1.2.2",
    "@radix-ui/react-slot": "^1.1.1",
    "@radix-ui/react-switch": "^1.1.2",
    "@radix-ui/react-tabs": "^1.1.2",
    "@radix-ui/react-toast": "^1.2.4",
    "@radix-ui/react-toggle": "^1.1.1",
    "@radix-ui/react-toggle-group": "^1.1.1",
    "@radix-ui/react-tooltip": "^1.1.6",
    "autoprefixer": "^10.4.20",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.0.4",
    "date-fns": "^4.1.0",
    "embla-carousel": "^8.6.0",
    "embla-carousel-autoplay": "^8.6.0",
    "embla-carousel-react": "^8.5.1",
    "geist": "^1.3.1",
    "input-otp": "^1.4.1",
    "lucide-react": "^0.454.0",
    "next": "15.2.4",
    "next-themes": "^0.4.4",
    "react": "^19.0.0",
    "react-day-picker": "^9.8.0",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.62.0",
    "react-resizable-panels": "^2.1.7",
    "recharts": "^2.15.0",
    "sonner": "^1.7.1",
    "tailwind-merge": "^2.5.5",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.6",
    "zod": "3.23.8"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "postcss": "^8.5.0",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.0.2"
  }
}
EOF

# 5. npmで正確なバージョンをインストール
echo "📦 npmで正確なバージョンをインストール..."
npm install --save-exact @hookform/resolvers@3.3.4 zod@3.23.8
npm install

# 6. 削除確認
echo "📋 削除後の確認："
echo "pnpm-lock.yaml exists: $(test -f pnpm-lock.yaml && echo 'YES - 問題!' || echo 'NO - OK!')"
echo "package-lock.json exists: $(test -f package-lock.json && echo 'YES - OK!' || echo 'NO - 問題!')"

# 7. ビルドテスト
echo "🔨 ビルドテスト..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ ビルド成功！"
    
    # 8. Git status確認
    echo "📋 コミット前のGit status："
    git status
    echo ""
    
    # 9. Git add & commit（削除も含む）
    echo "📤 pnpm完全削除をコミット..."
    git add .
    git add -u  # 削除されたファイルも追加
    git commit -m "FINAL REMOVAL: completely delete pnpm-lock.yaml from git, npm only"
    git push origin main
    
    echo "🚀 GitHubにプッシュ完了！"
    echo ""
    echo "🎊 今度こそnpmが使われます！"
    echo "📋 確認事項："
    echo "1. pnpm-lock.yamlがGitから完全削除された"
    echo "2. package-lock.jsonが生成された"
    echo "3. package.jsonがnpm専用設定"
    echo ""
    echo "🔄 Vercelで再デプロイしてください！"
else
    echo "❌ ローカルビルドエラー..."
    echo "エラーメッセージを確認してください"
fi
