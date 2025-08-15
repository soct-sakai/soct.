#!/bin/bash

echo "🎉 やりまーす！(*'ω' *) 最終修正スクリプト実行中..."

# 1. 完全クリーンアップ
echo "🧹 お掃除タイム〜！"
rm -rf node_modules
rm -f pnpm-lock.yaml
rm -f package-lock.json
rm -f yarn.lock

# 2. 特定バージョンを強制インストール
echo "📦 互換性のあるバージョンをインストール中..."
pnpm add @hookform/resolvers@3.3.4 zod@3.23.8 --save-exact

# 3. 他の依存関係を再インストール
echo "📦 その他の依存関係も再インストール..."
pnpm install

# 4. ローカルビルドテスト
echo "🔨 ビルドテスト中... ドキドキ..."
pnpm run build

if [ $? -eq 0 ]; then
    echo "✅ ビルド成功！やったー！ヽ(´▽｀)/"
    
    # 5. Git commit
    echo "📤 GitHubにプッシュ中..."
    git add .
    git commit -m "final fix: force @hookform/resolvers@3.3.4 with pnpm overrides (*'ω' *)"
    git push origin main
    
    echo "🚀 GitHubにプッシュ完了！"
    echo "💡 Vercelで再デプロイしてくださいね〜"
    echo "🎊 お疲れさまでした！(*'ω' *)✨"
else
    echo "❌ まだビルドエラーが... (´；ω；`) エラーメッセージを確認してください"
fi
