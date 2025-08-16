#!/bin/bash

echo "🧹 Cleaning up..."
pnpm dlx rimraf node_modules pnpm-lock.yaml

echo "📦 Installing compatible versions..."
pnpm install

echo "🔨 Testing build..."
pnpm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful! Pushing to Git..."
    git add .
    git commit -m "Fix: Downgrade @hookform/resolvers to v3.3.4 for zod v3 compatibility"
    git push origin main
    echo "🚀 Ready for Vercel deployment!"
else
    echo "❌ Build failed. Check the error messages above."
fi
