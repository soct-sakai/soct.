import { Award, Shield, Star, Palette } from "lucide-react"

export function TrustBadges() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <Award className="h-12 w-12 text-blue-500 mb-2" />
            <h3 className="font-bold">1000台以上の施工実績</h3>
            <p className="text-sm text-gray-600">豊富な経験と実績</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Shield className="h-12 w-12 text-blue-500 mb-2" />
            <h3 className="font-bold">3年間の長期保証</h3>
            <p className="text-sm text-gray-600">安心のアフターサポート</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Palette className="h-12 w-12 text-blue-500 mb-2" />
            <h3 className="font-bold">カスタマイズ自由度</h3>
            <p className="text-sm text-gray-600">お好みのデザインに対応</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Star className="h-12 w-12 text-blue-500 mb-2" />
            <h3 className="font-bold">お客様満足度98%</h3>
            <p className="text-sm text-gray-600">高い顧客満足度を誇ります</p>
          </div>
        </div>
      </div>
    </div>
  )
}

