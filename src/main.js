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
import i18n from './lang/index';

// vxe-table
import VXETable from './v-table';
// import 'xe-utils'
// import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

Vue.use(VXETable, {
  // 对组件内置的提示语进行国际化翻译
  i18n
});

store.commit('setMenuData', allMenus);
Vue.use(ElementUI);
Vue.config.productionTip = false
let router = createRouter(routes, store);

// 全局使用自定义组件
Vue.use(customizeComponent);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
