import Vue from 'vue'
import App from './App.vue'
import routes from './views/index';
import { createRouter } from './router/index';
import store from './store/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import allMenus from './views/allMenus';

/**
 * 自定义组件
 */
import customizeComponent from './components'

// vxe-table
import VXETable from './v-table';

Vue.use(VXETable);

store.commit('setMenuData', allMenus);
Vue.use(ElementUI);
Vue.config.productionTip = false
let router = createRouter(routes, store);

// 全局使用自定义组件
Vue.use(customizeComponent);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
