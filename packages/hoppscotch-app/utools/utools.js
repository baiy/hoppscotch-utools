import { defaultSettings } from "~/newstore/settings"

let isReady = false

// 修改用户配置默认值
defaultSettings.EXTENSIONS_ENABLED = false
defaultSettings.EXPAND_NAVIGATION = false
defaultSettings.ZEN_MODE = true
defaultSettings.FONT_SIZE = "medium"
defaultSettings.SIDEBAR_ON_LEFT = true

// eslint-disable-next-line no-restricted-syntax
window.localStorage.setItem("cookiesAllowed", "yes")

const openUrl = (url) => {
  if (isReady) {
    window.utools.shellOpenExternal(url)
  }
}

// 拦截a标签跳转
const interceptLink = () => {
  document.body.addEventListener("click", function (event) {
    let target = event.target || event.srcElement
    if ("tagName" in target && target.tagName.toLowerCase() !== "a") {
      target = target.closest("a")
    }
    if (target && "tagName" in target && target.tagName.toLowerCase() === "a") {
      if (event.preventDefault) {
        event.preventDefault()
      } else {
        window.event.returnValue = true
      }
      openUrl(target.getAttribute("href"))
    }
  })
}
interceptLink()

const initialize = () => {
  if (!isReady && "utools" in window) {
    window.utools.onPluginReady(() => {
      isReady = true
    })
  }
}

export const IS_UTOOLS = true

export default {
  openUrl,
  initialize,
}
