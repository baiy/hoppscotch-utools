// Storage 存储拦截
const utools = "utools" in window ? window.utools : ""
// setItem
Storage.prototype._setItem = Storage.prototype.setItem
Storage.prototype.setItem = function (key, value) {
  try {
    utools && utools.dbStorage.setItem(key, value)
  } catch {}
  return this._setItem(key, value)
}
// getItem
Storage.prototype._getItem = Storage.prototype.getItem
Storage.prototype.getItem = function (key) {
  let result = ""
  try {
    result = utools ? utools.dbStorage.getItem(key) : ""
  } catch {}
  return result || this._getItem(key)
}

// removeItem
Storage.prototype._removeItem = Storage.prototype.removeItem
Storage.prototype.removeItem = function (key) {
  try {
    utools && utools.dbStorage.removeItem(key)
  } catch {}
  return this._getItem(key)
}
