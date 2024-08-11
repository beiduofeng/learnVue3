/** @file 记录组件，路由，菜单名 的映射关系 */
import type { Component } from "vue";
import HelloWorld from '@/components/helloworld/index.vue'
import TodoList from '@/components/ToDoList/index.vue'
import ToRefs from '@/components/toRefs/index.vue'



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
        name: 'helloworld',
        path: '/helloworld',
        component: HelloWorld
      },
      {
        name: 'ToRefs',
        path: '/toRefs',
        component: ToRefs,
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
      }
    ]
  }
]


export { VueRouteConfigs }