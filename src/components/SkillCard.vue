<template>
  <div class="skill-card">
    <img :src="skill.image" alt="技能图标" class="skill-image" />
    <h3 class="skill-title">{{ skill.title }}</h3>
    <p class="skill-description">{{ skill.description }}</p>
    <p class="skill-level">水平: {{ skill.level }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  skill: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.skill-card {
  width: 250px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  background-color: #f9f9f9;
  transition: box-shadow 0.3s;
}

.skill-card:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.skill-image {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
}

.skill-title {
  font-size: 20px;
  font-weight: 600;
}

.skill-description {
  color: #666;
}

.skill-level {
  font-weight: bold;
}
</style>