import { Button } from "@/components/ui/button"

export function ProjectExport() {
  const exportProject = () => {
    const projectData = {
      version: "1.0",
      components: {
        RoomSimulator: {
          // RoomSimulatorコンポーネントの現在の状態をここに追加
        },
        // 他のコンポーネントの状態も同様に追加
      },
      // その他のプロジェクト全体の設定や状態
    }

    const dataStr = JSON.stringify(projectData)
    const dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr)

    const exportFileDefaultName = "tv-mounting-project.json"

    const linkElement = document.createElement("a")
    linkElement.setAttribute("href", dataUri)
    linkElement.setAttribute("download", exportFileDefaultName)
    linkElement.click()
  }

  return (
    <Button onClick={exportProject} className="bg-green-500 hover:bg-green-600 text-white">
      プロジェクトをエクスポート
    </Button>
  )
}

