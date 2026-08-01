<!-- docs/.vitepress/theme/components/ResumeBanner.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import { useSettings } from '../useSettings'
import { useData } from 'vitepress'

const { lastReadPath, lastReadTitle, isTracking, userName } = useSettings()
const { frontmatter } = useData()

const isVisible = ref(false)

onMounted(() => {
  if (frontmatter.value.layout === 'home' && isTracking.value && lastReadPath.value) {
    setTimeout(() => { isVisible.value = true }, 500)
    setTimeout(() => { isVisible.value = false }, 5500)
  }
})

const closeBanner = () => { isVisible.value = false }
</script>

<template>
  <Transition name="toast-slide">
    <div v-if="isVisible" class="toast-banner">
      <div class="toast-content">
        <span class="icon">📍</span>
        <div class="text-group">
          <span class="greeting">欢迎回来<template v-if="userName">，{{ userName }}</template></span>
          <!-- 标题增加截断处理，防止撑爆屏幕 -->
          <span class="reading-title">{{ lastReadTitle }}</span>
        </div>
      </div>
      
      <div class="toast-actions">
        <!-- 文字改为“继续阅读” -->
        <a :href="lastReadPath" class="resume-btn">继续阅读</a>
        <button class="close-btn" @click="closeBanner" aria-label="关闭">✕</button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* 悬浮 Toast 样式 - 优化移动端适配 */
.toast-banner {
  position: fixed;
  top: 80px; 
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.04);
  border-radius: 40px; /* 改为胶囊形，更现代美观 */
  padding: 8px 12px 8px 16px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  
  /* 修复移动端撑爆屏幕的问题 */
  width: max-content;
  max-width: 92vw;
}

.dark .toast-banner {
  background: var(--vp-c-bg-soft);
  border: 1px solid #333;
}

/* 核心：允许左侧内容压缩 */
.toast-content {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0; /* 允许子元素截断文本 */
}

.icon { font-size: 1.1rem; flex-shrink: 0; }

.text-group {
  display: flex;
  flex-direction: column;
  line-height: 1.3;
  overflow: hidden; /* 配合文字截断 */
}

.greeting {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  white-space: nowrap;
}

.reading-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* 长标题显示为 ... */
}

.toast-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0; /* 保证按钮不被挤压 */
}

.resume-btn {
  background: var(--vp-c-brand-1);
  color: white;
  padding: 6px 14px;
  border-radius: 20px; /* 配合胶囊外形 */
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;
  white-space: nowrap;
}

.resume-btn:hover { background: var(--vp-c-brand-2); }

.close-btn {
  background: transparent;
  border: none;
  font-size: 1rem;
  color: var(--vp-c-text-3);
  cursor: pointer;
  padding: 4px 6px;
  border-radius: 50%;
}
.close-btn:hover { color: var(--vp-c-text-1); background: var(--vp-c-bg-alt); }

.toast-slide-enter-active,
.toast-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.toast-slide-enter-from,
.toast-slide-leave-to {
  opacity: 0;
  transform: translate(-50%, -30px);
}
</style>