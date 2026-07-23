<!-- docs/.vitepress/theme/components/ResumeBanner.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import { useSettings } from '../useSettings'
import { useData } from 'vitepress'

const { lastReadPath, lastReadTitle, isTracking, userName } = useSettings()
const { frontmatter } = useData()

// 控制提示框是否显示
const isVisible = ref(false)

onMounted(() => {
  // 仅在首页、开启了追踪、且有历史记录时触发
  if (frontmatter.value.layout === 'home' && isTracking.value && lastReadPath.value) {
    // 延迟 0.5 秒弹出，动画更自然
    setTimeout(() => {
      isVisible.value = true
    }, 500)

    // 5 秒后自动关闭
    setTimeout(() => {
      isVisible.value = false
    }, 5500)
  }
})

const closeBanner = () => {
  isVisible.value = false
}
</script>

<template>
  <Transition name="toast-slide">
    <div v-if="isVisible" class="toast-banner">
      <div class="toast-content">
        <span class="icon">📍</span>
        <div class="text-group">
          <span class="greeting">欢迎回来<template v-if="userName">，{{ userName }}</template>！</span>
          <span class="reading-title">继续阅读：<strong>{{ lastReadTitle }}</strong></span>
        </div>
      </div>
      
      <div class="toast-actions">
        <a :href="lastReadPath" class="resume-btn">一键续读</a>
        <button class="close-btn" @click="closeBanner" aria-label="关闭">✕</button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* 悬浮 Toast 样式 */
.toast-banner {
  position: fixed;
  top: 80px; /* 悬浮在导航栏下方 */
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  padding: 12px 16px 12px 20px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  min-width: 320px;
  max-width: 90vw;
}

/* 黑暗模式适配 */
.dark .toast-banner {
  background: var(--vp-c-bg-soft);
  border: 1px solid #333;
}

.toast-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon { font-size: 1.2rem; }

.text-group {
  display: flex;
  flex-direction: column;
  line-height: 1.4;
}

.greeting {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.reading-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.toast-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.resume-btn {
  background: var(--vp-c-brand-1);
  color: white;
  padding: 6px 16px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;
}

.resume-btn:hover { background: var(--vp-c-brand-2); }

.close-btn {
  background: transparent;
  border: none;
  font-size: 1.2rem;
  color: var(--vp-c-text-3);
  cursor: pointer;
  padding: 4px;
  line-height: 1;
  transition: color 0.2s;
}

.close-btn:hover { color: var(--vp-c-text-1); }

/* Vue 动画过渡效果 */
.toast-slide-enter-active,
.toast-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.toast-slide-enter-from,
.toast-slide-leave-to {
  opacity: 0;
  transform: translate(-50%, -30px); /* 向上滑出 */
}
</style>