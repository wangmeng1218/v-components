<template>
    <div style="width: 100%;height: 100%;position: fixed;top: 0;">
        <el-container>
            <el-aside width="200px">
                <SideMenu :menuData="$store.state.menuData"></SideMenu>
            </el-aside>
            <el-container class="right-side-container">
                <el-header>
                    <el-tabs type="card" v-model="$store.state.currentTab">
                        <el-tab-pane
                            :key="item.name"
                            v-for="(item) in $store.state.activeTabs"
                            :label="item.title"
                            :name="item.name"
                        >
                        </el-tab-pane>
                    </el-tabs>
                </el-header>
                <el-main style="padding:6px;position:relative;" id="page-content">
                    <router-view/>
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
        return {};
    },
    computed: {},
    watch: {},
    created () {},
    mounted () {},
    methods: {}
};
</script>

<style lang="stylus">
    .right-side-container
        width 100%
        height 100%
        .el-header
            padding 0
</style>
