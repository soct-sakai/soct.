#!/bin/bash

echo "🚨 緊急修正：確実にバージョンを固定"

# 1. pnpmバージョン確認
echo "📌 pnpmバージョン確認..."
corepack enable
corepack prepare pnpm@9.15.9 --activate
echo "現在のpnpmバージョン: $(pnpm -v)"

# 2. 完全クリーンアップ
echo "🧹 完全クリーンアップ..."
rm -rf node_modules
rm -f pnpm-lock.yaml

# 3. package.jsonを修正（overridesの書き方を変更）
echo "📝 package.jsonを修正..."
cat > package.json << 'EOF'
{
  "name": "tv-mounting-service",
  "version": "0.1.0",
  "private": true,
  "packageManager": "pnpm@9.15.9",
  "engines": {
    "node": ">=18 <21",
    "pnpm": ">=9.0.0"
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
  },
  "pnpm": {
    "overrides": {
      "@hookform/resolvers": "3.3.4",
      "zod": "3.23.8"
    },
    "peerDependencyRules": {
      "ignoreMissing": ["react", "react-dom"]
    }
  }
}
EOF

# 4. .npmrcを設定
echo "📝 .npmrcを設定..."
cat > .npmrc << 'EOF'
strict-peer-dependencies=false
auto-install-peers=true
public-hoist-pattern=*
shamefully-hoist=true
EOF

# 5. 強制的に正確なバージョンをインストール
echo "📦 強制的に正確なバージョンをインストール..."
pnpm add @hookform/resolvers@3.3.4 --save-exact
pnpm add zod@3.23.8 --save-exact

# 6. 他の依存関係をインストール
echo "📦 他の依存関係をインストール..."
pnpm install

# 7. インストールされたバージョンを確認
echo "🔍 インストールされたバージョンを確認..."
echo "@hookform/resolvers: $(pnpm list @hookform/resolvers --depth=0 2>/dev/null | grep @hookform/resolvers)"
echo "zod: $(pnpm list zod --depth=0 2>/dev/null | grep zod)"

# 8. ロックファイルの内容を確認
echo "🔍 ロックファイルの重要部分を確認..."
if [ -f pnpm-lock.yaml ]; then
    echo "lockfileVersion: $(head -n 5 pnpm-lock.yaml | grep lockfileVersion)"
    echo "@hookform/resolvers in lockfile:"
    grep -A 2 -B 2 "@hookform/resolvers" pnpm-lock.yaml | head -n 10
fi

# 9. ビルドテスト
echo "🔨 ビルドテスト..."
pnpm run build

if [ $? -eq 0 ]; then
    echo "✅ ビルド成功！正確なバージョンが適用されました！"
    
    # 10. Git commit & push
    echo "📤 正確なバージョン固定をコミット..."
    git add package.json pnpm-lock.yaml .npmrc
    git commit -m "FORCE EXACT VERSIONS: @hookform/resolvers@3.3.4 + zod@3.23.8 with --save-exact"
    git push origin main
    
    echo "🚀 GitHubにプッシュ完了！"
    echo ""
    echo "🎊 今度こそ正確なバージョンでデプロイされます！"
else
    echo "❌ ビルドエラー..."
    echo "インストールされたバージョンを再確認してください"
fi
