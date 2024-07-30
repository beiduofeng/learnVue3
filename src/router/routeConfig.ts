/** @file 记录组件，路由，菜单名 的映射关系 */
import type { Component } from "vue";
import HelloWorld from '@/components/helloworld/index.vue'
import TodoList from '@/components/ToDoList/index.vue'



// ts 类型定义，路由配置对象都有哪些属性，对应的值都是什么类型
// 注意这里 属性: 类型 之后是分号
export interface IRouteConfig {
  // 左侧菜单上展示的 name 
  name: string;
  // url 上的路径
  path?: string;
  // 对应的组件
  component?: Component;
  // 是否展示在菜单上，页面可能有很多，入口可能是其他页面上的链接
  onMenu: boolean;
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
    onMenu: true,
    children: [
      {
        name: 'helloworld',
        onMenu: true,
        path: '/helloworld',
        component: HelloWorld
      }
    ]
  },
  {
    name: "场景练习",
    onMenu: true,
    children: [
      {
        name: '代办列表',
        onMenu: true,
        path: '/todolist',
        component: TodoList
      }
    ]
  }
]


export { VueRouteConfigs }