<template>
    <div>
        <vxe-button @click="value8 = true">记忆功能的窗口</vxe-button>
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
    </div>
</template>

<script>
/**
* @description: 测试vxe-table使用
* @create: 2021-01-27
* @author: wangmeng
*/
export default {
    name: '',
    props: {},
    components: {},
    data () {
        return {
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
            ]
        };
    },
    computed: {},
    watch: {},
    created () {},
    mounted () {},
    methods: {}
};
</script>

<style lang="" scoped>
</style>
