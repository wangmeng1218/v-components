// 基础组件
import baseComponents from './base-component/config';

// 测试与模仿学习
import testAndEmulate from './test-and-emulate/config';

let allMenu = [
    {
        id: 'home',
        name: '首页',
        icon: 'el-icon-s-home'
    },
    {
        id: 'base-component',
        name: '基础组件',
        icon: 'el-icon-menu',
        children: baseComponents
    },
    {
        id: 'test-and-emulate',
        name: '测试与学习',
        icon: 'el-icon-s-opportunity',
        children: testAndEmulate
    }
];

export default allMenu;