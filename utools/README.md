## hoppscotch v3 utools 适配

### `googleFonts` 本地化
```
使用 `https://github.com/feat-agency/vite-plugin-webfont-dl` 替换 `VitePluginFonts` 插接件
```
> packages/hoppscotch-web/vite.config.ts

### 禁用`js map`文件生成
`build.sourcemap = false`
> packages/hoppscotch-web/vite.config.ts

### 修改默认语言
`window.localStorage.setItem("locale", "cn")`
> packages/hoppscotch-common/src/utools.ts

### 禁用`cookie`提示
`window.localStorage.setItem("cookiesAllowed", "yes")`
> packages/hoppscotch-common/src/utools.ts

### `Firebase` 禁用
`if(IS_UTOOLS) return`
> packages/hoppscotch-common/src/helpers/fb/index.ts

### `crisp` 禁用
`if(IS_UTOOLS) return`
> packages/hoppscotch-common/src/modules/crisp.ts

### `处理a标签跳转`
> packages/hoppscotch-common/src/utools.ts

### 修改默认配置
> packages/hoppscotch-common/src/utools.ts

### 页面布局调整
