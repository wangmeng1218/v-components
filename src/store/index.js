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
      menuData: [],
      //  浏览器可视区域高度
      clientHeight: 0,
      // 浏览器可视区域宽度
      clientWidth: 0
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
    addActiveTabs: (state, activeTab) => {
        let tab = state.activeTabs.find(item => item.name === activeTab.name);
        if (!tab) {
            state.activeTabs.push(activeTab);
        }
    },
    setCurrentTab: (state, tabName) => {
        state.currentTab = tabName;
    },
    setMenuData: (state, data) => {
        state.menuData = data;
    },
    setClientHeight: (state, value) => {
        console.log('可视高度' + value);
        // 设置浏览器可视区域高度
        state.clientHeight = value;
    },
    setClientWidth: (state, value) => {
        // 设置浏览器可视区域宽度
        state.clientWidth = value;
    }
  },
  modules: {}
});

export default store;