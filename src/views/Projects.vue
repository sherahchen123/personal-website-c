<template>
  <section id="projects" class="projects-section">
    <Navigation />
    <div class="container">
      <h2 class="section-title">{{ $t('projects.sectionTitle') }}</h2>
      <div class="tabs">
        <button 
          class="tab" 
          :class="{ active: activeTab === 'program' }" 
          @click="activeTab = 'program'"
        >
          {{ $t('projects.tabs.program') }}
        </button>
        <button 
          class="tab" 
          :class="{ active: activeTab === 'analysis' }" 
          @click="activeTab = 'analysis'"
        >
          {{ $t('projects.tabs.analysis') }}
        </button>
        <button 
          class="tab" 
          :class="{ active: activeTab === 'design' }" 
          @click="activeTab = 'design'"
        >
          {{ $t('projects.tabs.design') }}
        </button>
      </div>
      <div class="projects">
        <div v-if="activeTab === 'program'" class="project-list">
          <div v-for="(project, index) in programProjects" :key="index" class="project-item">
            <img :src="project.image" :alt="currentLanguage === 'zh' ? project.title : project.title_en" class="project-image" />
            <h3 class="project-title">{{ currentLanguage === 'zh' ? project.title : project.title_en }}</h3>
            <p class="project-description">{{ currentLanguage === 'zh' ? project.description : project.description_en }}</p>
            <button @click="showDetails(project)">{{ $t('projects.viewDetails') }}</button>
          </div>
        </div>
        <div v-if="activeTab === 'analysis'" class="project-list">
          <div v-for="(project, index) in analysisProjects" :key="index" class="project-item">
            <img :src="project.image" :alt="currentLanguage === 'zh' ? project.title : project.title_en" class="project-image" />
            <h3 class="project-title">{{ currentLanguage === 'zh' ? project.title : project.title_en }}</h3>
            <p class="project-description">{{ currentLanguage === 'zh' ? project.description : project.description_en }}</p>
            <button @click="showDetails(project)">{{ $t('projects.viewDetails') }}</button>
          </div>
        </div>
        <div v-if="activeTab === 'design'" class="project-list">
          <div v-for="(project, index) in designProjects" :key="index" class="project-item">
            <img :src="project.image" :alt="currentLanguage === 'zh' ? project.title : project.title_en" class="project-image" />
            <h3 class="project-title">{{ currentLanguage === 'zh' ? project.title : project.title_en }}</h3>
            <p class="project-description">{{ currentLanguage === 'zh' ? project.description : project.description_en }}</p>
            <button @click="showDetails(project)">{{ $t('projects.viewDetails') }}</button>
          </div>
        </div>
      </div>
      <!-- 项目详情浮窗 -->
      <div v-if="selectedProject" class="modal-overlay">
        <ProjectDetails :project="selectedProject" @close="selectedProject = null" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import Navigation from '@/components/Navigation.vue';
import ProjectDetails from '@/components/ProjectDetails.vue';
import { getText } from '@/i18n/lang.js';
import { getStaticPath } from '@/utils/pathUtils.js';

const store = useStore();
const currentLanguage = computed(() => store.state.language);

// 翻译函数
const $t = (key) => getText(key, currentLanguage.value);

// 暴露翻译函数给模板
defineExpose({
  $t
});

const activeTab = ref('program');
const selectedProject = ref(null);

