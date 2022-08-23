import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'AHooks示例代码',
  },
  alias: {
    "@": "/src"
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: 'AHooks-首页',
      path: '/ahooks',
      component: './AHooks',
    },
    {
      name: 'useLatest',
      path: '/ahooks/0',
      component: './AHooks/0',
    },
    {
      name: 'useRef',
      path: '/ahooks/1',
      component: './AHooks/1.tsx',
    },
    {
      name: 'useCreation',
      path: '/ahooks/2',
      component: './AHooks/2',
    },
    {
      name: 'useUpdate',
      path: '/ahooks/3',
      component: './AHooks/3',
    },
    {
      name: 'useReactive',
      path: '/ahooks/4',
      component: './AHooks/4',
    },
    {
      name: 'useHover',
      path: '/ahooks/5',
      component: './AHooks/5',
    },
    {
      name: '时间相关钩子',
      path: '/ahooks/6',
      component: './AHooks/6',
    },
  ],
  npmClient: 'yarn',
});
