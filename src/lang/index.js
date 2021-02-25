import Vue from 'vue';
// 国际化
import VueI18n from 'vue-i18n';
import zhCN from 'vxe-table/lib/locale/lang/zh-CN';
import enUS from 'vxe-table/lib/locale/lang/en-US';
import XEUtils from 'xe-utils';

Vue.use(VueI18n);

import zh from './zh/index';
import en from './en/index';

let zhPackage = XEUtils.merge(zh, zhCN);
let enPackage = XEUtils.merge(en, enUS);
console.log(zhPackage);
console.log(enPackage);
const i18n = new VueI18n({
  locale: 'en-US',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': zhPackage,   // 中文语言包
    'en-US': enPackage    // 英文语言包
  }
});

export default i18n;