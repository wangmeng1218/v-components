<template>
    <div class="page_container">
        <div class="question_title">浮动问题：</div>
        <div class="example_container">
            <div class="content-part">
                <div class="content-part__notify">
                    <span>
                        浮动：容器高度auto,内部包含浮动元素时，容器不会被撑开
                    </span>
                </div>
                <div class="float-container">
                    <div class="float-content">sdfdf</div>
                </div>
            </div>
            <div class="content-part">
                <div class="content-part__notify">
                    <span>
                        解决浮动1：容器添加overflow属性（overflow:hidden;或者overflow:auto;）
                    </span>
                </div>
                <div class="float-container" style="overflow:hidden;">
                    <div class="float-content">sdfdf</div>
                </div>
            </div>
            <div class="content-part">
                <div class="content-part__notify">
                    <span>
                        解决浮动2：浮动元素后添加包含clear:both属性的空白元素
                    </span>
                </div>
                <div  class="float-container">
                    <div class="float-content">sdfdf</div>
                    <div style="clear:both;"></div>
                </div>
            </div>
            <div class="content-part">
                <div class="content-part__notify">
                    <span>
                        解决浮动3：伪元素方式，容器添加clearfix类 + .clearfix:after{content:'';display: block;clear:both;}
                    </span>
                </div>
                <div class="float-container clearfix">
                    <div class="float-content">sdfdf</div>
                </div>
            </div>
        </div>
        <div class="question_title">格式化宽度：</div>
        <div style="height: 50px;position: relative;">
            <div style="position: absolute;left: 20px;right: 100px;">绝对定位 + left/right或top/bottom对立属性同时存在，宽度相对于最近的具有定位特性的祖先计算</div>
        </div>
        <div class="question_title">inline-block包裹性应用(元素尺寸由内部元素决定)：</div>
        <div style="text-align: center;">
            <p style="display:inline-block;text-align: left;">页面某个模块的文字内容是动态的，希望文字少时居中，文字超过一行居左显示</p>
        </div>
         <div class="question_title">首选最小宽度（图文权重远大于布局，图文在width:auto时宽度不会变成0）：</div>
         <div class="notify_text">
            <ul>
                <li>东亚文字（如中文），最小宽度是每个汉字的宽度</li>
                <li>西方文字  最小宽度由特定的连续的英文字符单元决定</li>
                <li>如果想让英文和中文一样，每一个字符都用最小宽度，word-break: break-all;</li>
            </ul>
        </div>
        <span class="ao"></span>
        <span class="tu"></span>
        <div class="question_title">max/min-widht;max/min-height应用（自适应布局或流体布局中）：</div>
        <div class="notify_text">任意高度元素展开收起动画技术</div>
        <input id="check" type="checkbox">
        <p>层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化</p>
        <div class="element">
        <p>CSS是一种定义样式结构如字体、颜色、位置等的语言，被用于描述网页上的信息格式化和显示的方式。CSS样式可以直接存储于HTML网页或者单独的样式单文件。无论哪一种方式，样式单包含将样式应用到指定类型的元素的规则。外部使用时，样式单规则被放置在一个带有文件扩展名_css的外部样式单文档中</p>
        </div>
        <label for="check" class="check-in">更多↓</label>
        <label for="check" class="check-out">收起↑</label>
        <div class="notify_text">
            内联盒模型：
            <ul>
                <li>内容区域：围绕文字看不见的盒子，大小受字符本身特性控制，本质是字符盒子。文本选中时的背景区域</li>
                <li>内联盒子：使内容拍成一行</li>
                <li>行框盒子：每一行就是一个行框盒子【行框盒子前面有一个宽度为0的空白字符，幽灵空白节点】</li>
                <li>包含盒子：p标签就是一个包含盒子</li>
            </ul>
        </div>
        <div class="notify_text">
            替换元素尺寸计算规则：
            <ul style="list-style-type: decimal;">
                <li>固有尺寸</li>
                <li>HTML尺寸</li>
                <li>css尺寸</li>
                <li>没有HTML、css尺寸，使用固有尺寸；没有css尺寸，使用HTML尺寸</li>
                <li>如果固有尺寸含有固有宽高比，同时仅设置了宽度或者仅设置了高度，仍按固有宽高比呈现</li>
                <li>以上都不符合，宽度300px，高度150px，宽高比2：1</li>
                <li>第6点图片例外，裸露的img标签，各浏览器下尺寸不一样；IE 28*30,Chrome 0*0,FireFox 0*22</li>
            </ul>
        </div>
        <div class="notify_text">图片文字不对齐问题（vertical-align默认值是baseline，而图片的基线在底部，文字在中间偏下一点，因此图片与文字呈现不对齐状态;解决方法是图片添加vertical-align:bottom;）：</div>
        <div class="example_container1">
            <div class="content-part1">
                <img src="../../../assets/fgyy.jpg" width="160px">
                <span>我没有被讨厌</span>
            </div>
            <div class="content-part1">
                <img style="vertical-align: bottom;" src="../../../assets/fgyy.jpg" width="160px">
                <span>我没有被讨厌</span>
            </div>
        </div>
        <div class="notify_text">使用content属性生成一张图片（效果和img标签相同）：</div>
        <img class="content_img">
        <img src="../../../assets/logo.png">
        <div class="notify_text">如果图片原来是有src地址的，可以通过content把图片内容换掉，轻松实现hover图片变成另一张图片的效果。content改变只是视觉效果，右键或其他方式保存的还是src对应的图片。</div>
        <img width="200" height="200" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" class="hover_change_img">
        <div class="notify_text">普通标签变替换元素</div>
        <h1 class="h1_change"><pre>&lt;&lt;css世界>></pre></h1>
        <div class="notify_text">实际项目中，content大都用在::before/::after这两个伪元素中（IE8仅支持单冒号的伪元素:before/:after）</div>
        <div class="example_container1">
            <div class="content-part1">
                <div class="notify_text">辅助元素生成,<code>.element:before{ content: ''; }</code>,然后利用其他css来生成辅助元素或者实现图形效果，或者实现特定布局</div>
            </div>
            <div class="content-part1">
                <div class="notify_text">例如 清除浮动带来的影响</div>
                <code>
                    .clear:after{
                        content: '';
                        display: block;
                        clear: both;
                    }
                </code>
            </div>
            <div class="content-part1">
                <div class="notify_text">例如 辅助实现两端对齐、垂直居中、上边缘对齐、下边缘对齐</div>
                <code>
                    :before辅助实现底部对齐
                    :before{
                        content: '';
                        display: inline-block;
                        height: 100%;
                    }

                    :after辅助实现两端对齐
                    :after{
                        content: '';
                        display: inline-block;
                        width: 100%;
                    }
                </code>
            </div>
             <div class="content-part1">
                <div class="notify_text">使用background-image模拟伪元素的图片</div>
                <div class="div_image" style="width: 200px;height: 200px;"></div>
            </div>
        </div>
        <div class="notify_text">open-quote/close-quote引号，为不同语言指定引号的表现</div>
        <div class="quote_text" lang="ch">中文</div>
        <div class="quote_text" lang="en">English</div>
        <div class="quote_text" lang="no">未定义</div>
        <div class="notify_text">quotes实际可以指定几乎任意的字符，且是任意数量的字符</div>
        <p class="ask">为什么open-quote/close-quote很少使用</p>
        <p class="answer">因为直接使用字符更干脆！</p>
        <div class="notify_text">content  attr属性内容生成,除了原生的HTML属性，自定义的HTML属性也是可以生成的；还可以混合其他内容</div>
        <img width="200" alt="鬼灭之刃" class="content_attr">
        <a class="href_content" href="localhost:8080">链接~~~~~~</a>
        <div class="notify_text">padding不支持负值，padding支持百分比，padding的百分比，无论是水平方向还是垂直方向，都是相对宽度计算的；padding可以在不影响布局的情况下，优雅的增加链接和按钮的点击区域大小；利用内联元素实现高度可控的分隔线</div>
        <a href="">登录</a><a href="">注册</a>
        <!-- <div class="box"><i class="bar" style="height: 20px;background-color: #499702;"></i>
            <i class="bar" style="height: 80px;background-color: #399702;"></i>
            <i class="bar" style="height: 50px;background-color: #648759;"></i>
            <i class="bar" style="height: 100px;background-color: #816258;"></i>
        </div> -->
    </div>
