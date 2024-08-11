/** @file 记录组件，路由，菜单名 的映射关系 */
import type { Component } from "vue";
import HelloWorld from '@/components/helloworld/index.vue'
import TodoList from '@/components/ToDoList/index.vue'
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
import review1 from '@/components/VuejsExample/review1.vue'

import a from '@/components/practice/index.vue'
import person from '@/components/practice/person.vue'
import pictures from '@/components/practice/pictures.vue'
import notepad from '@/components/practice/notepad.vue'
import shopping from '@/components/practice/shopping.vue'
import test from '@/components/practice/test.vue'
import Weather from "@/components/practice/weather.vue";




// ts 类型定义，路由配置对象都有哪些属性，对应的值都是什么类型
// 注意这里 属性: 类型 之后是分号
export interface IRouteConfig {
  // 左侧菜单上展示的 name 
  name: string;
  // url 上的路径
  path?: string;
  // 对应的组件
  component?: Component;
  // 子菜单/子路由 可能有多个
  children?: IRouteConfig[]
}


// js 模块下的路由配置
const JSrouteConfigs: IRouteConfig[] = [
]

// vue 模块下的路由配置
const VueRouteConfigs: IRouteConfig[] = [
  {
    name: '入门基础',
    children: [
      {
        name: '你好世界',
        path: '/helloworld',
        component: HelloWorld
      },
      {
        name: 'ToRefs',
        path: '/toRefs',
        component: ToRefs,
      },

      {
        name: 'vue3代码格式',
        path: "/vue3",
        component: vue3,

      },
      {
        name: '深层监测',
        path: "/watchEffect",
        component: watchEffect,

      },
      {
        name: '监测ref类型数据',
        path: "/watchRef",
        component: watchRef,

      },
      {
        name: '监测reactive类型数据',
        path: "/watchRective",
        component: watchRective,

      },
      {
        name: 'ref和reactive',
        path: "/refVsRective",
        component: refVsRective,

      },
      {
        name: 'usepinia',
        path: "/usepinia",
        component: usepinia,

      },
      {
        name: '父亲',
        path: "/fa",
        component: fa,

      },
      {
        name: 'ref',
        path: "/ref",
        component: ref,

      },
      {
        name: 'reactive',
        path: "/reactive",
        component: reactive,

      },
      {
        name: '传值',
        path: '/p2c',
        component: Parent,

      },
      {
        name: '计算属性',
        path: '/computed',
        component: Computed,

      },
      {
        name: '计算属性例子',
        path: '/computerexaple',
        component: computerexaple,

      },
      {
        name: '父传子值',
        path: '/deepWatch',
        component: deepWatch,

      },
      {
        name: 'hooks',
        path: '/hooks',
        component: hooks,

      },
      {
        name: '练习题',
        path: "/practive",
        component: practive,

      },
    ]
  },
  {
    name: "场景练习",
    children: [
      {
        name: '待办列表',
        path: '/todolist',
        component: TodoList
      },
      {
        name: '天气查询',
        path: '/weather',
        component: Weather,
      },
    ]
  }
]


export { VueRouteConfigs }