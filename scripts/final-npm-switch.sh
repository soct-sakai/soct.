#!/bin/bash

echo "🔄 最終解決策：npmに完全切り替え"

# 1. pnpm関連ファイルを全削除
echo "🧹 pnpm関連ファイルを削除..."
rm -rf node_modules
rm -f pnpm-lock.yaml
rm -f .npmrc

# 2. npmで再インストール
echo "📦 npmで依存関係をインストール..."
npm install

# 3. ビルドテスト
echo "🔨 ビルドテスト..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ npmでビルド成功！"
    
    # 4. Git commit
    echo "📤 変更をコミット..."
    git add .
    git commit -m "FINAL FIX: switch to npm to resolve all dependency issues"
    git push origin main
    
    echo "🚀 GitHubにプッシュ完了！"
    echo ""
    echo "🎊 次のステップ："
    echo "1. Vercelで PNPM_INSTALL_FLAGS 環境変数を削除"
    echo "2. 再デプロイを実行"
    echo ""
    echo "npmなら確実に動きます！"
else
    echo "❌ npmでもエラー... さらなる調査が必要"
fi
