<template>
    <div>
        <vxe-button @click="value1 = true">默认尺寸</vxe-button>
        <vxe-modal v-model="value1">
            <template v-slot>
                <div>默认尺寸</div>
                <div>xxxxxxxxx</div>
                <div>xxxxxxxxxx</div>
            </template>
        </vxe-modal>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="名称">
                <el-input v-model="formLabelAlign.name" clearable></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-input v-model="formLabelAlign.region" clearable></el-input>
            </el-form-item>
            <el-form-item label="活动形式">
                <el-input v-model="formLabelAlign.type" clearable></el-input>
            </el-form-item>
        </el-form>
        <vxe-grid
          resizable
          border
          height="400"
          :export-config="ExportConfig"
          :pager-config="pagerConfig"
          :loading="loading"
          :toolbar-config="tableToolbar"
          :data="tableData"
          :columns="tableColumn"
          @current-change="currentRowChange">
        </vxe-grid>
        <vxe-grid
          border
          resizable
          keep-source
          height="500"
          :print-config="{}"
          :import-config="{}"
          :export-config="{}"
          :pager-config="tablePage2"
          :columns="tableColumn2"
          :data="tableData2"
          :toolbar-config="tableToolbar2"
          :edit-config="{trigger: 'click', mode: 'row', showStatus: true}"></vxe-grid>
        <vxe-grid
          border
          resizable
          keep-source
          show-overflow
          show-footer
          ref="xGrid"
          height="530"
          :pager-config="tablePage"
          :data="tableData1"
          showOverflow="title"
          showHeaderOverflow="title"
          :columns="tableColumn1"
          :toolbar-config="tableToolbar1"
          :footer-method="footerMethod"
          @current-change="currentRowChange1">
          <template v-slot:content1>
              <span>lllllll</span>
          </template>
          <template v-slot:form>
              <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="审批人">
                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-select v-model="formInline.region" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
              </el-form>
          </template>
          <template v-slot:toolbar_buttons>
            <vxe-button @click="$refs.xGrid.maximize()">表格最大化</vxe-button>
            <vxe-button @click="$refs.xGrid.revert()">表格还原</vxe-button>
            <vxe-button @click="$refs.xGrid.zoom()">切换表格最大化/还原</vxe-button>
          </template>
        </vxe-grid>
        <!-- 
          @current-change="currentRowChange" -->
        <!-- <vxe-grid v-bind="gridOptions">
            <template v-slot:toolbar_buttons>
                <vxe-button @click="gridOptions.align = 'left'">居左</vxe-button>
                <vxe-button @click="gridOptions.align = 'center'">居中</vxe-button>
                <vxe-button @click="gridOptions.align = 'right'">居右</vxe-button>
            </template>
        </vxe-grid> -->
        <RenderTest :testData="tableData"></RenderTest>
        <!-- <vxe-button @click="openModal">记忆功能的窗口</vxe-button>
        <vxe-modal v-model="value8" title="记忆功能的窗口" width="600" height="400" show-zoom resize remember>
            <template v-slot>
                <vxe-form :data="formData3" :rules="formRules3" title-align="right" title-width="60">
                    <vxe-form-item title="基本信息" span="24" title-align="left" title-width="200px" :title-prefix="{icon: 'fa fa-address-card-o'}"></vxe-form-item>
                    <vxe-form-item title="名称" field="name" span="12" :item-render="{name: 'input', attrs: {placeholder: '请输入名称'}}"></vxe-form-item>
                    <vxe-form-item title="昵称" field="nickname" span="12" :item-render="{name: 'input', attrs: {placeholder: '请输入昵称'}}"></vxe-form-item>
                    <vxe-form-item title="性别" field="sex" span="12" :item-render="{name: '$select', options: sexList}"></vxe-form-item>
                    <vxe-form-item title="年龄" field="age" span="12" :item-render="{name: 'input', attrs: {type: 'number', placeholder: '请输入年龄'}}"></vxe-form-item>
                    <vxe-form-item title="其他信息" span="24" title-align="left" title-width="200px" :title-prefix="{icon: 'fa fa-info-circle'}"></vxe-form-item>
                    <vxe-form-item title="地址" field="address" span="24" :item-render="{name: 'textarea', attrs: {placeholder: '请输入地址'}}"></vxe-form-item>
                    <vxe-form-item align="center" span="24">
                        <template v-slot>
                            <vxe-button type="submit" status="primary">提交</vxe-button>
                            <vxe-button type="reset">重置</vxe-button>
                        </template>
                    </vxe-form-item>
                </vxe-form>
            </template>
        </vxe-modal>
        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            :modal-append-to-body="false"
            width="30%">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <button @click="testChangeValue">{{ buttonValue }}</button>
        <vxe-grid
          resizable
          border
          height="400"
          :export-config="{}"
          :loading="loading"
          :toolbar-config="tableToolbar"
          :data="tableData"
          :columns="tableColumn"
          @current-change="currentRowChange">
        </vxe-grid> -->
        <!-- <el-table
            :data="tableDataEle"
            style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
        </el-table> -->
    </div>
