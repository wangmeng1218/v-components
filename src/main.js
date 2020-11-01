import Vue from 'vue'
import App from './App.vue'
import routes from './views/index';
import { createRouter } from './router/index';
import store from './store/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import allMenus from './views/allMenus';

store.commit('setMenuData', allMenus);
Vue.use(ElementUI);
Vue.config.productionTip = false
let router = createRouter(routes, store);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
