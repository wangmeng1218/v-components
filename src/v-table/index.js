import XEUtils from 'xe-utils';
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import VXEModal from './modal/index.js'
import GlobalConfig from './conf'
// import zhCN from 'vxe-table/lib/locale/lang/zh-CN'
// import enUS from 'vxe-table/lib/locale/lang/en-US'
import './renderer/default';

function setup (options = {}) {
    Object.assign(GlobalConfig, options);
    return GlobalConfig;
}
const DEFAULT_CONFIG = {
    table: {
        highlightCurrentRow: true
    }
};
const vxeInstall = VXETable.install;
const install = function (Vue, opts = {}) {
    // 安装vxe-table
    Vue.use({ install: vxeInstall });
    let langConfig = opts.i18n ? {
        translate: key => XEUtils.has(opts.i18n.messages, opts.i18n.locale + '.' + key) ? opts.i18n.t(key) : key,
        i18n: (key, args) => opts.i18n.t(key, args)
    } : {};
    // 获取配置
    let config = opts.setup ? Object.assign({}, DEFAULT_CONFIG, opts.setup) : DEFAULT_CONFIG;
    // 更新全局配置
    VXETable.setup(Object.assign(config, langConfig));
    // 更新本地配置文件
    setup(config);
    // 安装自定义模态弹窗
    Vue.use(VXEModal)
}

VXETable.install = install;
export default VXETable;