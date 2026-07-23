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

    // 社交媒体矩阵
// docs/.vitepress/config.mts 的 socialLinks 部分：
    socialLinks: [
      { icon: 'github', link: 'https://github.com/KCIS-KSVG' },
      { icon: 'youtube', link: 'https://www.youtube.com/@kcisec-ksvg' },
      { 
        // 【修复】Bilibili 完美版图标
        icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M152.05 60.59a32 32 0 0145.26 0l46.21 46.22h41.44l46.22-46.22a32 32 0 0145.26 45.26l-18.12 18.15h25.68A80 80 0 01464 204v160a80 80 0 01-80 80H128a80 80 0 01-80-80V204a80 80 0 0180-80h25.68l-18.12-18.15a32 32 0 010-45.26zM128 188a16 16 0 00-16 16v160a16 16 0 0016 16h256a16 16 0 0016-16V204a16 16 0 00-16-16H128zm48 52a16 16 0 0116 16v40a16 16 0 01-32 0v-40a16 16 0 0116-16zm160 0a16 16 0 0116 16v40a16 16 0 01-32 0v-40a16 16 0 0116-16z"/></svg>' }, 
        link: 'https://space.bilibili.com/23855258' 
      }
    ],

    search: { provider: 'local' },
    footer: { copyright: 'Copyright © 2022-2026 KSVG' }
  }
})