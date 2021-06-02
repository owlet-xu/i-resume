import { Path, RouterName } from '../router-type';
// routes
import { businessRouterMap } from './business';
/**
 *  路由的按需加载，webpackChunkName可指定打包的名称
 */
export const constantRouterMap = [
  {
    path: Path.Layout,
    name: RouterName.Layout,
    component: () => import( /* webpackChunkName: "layout" */ '@/views/layout/layout.vue'),
    children: businessRouterMap
  },
  {
    path: Path.Error,
    name: RouterName.Error,
    component: () => import( /* webpackChunkName: "error" */ '@/views/error/404.vue'),
    hidden: true
  }
];
