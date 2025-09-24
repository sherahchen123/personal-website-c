<template>
  <div class="navigation">
    <div class="light-arc"></div>
    <div class="nav-item" v-for="(item, index) in navItems" :key="index">
      <router-link 
        :to="item.path" 
        class="nav-link" 
        exact-active-class="active" 
      >
        {{ item.label }}
      </router-link>
    </div>
    <!-- 语言切换按钮 -->
    <button class="language-switch" @click="toggleLanguage">
      <span class="language-icon">{{ currentLanguage === 'zh' ? '🌍' : '地球' }}</span>
      <span class="language-text">{{ currentLanguage === 'zh' ? 'English' : '中文' }}</span>
      <span class="language-hint">{{ currentLanguage === 'zh' ? '(切换语言)' : '(Switch Language)' }}</span>
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { getText } from '@/i18n/lang.js';

const store = useStore();
const currentLanguage = computed(() => store.state.language);

// 切换语言
const toggleLanguage = () => {
  store.dispatch('toggleLanguage');
};

// 响应式导航项
const navItems = ref([
  { label: '首页', path: '/' },
  { label: '个人经历', path: '/experience' },
  { label: '技能树', path: '/skills' },
  { label: '作品项目演示', path: '/projects' },
  { label: '关于我', path: '/about' },
]);

// 监听语言变化，更新导航项文本
const updateNavItems = () => {
  const lang = currentLanguage.value;
  navItems.value = [
    { label: getText('nav.home', lang), path: '/' },
    { label: getText('nav.experience', lang), path: '/experience' },
    { label: getText('nav.skills', lang), path: '/skills' },
    { label: getText('nav.projects', lang), path: '/projects' },
    { label: getText('nav.about', lang), path: '/about' },
  ];
};

// 初始化和监听语言变化
updateNavItems();
store.watch(() => store.state.language, () => {
  updateNavItems();
});</script>

<style scoped>
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px; /* 可以根据需要调整宽度 */
  background-color: transparent; /* 背景透明 */
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 10; /* 确保在其他元素之上 */
}

.light-arc {
  position: absolute;
    top: 50%;
    left: -200px;
    width: 400px;
    height: 100%;
    border-radius: 100%;
    background: radial-gradient(circle, rgba(74, 144, 226, 0.5) 0%, rgba(74, 144, 226, 0) 70%);
    transform: translateY(-50%);
    z-index: -1;/* 确保在按钮后面 */
}

.nav-item {
  margin: 20px 0;
}

.nav-link {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 25px; /* 圆角按钮 */
  background-color: transparent; /* 背景透明 */
  color: #aaa; /* 默认文字颜色为灰色 */
  border: 1px solid #aaa; /* 默认边框颜色为灰色 */
  text-decoration: none;
  font-size: 18px; /* 字体大小 */
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.nav-link:hover,
.nav-link.active {
  background-color: rgba(74, 144, 226, 0.3); /* 悬停和选中时的背景颜色 */
  color: #00f; /* 悬停和选中时的文字颜色 */
  border-color: #00f; /* 悬停和选中时的边框颜色 */
}
  .language-switch {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px 16px;
    border-radius: 25px;
    background-color: rgba(74, 144, 226, 0.2);
    color: #4A90E2;
    border: 1px solid #4A90E2;
    cursor: pointer;
    font-size: 14px;
    z-index: 100;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .language-icon {
    font-size: 16px;
  }
  
  .language-text {
    font-weight: 600;
  }
  
  .language-hint {
    font-size: 12px;
    color: #666;
    opacity: 0.8;
  }
  
  .language-switch:hover {
    background-color: rgba(74, 144, 226, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
  }
  
  .language-switch:hover .language-hint {
    opacity: 1;
  }
</style>