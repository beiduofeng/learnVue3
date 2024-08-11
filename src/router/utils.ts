/** @file route 相关的 utils */
import { chain } from 'lodash-es';
import type { IRouteConfig } from './routeConfig'
import Children from '@/components/practice/children.vue';

/**
 * 找到二级菜单配置中所有的路由配置
 * @param routeConfigs 
 */
// export const getRoutes = (routeConfigs: IRouteConfig[]) => {
//   const result = []
//   routeConfigs.forEach(routeCfg => {
//     // 真实的路由节点
//     Array.isArray(routeCfg.children) && routeCfg.children.forEach(child => {
//       const { path, component } = child;
//       if (path && component) {
//         result.push({ path, component });
//       }
//     });
//   });

//   return result;
// }

export const getRoutes = (routeConfigs: IRouteConfig[]) => {
  const result = []
  for (let i = 0; i < routeConfigs.length; i++) {
    for (let j = 0; j < routeConfigs[i].children.length; j++) {
      const { path, component } = routeConfigs[i].children[j]
      if (path && component) {
        result.push({ path, component });
      }
    }
  }
  return result
}