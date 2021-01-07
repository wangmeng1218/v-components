import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const createRouter = (routes, store) => {
    let router = new Router({
        routes
    });
    router.beforeEach((to, from, next) => {
        store.commit('setCurrentTab', to.name);
        next();
    });
    router.afterEach((to) => {
        store.commit('setCurrentUrl', to.path, to.name);
    });
    return router;
};
