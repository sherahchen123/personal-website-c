<template>
  <section id="experience" class="experience-section">
    <Navigation />
    <div class="container">
      <h2 class="section-title">{{ $t('experience.sectionTitle') }}</h2>
      
      <div class="timeline">
        <TimelineItem 
          v-for="(item, index) in currentExperiences" 
          :key="index"
          :company="item.company"
          :logo="item.logo"
          :position="item.position"
          :time="item.time"
          :achievements="item.achievements"
          :isRight="index % 2 === 1"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import Navigation from '@/components/Navigation.vue';
import TimelineItem from '@/components/TimelineItem.vue';
import { getText } from '@/i18n/lang.js';

const store = useStore();
const currentLanguage = computed(() => store.state.language);
const sectionRef = ref(null);

// 翻译函数
const $t = (key) => getText(key, currentLanguage.value);

// 根据当前语言获取经历列表
const currentExperiences = computed(() => {
  return getText('experience.companies', currentLanguage.value);
});

// 暴露翻译函数给模板
defineExpose({
  $t
});
</script>

<style scoped>
.experience-section {
  padding: 100px 0;
  background-color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
  color: #333;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.section-title.visible {
  opacity: 1;
  transform: translateY(0);
}

.timeline {
  position: relative;
  padding: 20px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #4A90E2;
  transform: translateX(-50%);
}
</style>