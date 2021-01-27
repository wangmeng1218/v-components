<template>
    <div>
        <el-tag>HTML5新增的，可以使用脚本(通常为JavaScript)在其中绘制图像的HTML元素。可以用来制作照片集或者制作简单（也不是那么简单）的动画，甚至可以进行实时视频处理和渲染。</el-tag>
        <div>
            <div style="padding: 10px;">
                canvas只有两个可选的属性，width、height属性，而没有src、alt属性。
                不设置宽高时，默认宽度为300，高度为150，单位都是px。也可以使用css属性设置宽高，
                但是如果宽高属性和初始比例不一致，会出现扭曲。所以，建议永远不要使用css设置canvas的宽高。
            </div>
            <canvas id="basic-canvas" width="300" height="200">
                你的浏览器不支持canvas，请升级你的浏览器。（替换内容，不支持canvas的浏览器会显示）
            </canvas>
        </div>
    </div>
</template>

<script>
/**
* @description: HTML5 Canvas
* @create: 2021-01-26
* @author: wangmeng
*/
export default {
    name: '',
    props: {},
    components: {},
    data () {
        return {};
    },
    computed: {},
    watch: {},
    created () {},
    mounted () {
        // 2D渲染上下文
        this.$nextTick(function () {
            let canvas = document.getElementById('basic-canvas');
            // 检测支持性
            if (canvas.getContext) {
                // 获取2d上下文对象
                let ctx = canvas.getContext('2d');
                ctx.fillStyle = "rgb(200, 0, 0)";
                // 绘制矩形
                ctx.fillRect(10, 10, 55, 50);
                
                ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
                ctx.fillRect(30, 30, 55, 50);
                // 填充矩形
                ctx.fillRect(90, 10, 60, 30);
                // 矩形边框
                ctx.strokeRect(90, 50, 60, 20);
                // 清除指定矩形区域
                ctx.clearRect(100, 20, 30, 10);

                // 新建一条path
                ctx.beginPath();
                // 把画笔移动到指定的坐标
                ctx.moveTo(170, 10);
                // 绘制一条直线
                ctx.lineTo(270, 10);
                ctx.lineTo(270, 80);
                // ctx.lineTo(270, 10);
                // 闭合路径
                // ctx.closePath();
                // 绘制路径
                // ctx.stroke();
                ctx.fill();

                // 圆弧
                ctx.beginPath();
                ctx.arc(10, 100, 20, 0, Math.PI/2, false);
                ctx.stroke();

                // 圆弧案例2
                ctx.beginPath();
                ctx.arc(40, 120, 30, 0, -Math.PI/2, true);
                ctx.closePath();
                ctx.stroke();

                // 半圆
                ctx.beginPath();
                ctx.arc(80, 100, 10, -Math.PI/2, Math.PI/2, false);
                ctx.fill();

                // arcTo案例
                ctx.beginPath();
                ctx.moveTo(100, 100);
                ctx.arcTo(200, 100, 200, 200, 100);
                ctx.lineTo(200, 200);
                ctx.stroke();
                
            } else {
                // 不支持canvas
            }
        });
    },
    methods: {}
};
</script>

<style lang="" scoped>
</style>
