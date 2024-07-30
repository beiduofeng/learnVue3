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
import practive from '@/components/practice/index.vue'

import VE from '@/components/VuejsExample/VE.vue'
import helloworld from '@/components/VuejsExample/helloworld.vue'
import userInput from '@/components/VuejsExample/user-input.vue'
import attributeBinding from '@/components/VuejsExample/attribute-binding.vue'
import conditionsCycles from '@/components/VuejsExample/conditions-cycles.vue'
import formBinding from '@/components/VuejsExample/form-binding.vue'
import simpleComponents from '@/components/VuejsExample/simple-components.vue'
import markdownEditor from '@/components/VuejsExample/markdown-editor.vue'
import getdata from '@/components/VuejsExample/getdata.vue'
import grid from '@/components/VuejsExample/grid.vue'
import tree from '@/components/VuejsExample/tree.vue'
import svg from '@/components/VuejsExample/svg.vue'
import modalbox from '@/components/VuejsExample/modal.vue'
import list from '@/components/VuejsExample/list.vue'
import review from '@/components/VuejsExample/review.vue'

import a from '@/components/practice/index.vue'
import person from '@/components/practice/person.vue'
import pictures from '@/components/practice/pictures.vue'
import notepad from '@/components/practice/notepad.vue'
import shopping from '@/components/practice/shopping.vue'


import { getRoutes } from './utils';
import { VueRouteConfigs } from './routeConfig';
const vueRoutes = getRoutes(VueRouteConfigs);
console.log('vueRoutes', vueRoutes);

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
    path: "/sjy",
    component: a,

  },
  {
    path: "/a",
    component: person,

  },
  {
    path: "/b",
    component: pictures,

  },
  {
    path: "/c",
    component: notepad,

  },
  {
    path: "/d",
    component: shopping,

  },
  {
    path: "/VE",
    component: VE,

  },
  {
    path: "/1",
    component: helloworld,
  },
  {
    path: "/2",
    component: userInput,
  },
  {
    path: "/3",
    component: attributeBinding,
  },
  {
    path: "/4",
    component: conditionsCycles,
  },
  {
    path: "/5",
    component: formBinding,
  },
  {
    path: "/6",
    component: simpleComponents,
  },
  {
    path: "/7",
    component: markdownEditor,
  },
  {
    path: "/8",
    component: getdata,
  },
  {
    path: "/9",
    component: grid,
  },
  {
    path: "/10",
    component: tree,
  },
  {
    path: "/11",
    component: svg,
  },
  {
    path: "/12",
    component: modalbox,
  },
  {
    path: "/13",
    component: list,
  },
  {
    path: "/14",
    component: review,
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
  {
    path: "/practive",
    component: practive,

  },
];



const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: vueRoutes
});

export default router