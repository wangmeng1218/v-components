// 导出路由
export const routes =  [
    {
        name: 'tooltip-realized',
        path: '/tooltip-realized',
        component: () => import('./tooltip-realized/index.vue')
    }
];