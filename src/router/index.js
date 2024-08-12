import { createRouter, createWebHashHistory } from 'vue-router'
import { getRoutes } from './utils';
import { VueRouteConfigs } from './routeConfig';
const vueRoutes = getRoutes(VueRouteConfigs);

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: vueRoutes
});

export default router