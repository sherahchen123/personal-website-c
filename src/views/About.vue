<template>
  <section id="about" class="about-section">
    <Navigation />
    <div class="container">
      <h2 class="section-title">{{ $t('about.sectionTitle') }}</h2>
      
      <div class="content-wrapper">
        <div class="left-column">
          <div class="avatar-container">
            <img 
              src="/static/assets/images/me/me.jpg" 
              alt="Sherah Chen" 
              class="avatar"
              @click="showFullImage"
            />
            <div class="hover-name">Cinthia Chen</div>
          </div>
          
          <div class="job-tags">
            <span class="tag" v-for="(tag, index) in currentTags" :key="index">{{ tag }}</span>
          </div>
        </div>
        
        <div class="right-column">
          <div class="abilities">
            <h3 class="ability-title">{{ $t('about.abilityTitle') }}</h3>
            <ul class="ability-list">
              <li v-for="(ability, index) in currentAbilities" :key="index">
                <i class="fa fa-check-circle"></i> {{ ability }}
              </li>
            </ul>
          </div>
          
          <div class="career-goal">
            <h3 class="goal-title">{{ $t('about.goalTitle') }}</h3>
            <p class="goal-content">{{ $t('about.careerGoal') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import Navigation from '@/components/Navigation.vue';
import { getText } from '@/i18n/lang.js';

const store = useStore();
const currentLanguage = computed(() => store.state.language);
const sectionRef = ref(null);

// 翻译函数
const $t = (key) => getText(key, currentLanguage.value);

// 根据当前语言获取标签
const currentTags = computed(() => {
  return getText('about.tags', currentLanguage.value);
});

// 根据当前语言获取能力列表
const currentAbilities = computed(() => {
  return getText('about.abilities', currentLanguage.value);
});

// 暴露翻译函数给模板
defineExpose({
  $t
});

const showFullImage = () => {
  uni.showModal({
    title: '个人形象照',
    content: '这是我的个人形象照',
    showCancel: false
  });
};
</script>

<style scoped>
.about-section {
  padding: 100px 0;
  background-color: #F0F2F5;
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

.content-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
}

.left-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar-container {
  position: relative;
  width: 200px;
  height: 200px;
  margin-bottom: 30px;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.avatar:hover {
  transform: scale(1.05);
}

.hover-name {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4A90E2;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
  white-space: nowrap;
}

.avatar-container:hover .hover-name {
  opacity: 1;
}

.job-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.tag {
  background: linear-gradient(135deg, #4A90E2 0%, #6200EE 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.tag:hover {
  transform: translateY(-2px) rotate(3deg);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}

.right-column {
  flex: 2;
}

.abilities, .career-goal {
  margin-bottom: 40px;
}

.ability-title, .goal-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
  position: relative;
  padding-left: 15px;
}

.ability-title::before, .goal-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 25px;
  background-color: #4A90E2;
  border-radius: 3px;
}

.ability-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ability-list li {
  margin-bottom: 15px;
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  display: flex;
  align-items: center;
}

.ability-list li i {
  color: #4A90E2;
  margin-right: 10px;
  font-size: 18px;
}

.goal-content {
  font-size: 16px;
  color: #666;
  line-height: 1.8;
  margin: 0;
}

@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
  }
  
  .right-column, .left-column {
    flex: 1;
  }
}
</style>