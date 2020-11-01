// 路由对象
let routes = [
    {
        name: 'main-view',
        path: '/',
        component: () => import('./main-view/index.vue'),
        children: []
    }
];

// 扫描并获取views下所有文件夹内的index.js
const routerContext = require.context('./', true, /index\.js$/);
const keys = routerContext.keys();

// 循环遍历获取keys
keys.forEach(route => {
    if (route.startsWith('./index')) {
        return false;
    }
    // 获取以来模块
    const requireModule = routerContext(route);
    routes[0].children = requireModule.routes;
});

// console.log(routes);

export default routes;
