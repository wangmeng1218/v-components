<template>
    <div id="catalog-and-content" style="position: absolute;top: 0;right: 0;left: 0;bottom: 0;overflow: auto;">
        <div class="sidebar">
            <ul class="menu-root">
                <li>
                    <h3>基础</h3>
                </li>
                <li>
                    <a href="#catalog01" @click="nodeClick($event)">安装</a>
                    <ul>
                        <li>
                            <a class="section-link" href="#catalog02" @click="nodeClick($event)">Vue Devtools</a>
                        </li>
                        <li>
                            <a class="section-link" href="#catalog03" @click="nodeClick($event)">NPM</a>
                        </li>
                        <li>
                            <a class="section-link" href="#catalog04" @click="nodeClick($event)">命令行工具</a>
                        </li>
                        <li>
                            <a class="section-link" href="#catalog05" @click="nodeClick($event)">开发版本</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#catalog06">介绍</a>
                    <ul>
                        <li>
                            <a class="section-link" href="#catalog07" @click="nodeClick($event)">Vue实例</a>
                        </li>
                        <li>
                            <a class="section-link" href="#catalog08" @click="nodeClick($event)">模板语法</a>
                        </li>
                        <li>
                            <a class="section-link" href="#catalog09" @click="nodeClick($event)">计算属性和侦听器</a>
                        </li>
                        <li>
                            <a class="section-link" href="#catalog10" @click="nodeClick($event)">条件渲染</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="content-part">
            <div style="height: 200px;">
                <h3 id="catalog01">catalog01</h3>
            </div>
            <div style="height: 200px;">
                <h3 id="catalog02">catalog02</h3>
            </div>
            <div style="height: 200px;">
                <h3 id="catalog03">catalog03</h3>
            </div>
            <div style="height: 200px;">
                <h3 id="catalog04">catalog04</h3>
            </div>
            <div style="height: 200px;">
                <h3 id="catalog05">catalog05</h3>
            </div>
            <div style="height: 200px;">
                <h3 id="catalog06">catalog06</h3>
            </div>
            <div style="height: 200px;">
                <h3 id="catalog07">catalog07</h3>
            </div>
            <div style="height: 200px;">
                <h3 id="catalog08">catalog08</h3>
            </div>
            <div style="height: 200px;">
                <h3 id="catalog09">catalog09</h3>
            </div>
            <div style="height: 200px;">
                <h3 id="catalog10">catalog10</h3>
            </div>
        </div>
    </div>
</template>

<script>
/**
* @description: 目录与内容定位测试
* @create: 2021-01-11
* @author: wangmeng
*/
export default {
    name: 'catalog-and-content',
    props: {},
    components: {},
    data () {
        return {};
    },
    computed: {},
    watch: {},
    created () {},
    mounted () {
        this.$nextTick(function () {
            // 监听滚动
        });
    },
    methods: {
        nodeClick (event) {
            document.getElementsByTagName('a').forEach(dom => {
                dom.classList.remove('active');
            });
            event.target.classList.add('active');
        }
    }
};
</script>

<style lang="stylus">
    .sidebar
        padding 6px 20px 0
        position sticky
        float left
        width 200px
        top 0
        ul
            list-style-type none
            margin 0
            line-height 1.5em
        a
            text-decoration none
            color #304455
        .menu-root
            padding-left 0
            text-align left
        .section-link.active
            font-weight bold
            color #42b983
    .content-part
        overflow hidden
        white-space pre-wrap
</style>
