export function IntroductionSection() {
  return (
    <section className="py-16 relative text-gray-800">
      {/* 背景パターン */}
      <div className="absolute inset-0 z-0 opacity-25">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#666" strokeWidth="1.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="white" />
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* メインコンテンツ */}
      <div className="container px-4 md:px-6 relative z-10">
        {/* メインコピー */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
            🏡 壁掛けテレビ × リフォーム × スマートホーム 🌟
          </h2>
          <p className="text-xl md:text-2xl mb-4 text-blue-700">✨ 見慣れたお部屋が、まるでラグジュアリー空間に！ ✨</p>
          <p className="text-lg italic text-blue-600">(*´ω｀*)エコカラットはいいぞ～。</p>
        </div>

        {/* サービス紹介 */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-blue-800">
            🖥️ ソクトノカベカケで理想のリビングを実現！
          </h3>
          <p className="text-xl text-center mb-8 text-blue-700">
            「壁掛けテレビにしたい！」その想い、すべてお任せください💪
          </p>

          <div className="bg-white p-6 rounded-lg mb-12 shadow-md border border-gray-200">
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span> 今すぐ設置したい方
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span> 1か月後の新しいテレビと一緒に設置したい方
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span> 3か月後の新居への引越しに合わせたい方
              </li>
            </ul>
            <p className="mt-4 text-blue-600 font-semibold">💡 どんなスケジュールにも対応可能！</p>
          </div>
        </div>

        {/* テレビサイズ */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-blue-800">
            📺 テレビのサイズ、こだわりませんか？
          </h3>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🔹</span>
                <span>
                  <span className="font-bold">視聴しやすい 55インチ</span>（使いやすいサイズ感！）
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🔹</span>
                <span>
                  <span className="font-bold">リビングの王道 65インチ</span>（これを選ぶ人が多い！）
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🔹</span>
                <span>
                  <span className="font-bold">迫力の映像 75インチ</span>（映画好きにはたまらない！）
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🔹</span>
                <span>
                  <span className="font-bold">憧れの 85インチ</span>（大画面でスポーツ観戦！）
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🔹</span>
                <span>
                  <span className="font-bold">特別な空間に 90インチ以上</span>（本物のシアタールームを作りたいなら！）
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🔹</span>
                <span>
                  <span className="font-bold">100インチでリゾート気分</span>（リビングがラグジュアリーホテルに！）
                </span>
              </li>
            </ul>
            <div className="mt-6 text-center">
              <p className="text-xl font-bold text-blue-600">💡 65インチ以上の大型テレビの施工が得意な会社です！</p>
            </div>
          </div>
        </div>

        {/* 対応可能な施工 */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-blue-800">🏠 あらゆる壁に対応！</h3>
          <div className="bg-white p-6 rounded-lg mb-8 shadow-md border border-gray-200">
            <p className="font-bold text-xl mb-4 text-blue-700">💪 「壁掛けって、うちの壁でもできるの？」</p>
            <p className="text-lg mb-6">→ はい、できます！どんな壁でもプロの技術でしっかり施工！</p>

            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span>
                  <span className="font-semibold">下地補強がない壁</span>（補強ナシでもOKな方法をご提案！）
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span>
                  <span className="font-semibold">隠ぺい配線</span>（配線が見えないスッキリ施工！）
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span>
                  <span className="font-semibold">エコカラットやタイル壁</span>（おしゃれな壁にも取付可能！）
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span>
                  <span className="font-semibold">コンクリート壁</span>（専門の工具と技術で対応！）
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span>
                  <span className="font-semibold">テレビの買い替えもおまかせ！</span>（古い金具の取り外しもOK）
                </span>
              </li>
            </ul>
            <p className="mt-4 text-center text-lg">「うちでも壁掛けできる？」と気になったら、まずは無料相談を！</p>
          </div>

          <div className="text-center mt-12 bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h4 className="text-xl font-bold mb-4 text-blue-700">
              🔹 愛知・岐阜・三重・静岡・特に名古屋市では信頼の実績！
            </h4>
            <p className="text-lg mb-4">
              壁掛けテレビと壁の専門店のプロが、あなたのリビングを
              <span className="text-blue-600 font-bold mx-1">劇的変化</span>
              させます✨
            </p>
            <p className="text-xl font-bold text-blue-600">あなたの理想の空間、ソクトノカベカケが全力でお手伝い！</p>
          </div>
        </div>
      </div>
    </section>
  )
}
