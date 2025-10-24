import { defineConfig } from 'vitepress'
import { resolve } from 'path'
import {
  containerPreview,
  componentPreview,
} from '@vitepress-demo-preview/plugin'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "v-Element",
  description: "A VitePress Site componentPreview,te",
  // 对于项目站点，base路径应为仓库名称
  base: '/yutongElement.github.io/',
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)

    },
  },
  vite: {
    resolve: {
      alias: {
        // 设置别名，方便导入项目中的组件
        '@': resolve(__dirname, '../../src')
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '组件文档', link: '/components/button' }
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Tooltip', link: '/components/tooltip' },
          { text: 'Icon', link: '/components/icon' },
          { text: 'Collapse', link: '/components/collapse' },
          { text: 'Input', link: '/components/message' },
          { text: 'Select', link: '/components/select' },
          { text: 'Message', link: '/components/message' },

        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
