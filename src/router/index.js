import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '@/components/helloworld/index.vue'
import ToRefs from '@/components/toRefs/index.vue'
import Parent from '@/components/parent2children/index.vue'
import Computed from '@/components/computed/index.vue'
import computerexaple from '@/components/computerexaple/index.vue'
import watchRective from '@/components/watchRective/index.vue'
import watchRef from '@/components/watchRef/index.vue'
import watchEffect from '@/components/watchEffect/index.vue'
import refVsRective from '@/components/refVSrective/index.vue'
import deepWatch from '@/components/deepWatch/index.vue'
import reactive from '@/components/reactive/index.vue'
import ref from '@/components/ref/index.vue'
import fa from '@/components/refOnlyoneMark/index.vue'
import vue3 from '@/components/vue3/index.vue'
import hooks from '@/components/hooks/indev.vue'
import watchRefPrimitiveType from '@/components/watchRefPrimitiveType/index.vue'
import usepinia from '@/components/usePinia/index.vue'
import todolist from '@/components/ToDoList/index.vue'
import father from '@/components/byvalue/index.vue'
import aa from '@/components/modules/index.vue'
import helloworldCode from '@/components/helloworld/helloworld.vue?raw'


/** @file 路由相关的配置 */

/**
 * 路由对应的映射关系
 */
export const routeConfigs = [
  {
    // 浏览器上地址栏里面的 hash 部分
    path: "/helloworld",
    // 组件
    component: HelloWorld,
  },
  {
    path: "/aa",
    component: aa,

  },
  {
    path: "/helloworldCode",
    component: helloworldCode,

  },
  {
    path: "/watchRefPrimitiveType",
    component: watchRefPrimitiveType,

  },
  {
    path: "/father",
    component: father,

  },
  {
    path: "/vue3",
    component: vue3,

  },
  {
    path: "/watchEffect",
    component: watchEffect,

  },
  {
    path: "/watchRef",
    component: watchRef,

  },
  {
    path: "/watchRective",
    component: watchRective,

  },
  {
    path: "/refVsRective",
    component: refVsRective,

  },
  {
    path: "/usepinia",
    component: usepinia,

  },
  {
    path: "/todolist",
    component: todolist,

  },
  {
    path: "/fa",
    component: fa,

  },
  {
    path: "/ref",
    component: ref,

  },
  {
    path: "/reactive",
    component: reactive,

  },
  {
    path: "/torefs",
    component: ToRefs,

  },
  {
    path: '/p2c',
    component: Parent,

  },
  {
    path: '/computed',
    component: Computed,

  },
  {
    path: '/computerexaple',
    component: computerexaple,

  },
  {
    path: '/deepWatch',
    component: deepWatch,

  },
  {
    path: '/hooks',
    component: hooks,

  },
];



const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routeConfigs
});

export default router