<template>
  <section id="home" class="hero-section">
    <div class="particle-container">
      <AnimatedParticle :count="100" :color="'rgba(255,144,226,0.9)'" containerId="particle-container" />
      <div class="low-polygon-bg"></div>
    </div>
    
    <div class="content-container">
      <h1 class="main-title">
        Cinthia Chen
        <span class="job-title">{{ $t('home.jobTitle') }}</span>
      </h1>
      <p class="subtitle">
        {{ $t('home.subtitle') }}
      </p>
      
      <!-- 按钮组已隐藏 -->
    </div>
    
    <Navigation ref="navigationRef" />
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import AnimatedParticle from '@/components/AnimatedParticle.vue';
import Navigation from '@/components/Navigation.vue';
import { getText } from '@/i18n/lang.js';

const store = useStore();
const currentLanguage = computed(() => store.state.language);
const navigationRef = ref(null);

// 翻译函数
const $t = (key) => getText(key, currentLanguage.value);

// 暴露翻译函数给模板
defineExpose({
  $t
});

const downloadResume = () => {
  // 触发简历下载
  const link = document.createElement('a');
  link.href = '/static/resume.pdf';
  link.download = 'Sherah_Chen_Resume.pdf';
  link.click();
};

const scrollToContact = () => {
  scrollToElement('contact');
};

// 初始化粒子效果
onMounted(() => {
  // 粒子流随鼠标移动的逻辑
  const particleContainer = document.querySelector('.particle-container');
  particleContainer.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    // 更新粒子位置
    // ...
  });
});
</script>

<style scoped>
.hero-section {
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.particle-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.low-polygon-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #4A90E2 0%, #6200EE 100%);
  opacity: 0.1;
  z-index: 1;
}

.content-container {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 20px;
}

.main-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
}

.job-title {
  display: block;
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  color: #4A90E2;
  margin-top: 10px;
  text-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
}

.subtitle {
  font-size: clamp(0.8rem, 1.5vw, 1.1rem);
  color: #666;
  margin-bottom: 40px;
  max-width: 800px;
  margin: 0 auto 40px;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>