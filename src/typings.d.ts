/* SystemJS module definition */
declare var module: NodeModule;

declare module '*.json' {
  const data: any;
  export default data;
}

declare module 'element-ui/lib/locale/lang/*' {
  const local: any;
  export default local;
}

// declare module 'vue/types/vue' {
//   import VueRouter from 'vue-router';
//   interface Vue {
//     $router: VueRouter
//   }
// }

declare module 'element-ui/lib/locale' {
  const local: any;
  export default local;
}

declare module 'animate.css' {
  const animate: any;
  export default animate;
}
