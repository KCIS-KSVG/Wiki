<!-- docs/.vitepress/theme/components/WelcomeModal.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import { useSettings } from '../useSettings'

const { userName } = useSettings()

const showModal = ref(false)
const tempName = ref('')

onMounted(() => {
  if (typeof window !== 'undefined') {
    // 检查是否有首次访问标记
    const onboarded = localStorage.getItem('ksvg_onboarded')
    if (!onboarded) {
      showModal.value = true
    }
  }
})

const completeOnboarding = () => {
  if (tempName.value.trim()) {
    userName.value = tempName.value.trim()
  }
  if (typeof window !== 'undefined') {
    localStorage.setItem('ksvg_onboarded', 'true')
  }
  showModal.value = false
}
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="showModal" class="welcome-overlay">
        <div class="welcome-card">
          
          <!-- 头部包豪斯/Apple 极简风格 -->
          <div class="card-header">
            <span class="tag">KSVG Wiki 知识库</span>
            <h2>开启您的摄影与媒体学习工作站</h2>
            <p class="subtitle">专为校园与入门摄影师打造的系统化沉淀平台。</p>
          </div>

          <!-- 3 大核心亮点 -->
          <div class="feature-list">
            <div class="feature-item">
              <span class="icon">></span>
              <div class="text">
                <strong>智能最大阅读进度</strong>
                <p>自动记住您学到的最深章节，重返首页一键续读。</p>
              </div>
            </div>

            <div class="feature-item">
              <span class="icon">></span>
              <div class="text">
                <strong>划选快捷扩展索引</strong>
                <p>选中文中专业术语，一键调用 Google/Bing/百度 拓展阅读。</p>
              </div>
            </div>

            <div class="feature-item">
              <span class="icon">></span>
              <div class="text">
                <strong>本地隐私安全</strong>
                <p>所有偏好与阅读数据全盘保存在您的设备本地。</p>
              </div>
            </div>
          </div>

          <!-- 称呼输入框 -->
          <div class="input-block">
            <label>我们应该如何称呼您？</label>
            <input
              type="text"
              v-model="tempName"
              placeholder="输入您的昵称"
              maxlength="15"
              @keydown.enter="completeOnboarding"
            />
          </div>

          <!-- 开始按钮 -->
          <button class="submit-btn" @click="completeOnboarding">
            进入 KSVG Wiki →
          </button>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* 遮罩层：高质感毛玻璃 */
.welcome-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

/* 主卡片：方正高对比度 */
.welcome-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  width: 100%;
  max-width: 480px;
  padding: 32px 28px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.card-header .tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--vp-c-brand-1);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 6px;
}

.card-header h2 {
  font-size: 1.4rem;
  font-weight: 800;
  margin: 0 0 6px 0;
  color: var(--vp-c-text-1);
  letter-spacing: -0.3px;
}

.card-header .subtitle {
  font-size: 0.88rem;
  color: var(--vp-c-text-2);
  margin: 0 0 20px 0;
}

/* 特性列表 */
.feature-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
  padding: 16px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.feature-item .icon {
  font-size: 1.1rem;
  line-height: 1.2;
}

.feature-item .text strong {
  display: block;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.feature-item .text p {
  margin: 2px 0 0 0;
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  line-height: 1.35;
}

/* 输入框区域 */
.input-block {
  margin-bottom: 24px;
}

.input-block label {
  display: block;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 8px;
}

.input-block input {
  width: 100%;
  padding: 10px 14px;
  font-size: 0.95rem;
  border: 1.5px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  box-sizing: border-box;
  transition: border-color 0.2s;
}

.input-block input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}

/* 进入按钮 */
.submit-btn {
  width: 100%;
  padding: 12px;
  background: var(--vp-c-brand-1);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s;
}

.submit-btn:hover {
  opacity: 0.9;
}

/* 淡入淡出动画 */
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from, .modal-fade-leave-to {
  opacity: 0;
}
</style>