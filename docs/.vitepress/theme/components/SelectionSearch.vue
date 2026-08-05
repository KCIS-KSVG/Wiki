<!-- docs/.vitepress/theme/components/SelectionSearch.vue -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useSettings } from '../useSettings'

const { searchEngine } = useSettings()

const selectedText = ref('')
const popupTop = ref(0)
const popupLeft = ref(0)
const isVisible = ref(false)

const engineMap = {
  baidu: { name: '百度', url: 'https://www.baidu.com/s?wd=' },
  bing: { name: 'Bing', url: 'https://www.bing.com/search?q=' },
  google: { name: 'Google', url: 'https://www.google.com/search?q=' }
}

const handleSelection = () => {
  const selection = window.getSelection()
  const text = selection ? selection.toString().trim() : ''

  if (text.length > 0 && text.length < 50) {
    const range = selection.getRangeAt(0)
    const rect = range.getBoundingClientRect()

    popupTop.value = rect.top + window.scrollY - 38
    popupLeft.value = rect.left + window.scrollX + (rect.width / 2)
    selectedText.value = text
    isVisible.value = true
  } else {
    isVisible.value = false
  }
}

const doSearch = () => {
  const engine = engineMap[searchEngine.value] || engineMap.baidu
  const targetUrl = engine.url + encodeURIComponent(selectedText.value)
  window.open(targetUrl, '_blank')
  isVisible.value = false
}

onMounted(() => {
  document.addEventListener('mouseup', handleSelection)
  document.addEventListener('touchend', handleSelection)
})

onUnmounted(() => {
  document.removeEventListener('mouseup', handleSelection)
  document.removeEventListener('touchend', handleSelection)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="pop">
      <button 
        v-if="isVisible" 
        class="apple-search-pop"
        :style="{ top: `${popupTop}px`, left: `${popupLeft}px` }"
        @mousedown.prevent="doSearch"
        @touchend.prevent="doSearch"
      >
        <span class="engine-tag">{{ engineMap[searchEngine]?.name || 'Search' }}</span>
        <span class="divider">|</span>
        <span class="search-text">"{{ selectedText }}"</span>
      </button>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Apple 极简方正风格：高对比度、精准像素外框、SF 字体感 */
.apple-search-pop {
  position: absolute;
  transform: translateX(-50%);
  z-index: 9999;

  background: #000000;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 5px 11px;
  border-radius: 6px; /* 方正边角 */
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.2px;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);

  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: opacity 0.12s ease, transform 0.12s ease;
}

/* 深色模式下取反，保持极高对比度 */
.dark .apple-search-pop {
  background: #ffffff;
  color: #000000;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

.apple-search-pop:hover {
  opacity: 0.85;
}

.engine-tag {
  color: #3b82f6; /* 苹果经典蓝色 */
  font-weight: 700;
}

.dark .engine-tag {
  color: #2563eb;
}

.divider {
  opacity: 0.25;
  font-size: 10px;
}

.search-text {
  max-width: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 精致微弹出动画 */
.pop-enter-active, .pop-leave-active { transition: all 0.15s cubic-bezier(0.16, 1, 0.3, 1); }
.pop-enter-from, .pop-leave-to { opacity: 0; transform: translateX(-50%) translateY(4px) scale(0.96); }
</style>