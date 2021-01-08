<template>
    <div style="padding: 30px 0 0 0;">
        <div class="tooltip tooltip-left">
            左侧
            <span class="tooltiptext">左侧提示</span>
        </div>
        <div class="tooltip tooltip-right" style="margin-left: 5px;">
            右侧
            <span class="tooltiptext">右侧提示</span>
        </div>
        <div class="tooltip tooltip-top" style="margin-left: 5px;">
            头部
            <span class="tooltiptext">头部提示</span>
        </div>
        <div class="tooltip tooltip-bottom" style="margin-left: 5px;">
            底部
            <span class="tooltiptext">底部提示</span>
        </div>
    </div>
</template>

<script>
/**
* @description: css实现提示工具
* @create: 2021-01-07
* @author: wangmeng
*/
export default {
    name: 'tooltip-realized',
    props: {},
    components: {},
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

<style scoped>
/* Tooltip 容器 */
.tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black; /* 悬停元素上显示点线 */
}
 
/* Tooltip 文本 */
.tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    /* 定位 */
    position: absolute;
    z-index: 9999;
}
.tooltip.tooltip-left .tooltiptext {
    top: -5px;
    right: 105%; 
}
.tooltip.tooltip-right .tooltiptext {
    top: -5px;
    left: 105%; 
}
.tooltip.tooltip-top .tooltiptext {
    width: 120px;
    bottom: 100%;
    left: 50%; 
    margin-left: -60px; /* 使用一半宽度 (120/2 = 60) 来居中提示工具 */
}
.tooltip.tooltip-bottom .tooltiptext {
    width: 120px;
    top: 100%;
    left: 50%; 
    margin-left: -60px; /* 使用一半宽度 (120/2 = 60) 来居中提示工具 */
}
.tooltip.tooltip-top .tooltiptext::after {
    content: " ";
    position: absolute;
    top: 100%; /* 提示工具底部 */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
}
.tooltip.tooltip-bottom .tooltiptext::after {
    content: " ";
    position: absolute;
    bottom: 100%; /* 提示工具顶部 */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent black transparent;
}
.tooltip.tooltip-left .tooltiptext::after {
    content: " ";
    position: absolute;
    top: 50%; /* 提示工具左侧 */
    left: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent transparent black;
}
.tooltip.tooltip-right .tooltiptext::after {
    content: " ";
    position: absolute;
    top: 50%; /* 提示工具右侧 */
    right: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent black transparent transparent;
}
/* 鼠标移动上去后显示提示框 */
.tooltip:hover .tooltiptext {
    visibility: visible;
}
</style>
