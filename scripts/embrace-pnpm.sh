#!/bin/bash

echo "🚀 pnpm正式採用！正しい設定で確実にデプロイ"

# 1. pnpmバージョンを9.15.9に固定（Vercelと同じ）
echo "📌 pnpmを9.15.9に固定..."
corepack enable
corepack prepare pnpm@9.15.9 --activate

echo "現在のpnpmバージョン: $(pnpm -v)"

# 2. package.jsonをpnpm用に正しく設定
echo "📝 package.jsonをpnpm用に更新..."
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
    }
  }
}
EOF

# 3. .npmrcを正しく設定
echo "📝 .npmrcを設定..."
cat > .npmrc << 'EOF'
strict-peer-dependencies=false
auto-install-peers=true
public-hoist-pattern=*
EOF

# 4. 古いファイルを削除
echo "🧹 古いファイルを削除..."
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock

# 5. pnpm@9.15.9で新しいロックファイルを生成
echo "📦 pnpm@9.15.9で依存関係をインストール..."
pnpm install

# 6. ロックファイルバージョンを確認
echo "🔍 ロックファイルバージョン確認..."
if [ -f pnpm-lock.yaml ]; then
    LOCK_VERSION=$(head -n 5 pnpm-lock.yaml | grep "lockfileVersion:")
    echo "ロックファイルバージョン: $LOCK_VERSION"
    
    if echo "$LOCK_VERSION" | grep -q "'9"; then
        echo "✅ ロックファイルがv9で正しく生成されました！"
    else
        echo "❌ ロックファイルバージョンが期待と異なります"
        head -n 10 pnpm-lock.yaml
    fi
fi

# 7. バージョン確認
echo "🔍 重要なパッケージのバージョン確認..."
echo "@hookform/resolvers: $(pnpm list @hookform/resolvers --depth=0 2>/dev/null | grep @hookform/resolvers || echo 'not found')"
echo "zod: $(pnpm list zod --depth=0 2>/dev/null | grep zod || echo 'not found')"

# 8. ビルドテスト
echo "🔨 ビルドテスト..."
pnpm run build

if [ $? -eq 0 ]; then
    echo "✅ pnpmでビルド成功！"
    
    # 9. Git commit & push
    echo "📤 pnpm正式採用をコミット..."
    git add package.json pnpm-lock.yaml .npmrc
    git commit -m "EMBRACE PNPM: properly configure pnpm@9.15.9 with correct overrides"
    git push origin main
    
    echo "🚀 GitHubにプッシュ完了！"
    echo ""
    echo "🎊 pnpm正式採用完了！"
    echo ""
    echo "🎯 Vercel設定確認："
    echo "1. Install Command: pnpm install（デフォルトでOK）"
    echo "2. Build Command: pnpm run build（デフォルトでOK）"
    echo "3. Node.js Version: 20.x"
    echo "4. 環境変数 PNPM_INSTALL_FLAGS があれば削除"
    echo "5. Build Cache: OFF で Redeploy"
    echo ""
    echo "✨ これで確実にデプロイできます！"
else
    echo "❌ ビルドエラー..."
    echo "エラーメッセージを確認してください"
fi
