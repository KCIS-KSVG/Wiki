// docs/.vitepress/theme/useSettings.ts
import { ref, watch } from 'vue'

// ★ 关键重构：提取为模块级全局单例状态，保证全站所有组件实时同步
const isTracking = ref(true)
const lastReadPath = ref('')
const lastReadTitle = ref('')
const userName = ref('')
const reduceMotion = ref(false)
const searchEngine = ref<'baidu' | 'bing' | 'google'>('baidu')

let isInitialized = false

function getPathWeight(path: string) {
  if (!path) return 0
  const segments = path.split('/').filter(Boolean)
  let score = 0
  if (segments.length > 0) {
    const chMatch = segments[0].match(/^(\d+)-/)
    if (chMatch) score += parseInt(chMatch[1]) * 1000
  }
  if (segments.length > 1) {
    const artMatch = segments[1].match(/^(\d+)-/)
    if (artMatch) score += parseInt(artMatch[1])
  }
  return score
}

function initSettings() {
  if (typeof window === 'undefined' || isInitialized) return
  isInitialized = true

  const storedTracking = localStorage.getItem('ksvg_tracking')
  if (storedTracking !== null) isTracking.value = storedTracking === 'true'

  const storedMotion = localStorage.getItem('ksvg_reduce_motion')
  if (storedMotion !== null) reduceMotion.value = storedMotion === 'true'

  const storedEngine = localStorage.getItem('ksvg_search_engine') as any
  if (storedEngine) searchEngine.value = storedEngine

  lastReadPath.value = localStorage.getItem('ksvg_last_path') || ''
  lastReadTitle.value = localStorage.getItem('ksvg_last_title') || ''
  userName.value = localStorage.getItem('ksvg_user_name') || ''

  if (reduceMotion.value) document.documentElement.classList.add('reduce-motion')
}

// 客户端全局监听并实时写入 LocalStorage
if (typeof window !== 'undefined') {
  watch([isTracking, userName, reduceMotion, searchEngine], ([trackingVal, nameVal, motionVal, engineVal]) => {
    localStorage.setItem('ksvg_tracking', String(trackingVal))
    localStorage.setItem('ksvg_user_name', nameVal.trim())
    localStorage.setItem('ksvg_reduce_motion', String(motionVal))
    localStorage.setItem('ksvg_search_engine', engineVal)

    if (motionVal) document.documentElement.classList.add('reduce-motion')
    else document.documentElement.classList.remove('reduce-motion')

    if (!trackingVal) {
      localStorage.removeItem('ksvg_last_path')
      localStorage.removeItem('ksvg_last_title')
      lastReadPath.value = ''
      lastReadTitle.value = ''
    }
  })
}

export function useSettings() {
  initSettings()

  const updateProgress = (newPath: string, newTitle: string) => {
    if (!isTracking.value || typeof window === 'undefined') return
    const currentWeight = getPathWeight(lastReadPath.value)
    const newWeight = getPathWeight(newPath)

    if (newWeight >= currentWeight) {
      lastReadPath.value = newPath
      lastReadTitle.value = newTitle
      localStorage.setItem('ksvg_last_path', newPath)
      localStorage.setItem('ksvg_last_title', newTitle)
    }
  }

  const clearProgress = () => {
    lastReadPath.value = ''
    lastReadTitle.value = ''
    if (typeof window !== 'undefined') {
      localStorage.removeItem('ksvg_last_path')
      localStorage.removeItem('ksvg_last_title')
    }
  }

  return { isTracking, lastReadPath, lastReadTitle, userName, reduceMotion, searchEngine, clearProgress, updateProgress }
}