</template>

<script>
/**
* @description: HTML与js测试
* @create: 2021-02-25
* @author: wangmeng
*/
export default {
    name: 'TestHtmlAndJs',
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
    .page_container{
        text-align: left;
    }
    .question_title{
        color:#ac4848;
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 1rem;
    }
    .example_container{
        display: flex;
        /* flex-direction: row;
        flex-wrap: wrap; */
        flex-flow: row wrap;
        justify-content: space-between;
    }
    .content-part{
        width: 15rem;
        border: solid 1px #E9E9EB;
        border-radius: .2rem;
        text-align: left;
        padding: .5rem;
        box-sizing: border-box;
    }
    .example_container1{
        display: flex;
        /* flex-direction: row;
        flex-wrap: wrap; */
        flex-flow: row wrap;
        justify-content: flex-start;
    }
    .content-part1{
        width: 20rem;
        border: solid 1px #E9E9EB;
        border-radius: .2rem;
        text-align: left;
        padding: .5rem;
        box-sizing: border-box;
        margin: 10px;
    }
    /* .content-part + .content-part{
        margin-left: .5rem;
    } */
    .content-part__notify{
        background: #FDE2E2;
        border-radius: .2rem;
        padding: .3rem;
        margin-bottom: .3rem;
        word-break: break-all;
    }
    .notify_text{
        background: #FDE2E2;
        border-radius: .2rem;
        padding: .3rem;
        word-break: break-all;
        margin: 20px 0 10px 0;
    }
    .float-container{
        width: 7rem;
        background: #409EFF;
    }
    .float-content{
        float: left;
        width: 3rem;
    }
    .clearfix:after{
        content:'';
        display: block;
        clear:both;
    }
    .ao{
        display: inline-block;
        width: 0;
        margin: 35px;
    }
    .ao:before{
        content:'love你love';
        outline: 2px solid #cd0;
        color: #fff;
    }
    .tu{
        display: inline-block;
        width: 0;
        margin: 35px;
        direction: rtl;
    }
    .tu:before{
        content: '我love你';
        outline: 2px solid #ac4848;
        color: #fff;
    }
    .element {
        max-height: 0;
        overflow: hidden;
        transition: max-height .25s;
    }
    :checked ~ .element {
        max-height: 666px;
    }
    .content_img{
        content: url('../../../assets/logo.png');
    }
    .hover_change_img:hover{
        content: url('../../../assets/logo.png');
    }
    .h1_change{
        content: url('../../../assets/logo.png')
    }
    .box {
        width: 256px;
        height: 256px;
        margin: auto;
        border-bottom: 1px dashed #ccc;
        text-align: justify;
    }
    .box:before {
        content: "";
        display: inline-block;
        height: 100%;
    }
    .box:after {
        content: "";
        display: inline-block;
        width: 100%;
    }
    .bar {
        display: inline-block;
        width: 20px;
    }
    .div_image{
        content: '';
        background-image: url('../../../assets/logo.png');
    }
    :lang(ch){
        quotes: '“' '”';
    }
    :lang(en){
        quotes: '"' '"';
    }
    :lang(no){
        quotes: '<<' '>>';
    }
    .quote_text:before{
        content: open-quote;
    }
    .quote_text:after{
        content: close-quote;
    }
    .ask{
        quotes: '提问：“' '”';
    }
    .answer{
        quotes: '回答：“' '”';
    }
    .ask:before,
    .answer:before{
        content: open-quote;
    }
    .ask:after,
    .answer:after{
        content: close-quote;
    }
    .content_attr:after{
        /*生成alt信息*/
        content: attr(alt);
    }
    .href_content:after{
        content: "(" attr(href) ")";
    }
    a + a:before{
        content: '';
        font-size: 0;
        padding: 10px 3px 1px;
        margin-left: 6px;
        border-left: 1px solid gray;
    }
</style>
