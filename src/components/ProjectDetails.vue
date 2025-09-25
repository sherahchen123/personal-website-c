<template>
  <div class="project-details-modal">
    <!-- 关闭按钮 -->
    <button class="close-button" @click="$emit('close')" aria-label="Close">
      <span class="close-icon">×</span>
    </button>
    
    <!-- 内容容器 -->
    <div class="modal-content">
      <h3 class="modal-title">{{ currentLanguage === 'zh' ? project.title : project.title_en }}</h3>
      
      <div class="modal-body">
        <!-- 图片展示 -->
        <div class="image-container">
          <img 
            :src="project.image" 
            :alt="currentLanguage === 'zh' ? project.title : project.title_en" 
            class="project-image" 
          />
        </div>
        
        <!-- 项目详情 -->
        <div class="details-container">
          <p class="project-details-text">{{ currentLanguage === 'zh' ? project.details : project.details_en }}</p>
        </div>
        
        <!-- 视频展示 -->
        <div v-if="project.video && project.video !== ''" class="video-container">
          <video 
            controls 
            class="project-video"
            :class="{ 'vertical-video': isVerticalVideo }"
            preload="metadata"
            :poster="project.image"
          >
            <source :src="project.video" type="video/mp4" />
            {{ currentLanguage === 'zh' ? '您的浏览器不支持视频标签。' : 'Your browser does not support the video tag.' }}
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const currentLanguage = computed(() => store.state.language);
const isVerticalVideo = ref(false);

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

// 检测视频是否为竖屏
const checkVideoOrientation = () => {
  const video = document.querySelector('.project-video');
  if (video && video.videoHeight > video.videoWidth) {
    isVerticalVideo.value = true;
  } else {
    isVerticalVideo.value = false;
  }
};

// 当组件挂载或视频元数据加载完成时检测视频方向
onMounted(() => {
  const video = document.querySelector('.project-video');
  if (video) {
    video.addEventListener('loadedmetadata', checkVideoOrientation);
    // 如果视频已经加载完成，直接检测
    if (video.readyState >= 1) {
      checkVideoOrientation();
    }
  }
});
</script>

<style scoped>
/* 浮窗样式 */
.project-details-modal {
  position: fixed;
  top: 50px;
  right: 50px;
  bottom: 50px;
  left: 250px; /* 为左侧导航栏留出空间 */
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* 关闭按钮 */
.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  color: #333;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
}

.close-button:hover {
  background-color: rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
}

.close-icon {
  line-height: 1;
}

/* 内容容器 */
.modal-content {
  padding: 40px;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

/* 标题 */
.modal-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #333;
  line-height: 1.3;
}

/* 主体内容 */
.modal-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

/* 图片容器 */
.image-container {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.project-image {
  width: 100%;
  height: auto;
  display: block;
}

/* 详情文本容器 */
.details-container {
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
}

.project-details-text {
  font-size: 16px;
  line-height: 1.8;
  color: #555;
  margin: 0;
}

/* 视频容器 */
.video-container {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-video {
  width: 100%;
  height: auto;
  min-height: 300px;
}

/* 竖屏视频样式 - 缩小到原来的1/3 */
.project-video.vertical-video {
  max-width: 33.33%;
  min-height: auto;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .project-video.vertical-video {
    max-width: 50%;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .project-details-modal {
    top: 20px;
    right: 20px;
    bottom: 20px;
    left: 20px;
  }
  
  .modal-content {
    padding: 20px;
  }
  
  .modal-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
}
</style>
