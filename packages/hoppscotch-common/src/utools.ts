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

// Storage 存储拦截 适配utools存储
// setItem
Storage.prototype._setItem = Storage.prototype.setItem
Storage.prototype.setItem = function (key, value) {
  try {
    window.utools.dbStorage.setItem(key, value)
  } catch {
  }
  return this._setItem(key, value)
}
// getItem
Storage.prototype._getItem = Storage.prototype.getItem
Storage.prototype.getItem = function (key) {
  let result = ""
  try {
    result = window.utools.dbStorage.getItem(key) || ""
  } catch {
  }
  return result || this._getItem(key)
}

// removeItem
Storage.prototype._removeItem = Storage.prototype.removeItem
Storage.prototype.removeItem = function (key) {
  try {
    window.utools.dbStorage.removeItem(key)
  } catch {
  }
  return this._getItem(key)
}

// ignore graphql disable
window.addEventListener("unhandledrejection", function (event) {
  if (event.reason.message === "ignore graphql disable") {
    event.preventDefault()
  }
})

// 页面图片路径调整 绝对路径转相对路径
window.addEventListener(
  "error",
  (event: any) => {
    if (event.target instanceof HTMLImageElement) {
      const target = event.target as HTMLImageElement
      if (target.getAttribute("src")?.indexOf("/images/") === 0) {
        target.setAttribute(
          "src",
          target.getAttribute("src")?.replace("/images/", "images/") || ""
        )
      }
    }
  },
  true
)

// 拦截a标签跳转
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

// eslint-disable-next-line no-restricted-syntax
window.localStorage.setItem("cookiesAllowed", "yes")
// eslint-disable-next-line no-restricted-syntax
window.localStorage.setItem("locale", "cn")
