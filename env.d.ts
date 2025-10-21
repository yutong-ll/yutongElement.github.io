/// <reference types="vite/client" />

declare module 'postcss-color-mix';

// 添加对 .vue 文件的类型声明
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
