import { HoppModule } from "."
import { IS_UTOOLS } from "~/utools"

export const showChat = () => {
  if (IS_UTOOLS) return
  ;(window as any).$crisp.push([
    "do",
    "chat:show",
    (window as any).$crisp.push(["do", "chat:open"]),
  ])
}

export default <HoppModule>{
  onVueAppInit() {
    if (IS_UTOOLS) return
    // TODO: Env variable this ?
    ;(window as any).$crisp = []
    ;(window as any).CRISP_WEBSITE_ID = "3ad30257-c192-4773-955d-fb05a4b41af3"

    const d = document
    const s = d.createElement("script")

    s.src = "https://client.crisp.chat/l.js"
    s.async = true
    d.getElementsByTagName("head")[0].appendChild(s)
    ;(window as any).$crisp.push(["do", "chat:hide"])
    ;(window as any).$crisp.push([
      "on",
      "chat:closed",
      () => {
        ;(window as any).$crisp.push(["do", "chat:hide"])
      },
    ])
  },
}
