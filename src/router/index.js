import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Experience from '../views/Experience.vue';
import About from '../views/About.vue'; 
import Projects from '../views/Projects.vue';
import Skills from '../views/Skills.vue';
 
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;