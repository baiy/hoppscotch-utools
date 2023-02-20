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
