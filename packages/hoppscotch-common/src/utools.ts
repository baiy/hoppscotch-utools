import {defaultSettings} from "~/newstore/settings"

// eslint-disable-next-line no-restricted-syntax
window.localStorage.setItem("cookiesAllowed", "yes")
// eslint-disable-next-line no-restricted-syntax
window.localStorage.setItem("locale", "cn")

// 默认配置
defaultSettings.EXTENSIONS_ENABLED = false
defaultSettings.EXPAND_NAVIGATION = false
defaultSettings.ZEN_MODE = true
defaultSettings.FONT_SIZE = "medium"

declare global {
  interface Window {
    utools: any
  }
}

const openUrl = (url: string) => {
  url = url.trim()
  if (url && url.indexOf("http") === 0) {
    window.utools.shellOpenExternal(url)
  }
}

// 拦截a标签跳转
(() => {
  document.body.addEventListener("click", function (event) {
    let target: any = event.target || event.srcElement
    if ("tagName" in target && target.tagName.toLowerCase() !== "a") {
      target = target.closest("a")
    }
    if (target && "tagName" in target && target.tagName.toLowerCase() === "a") {
      const url = target.getAttribute("href") || ""
      if (url.indexOf("http") !== 0) {
        return
      }
      if (event.preventDefault) {
        event.preventDefault()
      } else {
        if (window.event) {
          window.event.returnValue = true
        }
      }
      openUrl(url)
    }
  })
})()

export const IS_UTOOLS = true
