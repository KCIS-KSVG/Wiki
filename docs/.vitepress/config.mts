// docs/.vitepress/config.mts
import { defineConfig } from 'vitepress'
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'

export default defineConfig({
  lang: 'zh-CN',
  title: 'KSVG Wiki',
  description: 'KSVG 摄影与媒体技术知识库',
  
  // 生成 Sitemap 提升搜索引擎收录
  sitemap: { hostname: 'https://wiki.ksvg.com.cn' },
  
  head: [
    ['link', { rel: 'icon', href: 'https://raw.githubusercontent.com/KCIS-KSVG/Data/main/embed/ksvg-logo.png' }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large' }],
    ['meta', { property: 'og:site_name', content: 'KSVG Wiki' }],
    ['meta', { name: 'geo.region', content: 'CN' }],
  ],

  themeConfig: {
    logo: 'https://raw.githubusercontent.com/KCIS-KSVG/Data/main/embed/ksvg-logo.png',
    nav,
    sidebar,

    // 全局原生 UI 完全汉化
    docFooter: { prev: '上一篇', next: '下一篇' },
    outline: { label: '本页导览' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '文章目录',
    darkModeSwitchLabel: '深浅模式',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    // 社交媒体矩阵 (使用原生图标)
    socialLinks: [
      { icon: 'github', link: 'https://github.com/KCIS-KSVG' },
      { icon: 'youtube', link: 'https://www.youtube.com/@kcisec-ksvg' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/23855258' }
    ],

    search: { provider: 'local' },
    footer: { copyright: 'Copyright © 2022-2026 KSVG' }
  }
})