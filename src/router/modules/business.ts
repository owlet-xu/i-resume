import { Path, RouterName } from '../router-type';

export const businessRouterMap = [
  {
    path: Path.NoData,
    name: RouterName.NoData,
    component: () => import( /* webpackChunkName: "noData" */ '@/components/no-data/no-data.vue')
  }
];
