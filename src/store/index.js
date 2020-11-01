import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
      currentUrl: '',
      activeTabs: [
          {
              title: '首页',
              name: 'home'
          }
      ],
      currentTab: 'home',
      menuData: []
  },
  getters: {
      getCurrentUrl: state => {
          return state.currentUrl;
      },
      getActiveTabs: state => {
          return state.activeTabs;
      },
      getCurrentTab: state => {
          return state.currentTab;
      },
      getMenuData: state => {
          return state.menuData;
      }
  },
  actions: {},
  mutations: {
    setCurrentUrl: (state, url) => {
        state.currentUrl = url;
    },
    clearActiveTabs: (state) => {
        state.activeTabs = [
            {
                title: '首页',
                name: 'home'
            }
        ];
    },
    removeActiveTabs: (state, tabName) => {
        state.activeTabs = state.activeTabs.filter(item => item.name !== tabName);
    },
    addActiveTabs: (state, tabs) => {
        state.activeTabs.concat(tabs);
    },
    setCurrentTab: (state, tabName) => {
        state.currentTab = tabName;
    },
    setMenuData: (state, data) => {
        state.menuData = data;
    }
  },
  modules: {}
});

export default store;