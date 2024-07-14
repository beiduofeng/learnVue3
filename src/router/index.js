import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '@/components/helloworld/index.vue'
import ToRefs from '@/components/toRefs/index.vue'
// import Parent from '@/components/parent2children/Parent.vue'
// import Computed from '@/components/computed/computed.vue'
// import Computerexaple from '@/components/computerexaple/computerexaple.vue'
// import WatchRective from '@/components/watchRective/watchRective.vue'
// import watchRef from '@/components/watchRef/watchRef.vue'
// import watchEffect from '@/components/watchEffect/watchEffect.vue'
// import refVsRective from '@/components/refVSrective/refVsRective.vue'
// import deepWatch from '@/components/deepWatch/deepWatch.vue'
// import Reactive from '@/components/reactive/reactive.vue'
// import Ref from '@/components/ref/ref.vue'
// import Fa from '@/components/refOnlyoneMark/fa.vue'
// import Vue3 from '@/components/vue3/vue3.vue'
// import Hooks from '@/components/hooks/hooks.vue'
// import watchRefPrimitiveType from '@/components/watchRefPrimitiveType/watchRefPrimitiveType.vue'
// import usePinia from '@/components/usePinia/usepinia.vue'
// import todolist from '@/components/ToDoList/todolist.vue'
// import father from '@/components/byvalue/father.vue'
// import zong from '@/components/modules/aa.vue'
// import helloworldCode from '@/components/helloworld/helloworld.vue?raw'


/** @file 路由相关的配置 */

/**
 * 路由对应的映射关系
 */
export const routeConfigs = [
  {
    // 浏览器上地址栏里面的 hash 部分
    path: "/helloworld",
    // 组件
    component:  HelloWorld,
  },
  {
    path: "/torefs",
    component: ToRefs,
    
  },
  // {
  //   path: '/p2c',
  //   component: import ('@/components/parent2children/Parent.vue'),
    
  // },
  // {
  //   path: '/computed',
  //   component: import ('@/components/computed/computed.vue'),
    
  // },
];



const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routeConfigs
});

export default router