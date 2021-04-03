<script>
/**
* @description: 
* @create: 2021-02-01
* @author: wangmeng
*/
function test() {
    return {};
}
export default {
    name: 'render-test',
    props: {
        testData: {
            type: Array
        }
    },
    components: {},
    data () {
        return {};
    },
    computed: {},
    watch: {},
    created () {},
    mounted () {},
    updated () {
        console.log('updated-------');
    },
    render (h) {
        console.log('render------');
        return h(
            'span',
            {
                on: {
                    click: this.refresh,
                    ...test(this)
                }
            },
            this.testData.toString()
        )
    },
    methods: {
        refresh () {
            return this.$nextTick();
        }
    }
};
</script>

<style lang="" scoped>
</style>
