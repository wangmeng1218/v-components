
<script>
/**
* @description: 侧边菜单封装
* @create: 2020-11-01
* @author: wangmeng
*/
export default {
    name: 'side-menu',
    props: {
        menuData: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    render (h) {
        return h(
            'el-menu',
            {
                on: this.$listeners
            },
            [
                this.getMenuItem(h, this.menuData)
            ]
        )
    },
    components: {},
    data () {
        return {};
    },
    computed: {},
    watch: {},
    created () {},
    mounted () {},
    methods: {
        getMenuItem (h, menuData) {
            let menus = [];
            let self = this;
            menus = menuData.map(menu => {
                if (menu.children && menu.children.length !== 0) {
                    return h(
                        'el-submenu',
                        {
                            props: {
                                index: menu.id
                            }
                        },
                        [
                            h('template', { slot: 'title' }, self.getMenuIcon(h, menu)),
                            ...self.getMenuItem(h, menu.children)
                        ]
                    );
                } else {
                    return h(
                        'el-menu-item',
                        {
                            props: {
                                index: menu.id
                            },
                            on: {
                                click: () => {
                                    this.$emit('select', menu);
                                }
                            }
                        },
                        [
                            self.getMenuIcon(h, menu)
                        ]
                    )
                }
            });
            return menus;
        },
        getMenuIcon (h, menu) {
            let nodes = [];
            if (menu.icon) {
                nodes.push(
                    h(
                        'i',
                        {
                            'class': menu.icon
                        }
                    )
                );
            }
            nodes.push(
                h(
                    'span',
                    {
                        slot: 'title'
                    },
                    [
                        menu.name
                    ]
                )
            );
            return nodes;
        }
    }
};
</script>

<style lang="" scoped>
</style>
