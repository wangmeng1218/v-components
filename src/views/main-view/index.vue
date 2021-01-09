<template>
    <div style="width: 100%;height: 100%;position: fixed;top: 0;">
        <el-container>
            <el-aside width="210px">
                <SideMenu :unique-opened="true" :default-active="$store.state.currentUrl" :menuData="$store.state.menuData" @select="menuSelect"></SideMenu>
            </el-aside>
            <el-container class="right-side-container">
                <!-- <el-header>
                    <el-tabs type="card" @tab-click="tabClick" closable @tab-remove="tabRemove" v-model="currentActiveTab">
                        <el-tab-pane
                            :key="item.name"
                            v-for="(item) in $store.state.activeTabs"
                            :label="item.title"
                            :name="item.name"
                        >
                        </el-tab-pane>
                    </el-tabs>
                </el-header> -->
                <el-main :style="{ height: $store.state.clientHeight + 'px' }" style="padding:6px;position:relative;width: 100%;" id="page-content">
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
/**
* @description: 
* @create: 2020-11-01
* @author: wangmeng
*/
import SideMenu from './side-menu';
export default {
    name: 'main-view',
    props: {},
    components: { SideMenu },
    data () {
        return {
            currentActiveTab: 'home'
        };
    },
    computed: {},
    watch: {
        '$store.state.currentTab' (val) {
            this.currentActiveTab = val;
        }
    },
    created () {},
    mounted () {},
    methods: {
        menuSelect (item) {
            if (item && item.id && item.name) {
                this.$store.commit('addActiveTabs', { name: item.id, title: item.name });
                this.$store.commit('setCurrentTab', item.id);
                this.currentActiveTab = item.id;
            }
        },
        tabRemove (name) {
            let activeTabs = this.$store.state.activeTabs;
            let targetIndex = activeTabs.findIndex(tab => tab.name === name);
            // 如果关闭的是当前页面
            if (this.$store.state.currentTab === name) {
                let tab = activeTabs[targetIndex + 1] || activeTabs[targetIndex - 1];
                let path = '/';
                if (tab && tab.name) {
                    path = '/' + tab.name;
                }
                this.$router.push({ path: path });
            }
            this.$store.commit('removeActiveTabs', name);
        },
        tabClick (tab) {
            if (tab.name !== this.$store.state.currentTab) {
                // 点击的tab页不是当前活动的tab页，需要进行路由跳转
                let path = '/' + tab.name;
                this.$router.push({ path: path });
                // 设置当前活动的tab页
                this.$store.commit('setCurrentTab', tab.name);
            }
        }
    }
};
</script>

<style lang="stylus">
    .right-side-container
        width 100%
        height 100%
        .el-header
            padding 0
        .el-tabs__nav.is-top>div:first-child>.el-icon-close
            display none
</style>
