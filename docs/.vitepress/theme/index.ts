// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import { h, watch } from 'vue'
import { useRoute, useData } from 'vitepress'
import ResumeBanner from './components/ResumeBanner.vue'
import './custom.css'
import { useSettings } from './useSettings'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(ResumeBanner)
    })
  },
  setup() {
    const route = useRoute()
    const { page } = useData() // 使用 VitePress 原生的页面数据
    const { isTracking, updateProgress } = useSettings()

    watch(
      () => route.path,
      (newPath) => {
        // 黑名单：严格排除首页、设置页、404页面
        const isExcluded = newPath === '/' || newPath === '/index.html' || newPath.includes('settings') || newPath.includes('404')
        
        if (typeof window !== 'undefined' && isTracking.value && !isExcluded) {
          // 延迟 100ms 确保 page 对象已经更新为当前新页面的数据
          setTimeout(() => {
            const currentTitle = page.value.title
            if (currentTitle) {
              updateProgress(newPath, currentTitle)
            }
          }, 100)
        }
      },
      { immediate: true }
    )
  }
}