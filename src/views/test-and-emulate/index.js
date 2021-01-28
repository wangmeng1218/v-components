// 导出路由
export const routes =  [
    {
        name: 'tooltip-realized',
        path: '/tooltip-realized',
        component: () => import('./tooltip-realized/index.vue')
    },
    {
        name: 'timeline-test',
        path: '/timeline-test',
        component: () => import('./timeline-test/index.vue')
    },
    {
        name: 'catalog-and-content',
        path: '/catalog-and-content',
        component: () => import('./catalog-and-content/index.vue')
    },
    {
        name: 'canvas-test',
        path: '/canvas-test',
        component: () => import('./canvas-test/index.vue')
    },
    {
        name: 'test-vxe-table',
        path: '/test-vxe-table',
        component: () => import('./test-vxe-table')
    }
];