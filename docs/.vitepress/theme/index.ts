// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import { h, watch } from 'vue'
import { useRoute, useData } from 'vitepress'
import ResumeBanner from './components/ResumeBanner.vue'
import SelectionSearch from './components/SelectionSearch.vue'
import WelcomeModal from './components/WelcomeModal.vue' // 1. 引入新手引导
import './custom.css'
import { useSettings } from './useSettings'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(ResumeBanner),
      'layout-bottom': () => [
        h(SelectionSearch),
        h(WelcomeModal) // 2. 挂载引导弹窗
      ]
    })
  },
  setup() {
    const route = useRoute()
    const { page } = useData()
    const { isTracking, updateProgress } = useSettings()

    watch(
      () => route.path,
      (newPath) => {
        const isExcluded = newPath === '/' || newPath === '/index.html' || newPath.includes('settings') || newPath.includes('404')
        if (typeof window !== 'undefined' && isTracking.value && !isExcluded) {
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