</template>

<script>
/**
* @description: 测试vxe-table使用
* @create: 2021-01-27
* @author: wangmeng
*/
import RenderTest from './render-test';
import XEUtils from 'xe-utils';
// import XEAjax from 'xe-ajax';
import { pagination } from './operate-data';

export default {
    name: 'TestVxeTable',
    props: {},
    components: { RenderTest },
    data () {
        return {
            tablePage2: pagination,
              tableToolbar2: {
                buttons: [
                  { code: 'insert_actived', name: '新增', status: 'perfect', icon: 'fa fa-plus' },
                  { code: 'mark_cancel', name: 'app.body.button.markCancel', status: 'perfect', icon: 'fa fa-trash-o' },
                  { code: 'save', name: 'app.body.button.save', status: 'perfect', icon: 'fa fa-save' }
                ],
                perfect: true,
                refresh: {
                  icon: 'fa fa-refresh',
                  iconLoading: 'fa fa-spinner fa-spin'
                },
                import: {
                  icon: 'fa fa-upload'
                },
                export: {
                  icon: 'fa fa-download'
                },
                print: {
                  icon: 'fa fa-print'
                },
                zoom: {
                  iconIn: 'fa fa-arrows-alt',
                  iconOut: 'fa fa-expand'
                },
                custom: {
                  icon: 'fa fa-cog'
                }
              },
              tableColumn2: [
                { type: 'checkbox', width: 50 },
                { type: 'seq', width: 60 },
                { field: 'name', title: 'Name', editRender: { name: 'input' } },
                { field: 'nickname', title: 'Nickname', editRender: { name: 'input' } },
                { field: 'role', title: 'Role', editRender: { name: 'input' } },
                { field: 'describe', title: 'Describe', showOverflow: true, editRender: { name: 'input' } }
              ],
            labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
            formInline: {
                user: '',
                region: ''
            },
            tablePage: pagination,
            tableData2: [
                {
                     name: '123',
                     nickname: 'dfsdfsdfsdfdsfd',
                     role: 'sdffsdfsdfsdfsdfsdfdf',
                     rate: '30%',
                     describe: 'sdflsdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'dfswe手动阀手动阀d',
                     role: '士大夫士大夫十分sdf',
                     rate: '30%',
                     describe: 'sdflsdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'd士大夫是对方身上fsd',
                     role: 's是的发射点发射点发生df',
                     rate: '30%',
                     describe: 'sdf士大夫士大夫首发式地方lsdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'dfsd',
                     role: 'sd士大夫胜多负少纷纷回国f',
                     rate: '30%',
                     describe: 'sdfls符合法规和风格dfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'df发韩国风格化风格化sd',
                     role: 'sdf风格化风格化风格化',
                     rate: '30%',
                     describe: 'sdfl风格化风格化风格和sdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'd风格恢复更好和风格化风格化fsd',
                     role: 'sd风格和风格化法国风格和风格化风格化f',
                     rate: '30%',
                     describe: 'sdfl发给和风发和风格化风格化格化风格化sdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'dfs发鬼画符鬼画符返回风格化风格化法国d',
                     role: 'sd发和风格化风格化f',
                     rate: '30%',
                     describe: 'sdf风格恢复鬼画符风格化法国lsdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'd风格和风格恢复fsd',
                     role: 'sd风格和发挥规范化风格化f',
                     rate: '30%',
                     describe: 'sdflsdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'd风格化风格化法国fsd',
                     role: 'sd风格恢复回复给和f',
                     rate: '30%',
                     describe: 'sdf豆腐干豆腐干回家lsdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'df规范化风格规划加入天涯sd',
                     role: 'sd风格化风格化让他太阳和法规和他f',
                     rate: '30%',
                     describe: 'sdfl更好优惠幅度和他同意sdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'df凤凰歌剧院特瑞特哈哈sd',
                     role: 'sdf个复活复活具有同样人也如果对方和',
                     rate: '30%',
                     describe: 'sdflsdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'df风格化风格化风格化九分高峰过后sd',
                     role: 'sd风格化法国教育体育f',
                     rate: '30%',
                     describe: 'sdfls风格化风格化今天也让他当个dfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'dfsdfsdfsdfdsfd',
                     role: 'sdffsdfsdfsdfsdfsdfdf',
                     rate: '30%',
                     describe: 'sdflsdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'dfswe手动阀手动阀d',
                     role: '士大夫士大夫十分sdf',
                     rate: '30%',
                     describe: 'sdflsdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'd士大夫是对方身上fsd',
                     role: 's是的发射点发射点发生df',
                     rate: '30%',
                     describe: 'sdf士大夫士大夫首发式地方lsdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'dfsd',
                     role: 'sd士大夫胜多负少纷纷回国f',
                     rate: '30%',
                     describe: 'sdfls符合法规和风格dfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'df发韩国风格化风格化sd',
                     role: 'sdf风格化风格化风格化',
                     rate: '30%',
                     describe: 'sdfl风格化风格化风格和sdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'd风格恢复更好和风格化风格化fsd',
                     role: 'sd风格和风格化法国风格和风格化风格化f',
                     rate: '30%',
                     describe: 'sdfl发给和风发和风格化风格化格化风格化sdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'dfs发鬼画符鬼画符返回风格化风格化法国d',
                     role: 'sd发和风格化风格化f',
                     rate: '30%',
                     describe: 'sdf风格恢复鬼画符风格化法国lsdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'd风格和风格恢复fsd',
                     role: 'sd风格和发挥规范化风格化f',
                     rate: '30%',
                     describe: 'sdflsdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'd风格化风格化法国fsd',
                     role: 'sd风格恢复回复给和f',
                     rate: '30%',
                     describe: 'sdf豆腐干豆腐干回家lsdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'df规范化风格规划加入天涯sd',
                     role: 'sd风格化风格化让他太阳和法规和他f',
                     rate: '30%',
                     describe: 'sdfl更好优惠幅度和他同意sdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'df凤凰歌剧院特瑞特哈哈sd',
                     role: 'sdf个复活复活具有同样人也如果对方和',
                     rate: '30%',
                     describe: 'sdflsdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'df风格化风格化风格化九分高峰过后sd',
                     role: 'sd风格化法国教育体育f',
                     rate: '30%',
                     describe: 'sdfls风格化风格化今天也让他当个dfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 }
            ],
             tableData1: [
                 {
                     name: '123',
                     nickname: 'dfsdfsdfsdfdsfd',
                     role: 'sdffsdfsdfsdfsdfsdfdf',
                     rate: '30%',
                     describe: 'sdflsdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'dfswe手动阀手动阀d',
                     role: '士大夫士大夫十分sdf',
                     rate: '30%',
                     describe: 'sdflsdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'd士大夫是对方身上fsd',
                     role: 's是的发射点发射点发生df',
                     rate: '30%',
                     describe: 'sdf士大夫士大夫首发式地方lsdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'dfsd',
                     role: 'sd士大夫胜多负少纷纷回国f',
                     rate: '30%',
                     describe: 'sdfls符合法规和风格dfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'df发韩国风格化风格化sd',
                     role: 'sdf风格化风格化风格化',
                     rate: '30%',
                     describe: 'sdfl风格化风格化风格和sdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'd风格恢复更好和风格化风格化fsd',
                     role: 'sd风格和风格化法国风格和风格化风格化f',
                     rate: '30%',
                     describe: 'sdfl发给和风发和风格化风格化格化风格化sdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'dfs发鬼画符鬼画符返回风格化风格化法国d',
                     role: 'sd发和风格化风格化f',
                     rate: '30%',
                     describe: 'sdf风格恢复鬼画符风格化法国lsdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'd风格和风格恢复fsd',
                     role: 'sd风格和发挥规范化风格化f',
                     rate: '30%',
                     describe: 'sdflsdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'd风格化风格化法国fsd',
                     role: 'sd风格恢复回复给和f',
                     rate: '30%',
                     describe: 'sdf豆腐干豆腐干回家lsdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'df规范化风格规划加入天涯sd',
                     role: 'sd风格化风格化让他太阳和法规和他f',
                     rate: '30%',
                     describe: 'sdfl更好优惠幅度和他同意sdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'df凤凰歌剧院特瑞特哈哈sd',
                     role: 'sdf个复活复活具有同样人也如果对方和',
                     rate: '30%',
                     describe: 'sdflsdfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 },
                 {
                     name: '123',
                     nickname: 'df风格化风格化风格化九分高峰过后sd',
                     role: 'sd风格化法国教育体育f',
                     rate: '30%',
                     describe: 'sdfls风格化风格化今天也让他当个dfj',
                     createTime: '2021.12.12',
                     updateTime: '2021.12.12'
                 }
             ],
              tableToolbar1: {
                perfect: true,
                refresh: true,
                zoom: true,
                custom: true,
                slots: {
                  buttons: 'toolbar_buttons'
                }
              },
              tableColumn1: [
                { type: 'expand', width: 50, slots: { content: 'content1' }},
                { type: 'checkbox', width: 100 },
                { type: 'seq', width: 100 },
                { field: 'name', title: 'comp.table.testTable', minWidth: 300 },
                { field: 'nickname', title: 'comp.table.testTable', minWidth: 300 },
                { field: 'role', title: 'comp.table.testTable', minWidth: 300 },
                { field: 'rate', title: 'comp.table.testTable', minWidth: 300 },
                { field: 'describe', title: 'comp.table.testTable', minWidth: 300 },
                { field: 'createTime', title: 'comp.table.testTable', minWidth: 300 },
                { field: 'updateTime', title: 'comp.table.testTable', minWidth: 300 }
              ],
            pagerConfig: { currentPage: 1, pageSize: 15, total: 0 },
            ExportConfig: {},
            value1: false,
            gridOptions: {
                border: true,
                resizable: true,
                showOverflow: true,
                height: 300,
                align: 'left',
                toolbarConfig: {
                    slots: {
                        buttons: 'toolbar_buttons'
                    }
                },
                columns: [
                    { type: 'seq', width: 50 },
                    { field: 'name', title: 'app.body.label.name' },
                    { field: 'sex', title: 'app.body.label.sex', showHeaderOverflow: true },
                    { field: 'address', title: 'Address', showOverflow: true }
                ],
                data: [
                    { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 0, address: 'Shenzhen' },
                    { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 100, address: 'Shanghai' },
                    { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women ', age: 70, address: 'Shenzhen' },
                    { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women ', age: 10, address: 'Shanghai' },
                    { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women ', age: 90, address: 'Shenzhen' },
                    { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man ', age: 5, address: 'Shenzhen' },
                    { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man ', age: 80, address: 'Shenzhen' }
                ]
            },
            dialogVisible: false,
            value8: false,
            formData3: {
                name: '',
                nickname: '',
                sex: '',
                age: 26,
                address: null
            },
            formRules3: {
                name: [
                    { required: true, message: '请输入名称' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
                ],
                nickname: [
                    { required: true, message: '请输入昵称' }
                ],
                sex: [
                    { required: true, message: '请选择性别' }
                ]
            },
            sexList: [
                { label: '', value: '' },
                { label: '女', value: '0' },
                { label: '男', value: '1' }
            ],
            tableToolbar: {
                export: true,
                custom: true
            },
            tableColumn: [
                { type: 'seq', width: 60 },
                { type: 'checkbox', width: 60 },
                { field: 'name', title: 'Name' },
                { field: 'nickname', title: 'Nickname' },
                { field: 'age', title: 'Age' },
                { field: 'sex', title: 'Sex' },
                { field: 'describe', title: 'Describe', showOverflow: true }
                // { filed: '', title: '操作', cellRender: { name: 'operate' }}
            ],
            tableData: [
                {
                    name: 'sdfd',
                    nickname: 'kkkd',
                    age: '12',
                    sex: '',
                    describe: 'sdsdfds'
                },
                {
                    name: 'sdfd',
                    nickname: 'kkkd',
                    age: '12',
                    sex: '',
                    describe: 'sdsdfds'
                },
                {
                    name: 'sdfd',
                    nickname: 'kkkd',
                    age: '12',
                    sex: '',
                    describe: 'sdsdfds'
                },
                {
                    name: 'sdfd',
                    nickname: 'kkkd',
                    age: '12',
                    sex: '',
                    describe: 'sdsdfds'
                },
                {
                    name: 'sdfd',
                    nickname: 'kkkd',
                    age: '12',
                    sex: '',
                    describe: 'sdsdfds'
                }
            ],
            loading: false,
            tableDataEle: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            buttonValue: 0
        };
    },
    computed: {},
    watch: {},
    created () {},
    mounted () {},
    methods: {
        testChangeValue () {
            this.buttonValue ++;
        },
        // { row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, $event }
        currentRowChange () {
            console.log('currentRowChange。。。。。。');
            // var start = (new Date()).getTime();
            // while((new Date()).getTime() - start < 4000) {
            //     continue;
            // }
        },
        currentRowChange1 () {
            console.log('currentRowChange1111111。。。。。。');
        },
        openModal () {
            this.value8 = true;
            console.log(new Date().getTime());
        },
        footerMethod ({ columns, data }) {
              const sums = []
              columns.forEach((column, columnIndex) => {
                if (columnIndex === 0) {
                  sums.push('和值')
                } else {
                  if (column.property === 'rate') {
                    sums.push(XEUtils.sum(data, column.property))
                  } else {
                    sums.push('-')
                  }
                }
              })
              // 返回一个二维数组的表尾合计
              return [sums]
            }
    }
};
</script>

<style lang="" scoped>
</style>
