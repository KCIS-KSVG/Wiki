// docs/.vitepress/theme/useSettings.ts
import { ref, watch, onMounted } from 'vue'

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

export function useSettings() {
  const isTracking = ref(true)
  const lastReadPath = ref('')
  const lastReadTitle = ref('')
  const userName = ref('')
  
  // 新增设置项
  const reduceMotion = ref(false) // 减弱动画效果

  onMounted(() => {
    if (typeof window !== 'undefined') {
      const storedTracking = localStorage.getItem('ksvg_tracking')
      if (storedTracking !== null) isTracking.value = storedTracking === 'true'
      
      const storedMotion = localStorage.getItem('ksvg_reduce_motion')
      if (storedMotion !== null) reduceMotion.value = storedMotion === 'true'

      lastReadPath.value = localStorage.getItem('ksvg_last_path') || ''
      lastReadTitle.value = localStorage.getItem('ksvg_last_title') || ''
      userName.value = localStorage.getItem('ksvg_user_name') || ''
      
      // 应用动画效果
      if (reduceMotion.value) document.documentElement.classList.add('reduce-motion')
    }
  })

  // 监听并保存
  watch([isTracking, userName, reduceMotion], ([trackingVal, nameVal, motionVal]) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('ksvg_tracking', String(trackingVal))
      localStorage.setItem('ksvg_user_name', nameVal.trim())
      localStorage.setItem('ksvg_reduce_motion', String(motionVal))
      
      // 动态控制全站动画
      if (motionVal) document.documentElement.classList.add('reduce-motion')
      else document.documentElement.classList.remove('reduce-motion')

      if (!trackingVal) {
        localStorage.removeItem('ksvg_last_path')
        localStorage.removeItem('ksvg_last_title')
        lastReadPath.value = ''
        lastReadTitle.value = ''
      }
    }
  })

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
      alert('已重置阅读进度。')
    }
  }

  return { isTracking, lastReadPath, lastReadTitle, userName, reduceMotion, clearProgress, updateProgress }
}