// 为了简洁起见，我们将项目内容保持不变，但会根据语言选择器显示相应的文本
// 在实际应用中，您可以为每个项目添加英文标题、描述和详情
const programProjects = [
  {
    title: '过往工作说明：三维组件库功能建设',
    title_en: 'Work Experience: 3D Component Library Development',
    image: getStaticPath('/static/assets/images/projects/threeDComponents.png'),
    description: '工作期间部分基于cesium的三维功能组件',
    description_en: 'Some cesium-based 3D functional components developed during work',
    video: '/static/assets/videos/programs/threeDComponents.mp4',
    details: '本项目展示了工作期间完成的部分基于cesium的三维功能组件。主要包含以下功能：辅助选址、规划条件提取、分屏比对、专题制图、叠加分析、控规盒子、wms数据格式显隐、限高分析、一键BIM数据上传显示',
    details_en: 'This project showcases some cesium-based 3D functional components developed during work, including: site selection assistance, planning condition extraction, split-screen comparison, thematic mapping, overlay analysis, regulatory planning boxes, WMS data format display/hide, height restriction analysis, one-click BIM data upload and display'
  },
  {
    title: '心理健康类app&小程序',
    title_en: 'Personal Project: Mental Health App & Mini Program',
    image: getStaticPath('/static/assets/images/programs/mini-program.png'),
    description: '这是一个由自己进行需求挖掘、设计、开发、上线的个人微信小程序项目',
    description_en: 'This is a personal WeChat mini program project with self-requirement exploration, design, development, and launch',
    video: '/static/assets/videos/programs/mini_program.mp4',
    details: '这是一个uni-app项目，涉及到情绪记录、音频播放、趣味测试、情绪分析、感恩日记等核心模块。采用微信云服务实现数据表的存储。相关的个人技术文档链接如下：https://blog.csdn.net/weixin_44131871/article/details/151933622 和 https://blog.csdn.net/weixin_44131871/article/details/151934704',
    details_en: 'This is a uni-app project involving core modules such as mood recording, audio playback, interesting tests, mood analysis, and gratitude diary. WeChat cloud services are used for data table storage. Related personal technical documentation links: https://blog.csdn.net/weixin_44131871/article/details/151933622 and https://blog.csdn.net/weixin_44131871/article/details/151934704'
  },
  {
    title: '图像处理小demo',
    title_en: 'Project: Image Processing Demo',
    image: getStaticPath('/static/assets/images/projects/imagePS.png'),
    description: '这是一个基于canvas的图像处理小demo',
    description_en: 'This is a canvas-based image processing demo',
    video: '/static/assets/videos/programs/data_analysis.mp4',
    details: '包含通过canvas对照片进行各种处理的方法，和简单的Three.js的3D展示实现。',
    details_en: 'Includes various methods for processing photos through canvas, and simple Three.js 3D display implementation.'
  },
];
const analysisProjects = [
  {
    title: '旅游度假区选址适宜性分析',
    title_en: 'Project: Tourist Resort Site Selection Suitability Analysis',
    image: getStaticPath('/static/assets/images/projects/overlay.png'),
    description: '这是一个运用ArcGIS做的旅游度假区选址分析项目',
    description_en: 'This is a tourist resort site selection analysis project using ArcGIS',
    video: '/static/assets/videos/programs/overlay_analysis.mp4',
    details: '本项目的选址分析主要基于ArcGIS叠加分析，选址评价标准结合专业知识融合多维度数据，具体如视频所示，展示的是ArcGIS分析过程图和和结果的展示',
    details_en: 'The site selection analysis of this project is mainly based on ArcGIS overlay analysis. The site selection evaluation criteria combine professional knowledge and multi-dimensional data. As shown in the video, it displays the ArcGIS analysis process diagrams and results.'
  },
  {
    title: '商业数据分析&数据爬取',
    title_en: 'Project: Business Data Analysis & Web Crawling',
    image: getStaticPath('/static/assets/images/projects/project2.png'),
    description: '这是一个基于python的商业数据分析&数据爬取项目',
    description_en: 'This is a Python-based business data analysis & web crawling project',
    video: '/static/assets/videos/programs/data_analysis.mp4',
    details: '这个商业数据分析项目，包含了数据获取、数据清洗、数据分析和数据图表绘制的多个步骤和过程，具体见视频。',
    details_en: 'This business data analysis project includes multiple steps and processes of data acquisition, data cleaning, data analysis, and data chart drawing, as shown in the video.'
  },
  {
    title: '论文项目：有关澳大利亚昆士兰州的职住平衡分析研究',
    title_en: 'Thesis Project: Research on Job-Housing Balance in Queensland, Australia',
    image: getStaticPath('/static/assets/images/projects/project3.png'),
    description: '这是一个基于地理数据分析的综合研究论文',
    description_en: 'This is a comprehensive research thesis based on geographic data analysis',
    video: '/static/assets/videos/programs/lunwen.mp4',
    details: '这篇硕士论文运用澳大利亚昆士兰统计局的官方数据，对昆士兰地区的2006-2016年职住平衡的变化进行分析。具体的研究过程包含基于spss和matlab的数据分析、统计分析，和基于ArcGIS的空间数据处理和分析。',
    details_en: 'This master thesis uses official data from the Queensland Bureau of Statistics in Australia to analyze changes in job-housing balance in the Queensland region from 2006 to 2016. The specific research process includes data analysis and statistical analysis based on SPSS and MATLAB, as well as spatial data processing and analysis based on ArcGIS.'
  },
];
const designProjects = [
{
    title: '学生时期项目：基于社会融合背景下的武汉市东湖景中村改造混合居住区设计',
    title_en: 'Student Project: Mixed Residential Area Design for Donghu Scenic Village Renovation in Wuhan under the Background of Social Integration',
    image: getStaticPath('/static/assets/images/projects/design1.png'),
    description: '这是一个本科阶段的城市设计项目，包含了调研、城市设计、建模和海报设计的阶段。',
    description_en: 'This is an undergraduate urban design project, including research, urban design, modeling and poster design stages.',
    video: '',
    details: '',
    details_en: ''
  }
];

const showDetails = (project) => {
  selectedProject.value = project;
};
</script>

<style scoped>
.projects-section {
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
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.tab {
  background-color: #f0f2f5;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.tab.active {
  background-color: #4A90E2;
  color: white;
}

.project-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.project-item {
  width: 300px;
  margin: 20px;
  text-align: center;
}

.project-image {
  width: 100%;
  border-radius: 8px;
}

.project-title {
  font-size: 20px;
  font-weight: 600;
  margin: 10px 0;
}

.project-description {
  color: #666;
}
  /* 浮窗背景遮罩 */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
