<template>
  <section id="skills" class="skills-section">
    <Navigation />
    <div class="container">
      <h2 class="section-title">{{ $t("skills.sectionTitle") }}</h2>
      <p>{{ $t("skills.itSkillsDesc") }}</p>
      <div class="skills-list">
        <SkillCard
          v-for="(skill, index) in ITskills"
          :key="index"
          :skill="skill"
        />
      </div>
      <p>
        {{ $t("skills.threeDSkillsDesc") }}
      </p>
      <div class="skills-list">
        <SkillCard
          v-for="(skill, index) in ThreeDskills"
          :key="index"
          :skill="skill"
        />
      </div>
      <p>
        {{ $t("skills.aiSkillsDesc") }}
      </p>
      <div class="skills-list">
        <SkillCard
          v-for="(skill, index) in AIskills"
          :key="index"
          :skill="skill"
        />
      </div>
      <p>{{ $t("skills.gSkillsDesc") }}</p>
      <div class="skills-list">
        <SkillCard
          v-for="(skill, index) in Gskills"
          :key="index"
          :skill="skill"
        />
      </div>
      <p>
        {{ $t("skills.dataAnalysisSkillsDesc") }}
      </p>
      <div class="skills-list">
        <SkillCard
          v-for="(skill, index) in DataAnalysisskills"
          :key="index"
          :skill="skill"
        />
      </div>
      <p>{{ $t("skills.designSkillsDesc") }}</p>
      <div class="skills-list">
        <SkillCard
          v-for="(skill, index) in Designskills"
          :key="index"
          :skill="skill"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import Navigation from "@/components/Navigation.vue";
import SkillCard from "@/components/SkillCard.vue";
import { getText } from "@/i18n/lang.js";
import { getStaticPath } from "@/utils/pathUtils.js";

const store = useStore();
const currentLanguage = computed(() => store.state.language);

// 翻译函数
const $t = (key) => getText(key, currentLanguage.value);

// 暴露翻译函数给模板
defineExpose({
  $t,
});

const ITskills = ref([
  {
    title: "Vue.js",
    description: "精通Vue.js框架，能够构建复杂的单页应用。",
    level: "高级",
    image: getStaticPath("/static/assets/images/skills/vue.png"),
  },
  {
    title: "JavaScript",
    description: "熟练掌握JavaScript，能够使用其进行前端开发。",
    level: "高级",
    image: getStaticPath("/static/assets/images/skills/js.png"),
  },
  {
    title: "CSS",
    description: "熟悉CSS，能够进行响应式设计和样式优化。",
    level: "中级",
    image: getStaticPath("/static/assets/images/skills/css.png"),
  },
  // 添加更多技能
  {
    title: "Vite",
    description: "熟悉Vite，能够进行快速的前端构建。",
    level: "中级",
    image: getStaticPath("/static/assets/images/skills/vite.png"),
  },
  {
    title: "uni-app",
    description: "熟悉uni-app，能够进行跨平台移动应用开发。",
    level: "高级",
    image: getStaticPath("/static/assets/images/skills/uni-app.png"),
  },
]);
const ThreeDskills = ref([
  {
    title: "Cesium",
    description: "熟悉Cesium，能够进行地理空间可视化。",
    level: "高级",
    image: getStaticPath("/static/assets/images/skills/cesium.png"),
  },
  {
    title: "Canvas",
    description: "熟悉Canvas，能够进行自定义图形绘制。",
    level: "高级",
    image: getStaticPath("/static/assets/images/skills/canvas.png"),
  },
  {
    title: "Three.js",
    description: "熟悉Three.js，能够进行3D可视化开发。",
    level: "初级",
    image: getStaticPath("/static/assets/images/skills/threejs.png"),
  },
  {
    title: "WebGL",
    description: "了解WebGL，能够进行底层图形渲染。",
    level: "初级",
    image: getStaticPath("/static/assets/images/skills/webgl.png"),
  },
]);
const AIskills = ref([
  {
    title: "prompt",
    description: "熟悉prompt，能够进行自定义prompt设计。",
    level: "中级",
    image: getStaticPath("/static/assets/images/skills/prompt.png"),
  },
  {
    title: "AI智能体",
    description: "熟悉设计和构建AI智能体，包括工作流构建和单个、多Agent模式构建",
    level: "中级",
    image: getStaticPath("/static/assets/images/skills/agent.png"),
  },
  {
    title: "AI辅助编程",
    description: "熟悉AI辅助编程，包括但不限于cursor、trae、豆包等",
    level: "中级",
    image: getStaticPath("/static/assets/images/skills/ai.png"),
  },
]);
const Gskills = ref([
  {
    title: "ArcGIS",
    description: "熟练使用ArcGIS进行空间数据处理和分析。",
    level: "高级",
    image: getStaticPath("/static/assets/images/skills/arcgis.png"),
  },
  {
    title: "Supermap",
    description: "熟悉Supermap进行空间数据处理和分析。",
    level: "中级",
    image: getStaticPath("/static/assets/images/skills/supermap.png"),
  },
]);
const DataAnalysisskills = ref([
  {
    title: "Python",
    description:
      "熟悉Python进行数据分析。包括pandas、numpy、matplotlib等数据分析工具。",
    level: "高级",
    image: getStaticPath("/static/assets/images/skills/python.png"),
  },
]);
const Designskills = ref([
  {
    title: "Photoshop",
    description: "熟悉Photoshop进行图片编辑和设计。",
    level: "高级",
    image: getStaticPath("/static/assets/images/skills/photoshop.png"),
  },
  {
    title: "Canva",
    description: "熟悉Canva进行图片编辑和设计。",
    level: "高级",
    image: getStaticPath("/static/assets/images/skills/canva.png"),
  },
]);
</script>

<style scoped>
.skills-section {
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

.skills-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
