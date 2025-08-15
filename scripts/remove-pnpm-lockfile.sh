#!/bin/bash

echo "🧹 pnpm-lock.yamlを完全削除してnpmに統一"

# 1. pnpm-lock.yamlを削除
echo "📁 pnpm-lock.yamlを削除中..."
rm -f pnpm-lock.yaml

# 2. node_modulesも念のため削除
echo "📁 node_modulesを削除中..."
rm -rf node_modules

# 3. npmで再インストール（package-lock.jsonを生成）
echo "📦 npmで依存関係を再インストール..."
npm install

# 4. ローカルビルドテスト
echo "🔨 ローカルビルドテスト..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ ビルド成功！"
    
    # 5. 変更をコミット（pnpm-lock.yamlの削除を含む）
    echo "📤 pnpm-lock.yaml削除をコミット..."
    git add .
    git commit -m "fix: remove pnpm-lock.yaml to use npm exclusively"
    git push origin main
    
    echo "🚀 GitHubにプッシュ完了！"
    echo ""
    echo "🎯 次のステップ："
    echo "1. Vercelで再デプロイを実行"
    echo "2. Build Cache: OFF にする"
    echo "3. 今度はnpmが使われるはずです！"
    echo ""
    echo "🎊 これで確実に解決します！"
else
    echo "❌ ビルドエラー..."
fi
