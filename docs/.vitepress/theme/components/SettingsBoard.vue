<!-- docs/.vitepress/theme/components/SettingsBoard.vue -->
<script setup>
import { useData } from 'vitepress'
import { useSettings } from '../useSettings'

// 直接接管 VitePress 原生的深浅色模式状态
const { isDark } = useData() 
const { isTracking, lastReadPath, lastReadTitle, userName, reduceMotion, clearProgress } = useSettings()
</script>

<template>
  <div class="ksvg-settings-panel">
    <header class="settings-header">
      <a href="/" class="back-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        返回首页
      </a>
      <h1>偏好设置</h1>
    </header>

    <section class="settings-section">
      <h2 class="section-title">个性化</h2>
      <div class="setting-list">
        <div class="setting-item">
          <div class="setting-info">
            <label>称呼与显示名</label>
            <span class="desc">系统将在弹窗问候时使用此名称</span>
          </div>
          <div class="setting-control">
            <input type="text" v-model="userName" class="compact-input" placeholder="输入名称 (可选)" maxlength="20">
          </div>
        </div>
      </div>
    </section>

    <section class="settings-section">
      <h2 class="section-title">界面与阅读</h2>
      <div class="setting-list">
        <!-- 新增：接管原生的深色模式 -->
        <div class="setting-item">
          <div class="setting-info">
            <label>深色模式</label>
            <span class="desc">开启夜间沉浸式暗色阅读环境</span>
          </div>
          <div class="setting-control">
            <label class="toggle-switch">
              <input type="checkbox" v-model="isDark">
              <span class="slider"></span>
            </label>
          </div>
        </div>

        <div class="setting-item">
          <div class="setting-info">
            <label>减弱界面动画</label>
            <span class="desc">关闭多余的过渡和悬浮动画，更专注内容</span>
          </div>
          <div class="setting-control">
            <label class="toggle-switch">
              <input type="checkbox" v-model="reduceMotion">
              <span class="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </section>

    <section class="settings-section">
      <h2 class="section-title">学习追踪</h2>
      <div class="setting-list">
        <div class="setting-item">
          <div class="setting-info">
            <label>记录最大阅读进度</label>
            <span class="desc">智能分析并记住您学习的最深章节</span>
          </div>
          <div class="setting-control">
            <label class="toggle-switch">
              <input type="checkbox" v-model="isTracking">
              <span class="slider"></span>
            </label>
          </div>
        </div>
        
        <div class="setting-item progress-item" v-if="isTracking">
          <div class="setting-info">
            <label>当前最高进度</label>
            <a v-if="lastReadPath" :href="lastReadPath" class="record-link">{{ lastReadTitle }}</a>
            <span v-else class="desc italic">暂无记录</span>
          </div>
          <div class="setting-control">
            <button class="text-btn danger" @click="clearProgress" :disabled="!lastReadPath">清除记录</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ksvg-settings-panel {
  max-width: 640px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.settings-header { margin-bottom: 2rem; }

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  margin-bottom: 12px;
  transition: color 0.2s;
}

.back-btn:hover { color: var(--vp-c-brand-1); }

.settings-header h1 {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: var(--vp-c-text-1);
  margin: 0;
}

.settings-section { margin-bottom: 2.5rem; }

.section-title {
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
  margin-bottom: 12px;
  padding-left: 4px;
  letter-spacing: 0.5px;
}

.setting-list {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  overflow: hidden;
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.setting-item:last-child { border-bottom: none; }

.setting-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  padding-right: 20px;
}

.setting-info label {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.setting-info .desc {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  line-height: 1.4;
}

.italic { font-style: italic; }

.compact-input {
  width: 180px;
  padding: 8px 12px;
  font-size: 0.95rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  text-align: right;
  transition: all 0.2s;
}

.compact-input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 2px rgba(52, 81, 178, 0.2);
}

.record-link {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.record-link:hover { text-decoration: underline; }

.text-btn {
  background: transparent;
  border: none;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 6px;
  transition: background 0.2s;
}

.text-btn.danger { color: #ef4444; }
.text-btn.danger:hover:not(:disabled) { background: rgba(239, 68, 68, 0.1); }
.text-btn:disabled { opacity: 0.4; cursor: not-allowed; }

.toggle-switch {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
}

.toggle-switch input { opacity: 0; width: 0; height: 0; }

.slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: var(--vp-c-divider);
  transition: .3s;
  border-radius: 24px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: .3s;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

input:checked + .slider { background-color: var(--vp-c-brand-1); }
input:checked + .slider:before { transform: translateX(20px); }

@media (max-width: 640px) {
  .setting-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .setting-info { padding-right: 0; }
  .compact-input { width: 100%; text-align: left; }
  .setting-control { width: 100%; display: flex; justify-content: flex-end; }
  .progress-item .setting-control { justify-content: flex-start; }
}
</style>