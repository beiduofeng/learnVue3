/** @file route 相关的 utils */
import type { IRouteConfig } from './routeConfig'

/**
 * 找到二级菜单配置中所有的路由配置
 * @param routeConfigs 
 */
export const getRoutes = (routeConfigs: IRouteConfig[]) => {
  const result = []
  routeConfigs.forEach(routeCfg => {
    // 真实的路由节点
    Array.isArray(routeCfg.children) && routeCfg.children.forEach(child => {
      const { path, component } = child;
      if (path && component) {
        result.push({ path, component });
      }
    });
  });

  return result;
}