<template>
  <div class="timeline-item" :class="{ 'timeline-item-right': isRight, visible: isVisible }">
    <div class="timeline-dot"></div>
    
    <div class="timeline-content">
      <div class="company-header">
        <img :src="props.logo" alt="公司Logo" class="company-logo" />
        <div class="company-info">
          <h3 class="company-name">{{ company }}</h3>
          <p class="position-time">{{ position }} | {{ time }}</p>
        </div>
      </div>
      
      <div class="achievements">
        <div v-for="(achievement, index) in achievements" :key="index" class="achievement">
          <span class="achievement-icon">{{ achievement.icon }}</span>
          <span class="achievement-text" @mouseenter="() => showAchievementDetail(index)" @mouseleave="hideAchievementDetail">
            {{ achievement.text }}
          </span>
          <div v-if="showDetail === index" class="achievement-detail">
            {{ getAchievementDetail(achievement.text) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  company: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  achievements: {
    type: Array,
    required: true
  },
  isRight: {
    type: Boolean,
    default: false
  }
});

const showDetail = ref(-1);
const isVisible = ref(false);
// Logo URL 构造代码已移除，直接使用props.logo

onMounted(() => {
  isVisible.value = true; // 设置为可见
});

const showAchievementDetail = (index) => {
  showDetail.value = index;
};

const hideAchievementDetail = () => {
  showDetail.value = -1;
};

const getAchievementDetail = (text) => {
  // 根据成就文本返回详细描述
  if (text.includes('开发效率提升30%')) {
    return '通过建立标准化的前端组件库，减少重复开发工作，使团队整体开发效率提升30%，项目交付周期缩短25%。';
  } else if (text.includes('帧率提升40%')) {
    return '针对三维场景性能瓶颈，采用LOD技术、资源压缩和渲染优化策略，使Cesium三维场景平均帧率从25fps提升至35fps。';
  } else if (text.includes('形成产品体系')) {
    return '主导开发了20+个BIM与GIS集成的基础功能，包括模型联动、剖切分析、数据查询等，形成了完整的产品功能体系。';
  } else if (text.includes('优化模型转换工具')) {
    return '设计并实现了高效的BIM模型转换工具，将模型转换时间从平均15分钟缩短至3分钟，数据体积压缩率达到70%。';
  }
  return '详细内容可在面试中进一步沟通。';
};
</script>

<style scoped>
.timeline-item {
  position: relative;
  margin-bottom: 60px;
  width: 50%;
  padding-right: 40px;
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.timeline-item.visible {
  opacity: 1;
  transform: translateX(0);
}

.timeline-item-right {
  margin-left: 50%;
  padding-left: 40px;
  padding-right: 0;
  transform: translateX(20px);
}

.timeline-item-right.visible {
  transform: translateX(0);
}

.timeline-dot {
  position: absolute;
  right: -9px;
  top: 15px;
  width: 18px;
  height: 18px;
  background-color: #4A90E2;
  border-radius: 50%;
  z-index: 1;
}

.timeline-item-right .timeline-dot {
  left: -9px;
  right: auto;
}

.timeline-content {
  background-color: #F0F2F5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.company-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.company-logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-right: 20px;
  border-radius: 8px;
  background-color: white;
  padding: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.company-name {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0 0 5px 0;
}

.position-time {
  font-size: 16px;
  color: #666;
  margin: 0;
}

.achievements {
  margin-top: 20px;
}

.achievement {
  margin-bottom: 15px;
  display: flex;
  align-items: flex-start;
}

.achievement-icon {
  font-size: 20px;
  margin-right: 10px;
  min-width: 20px;
  text-align: center;
}

.achievement-text {
  font-size: 16px;
  color: #333; /* 修改为深色以确保可见 */
  line-height: 1.6;
  cursor: pointer;
  position: relative;
}

.achievement-text:hover {
  color: #4A90E2;
}

.achievement-detail {
  position: absolute;
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: 300px;
  left: 0;
  top: 100%;
  margin-top: 5px;
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}

.achievement:hover .achievement-detail {
  opacity: 1;
}
</style>