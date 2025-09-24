<template>
  <div class="particle-container" ref="container"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { createParticleSystem } from '@/utils/particleEffect.js';

const props = defineProps({
  count: {
    type: Number,
    default: 50
  },
  color: {
    type: String,
    default: 'rgba(74,144,226,0.3)'
  }
});

const container = ref(null);
let cleanup = null;

onMounted(() => {
  cleanup = createParticleSystem(container.value, props.count, props.color);
});

watch(() => [props.count, props.color], () => {
  if (cleanup) cleanup();
  cleanup = createParticleSystem(container.value, props.count, props.color);
});

onUnmounted(() => {
  if (cleanup) cleanup();
});
</script>

<style scoped>
.particle-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
}
</style>