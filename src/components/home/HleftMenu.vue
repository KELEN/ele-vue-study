<style lang="less">
    @menuWrapZindex: 9998;
    @menuZindex: 10000;
    @menuOverlayZindex: 9999;
    .more-category-wrap {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: @menuWrapZindex;
    }
    .side-menu {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 90%;
        height: 100%;
        background: #EEE;
        z-index: @menuZindex;
        transition: transform 0.6s ease;
    }
    .side-menu-overlay {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.7;
        z-index: @menuOverlayZindex;
        transition: opacity 0.6s ease;
    }
    .drawer-enter-active {
        .side-menu {
            transform: translateX(-100%);
        }
        .side-menu-overlay {
            opacity: 0;
        }
    }
    .drawer-leave-active {
        transition: all 0.8s ease;
        .side-menu {
            transform: translateX(-100%);
        }
        .side-menu-overlay {
            opacity: 0;
        }
    }
    .side-header {
        height: 40px;
        line-height: 40px;
        padding:4px 0 4px 14px;
        font-size: 14px;
        border: 1px solid #E1E1E1;
    }
    .category-list {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        padding-top: 50px;
        box-sizing: border-box;
        .category-tab {
            width: 30%;
            float: left;
            height: 100%;
            overflow-y: auto;
            box-sizing: border-box;
            li {
                line-height: 50px;
                box-sizing: border-box;
                border-bottom: 1px solid #E1E1E1;
                border-right: 1px solid #e1e1e1;
                text-align: center;
            }
        }
    }
    .active {
        border-right: none !important;
        background-color: white;
        display: block;
    }
    .category-tab-content {
        position: relative;
        height: 100%;

        overflow: auto;
    }
</style>
<template>
    <transition name="drawer">
        <div v-show="isOpen" class="more-category-wrap">
            <aside id="sideMenu" class="side-menu">
                <h3 class="side-header">全部分类</h3>
                <div class="category-list">
                    <ul class="category-tab">
                        <li @click="loadDetail(item.id, item.dataUrl, $event)" v-for="item in categories" :data-target="'tc' + item.id">
                            {{ item.name }}
                        </li>
                    </ul>
                    <keep-alive>
                        <component class="category-tab-content" :is="detailView" :jsonpUrl="menuJsonpUrl"></component>
                    </keep-alive>
                </div>
            </aside>
            <div class="side-menu-overlay" v-on:click="closeDrawer()"></div>
        </div>
    </transition>
</template>
<script>
    import view8141 from '../leftMenuDetail/view8141.vue'
    import view8142 from '../leftMenuDetail/view8142.vue'
    import view8143 from '../leftMenuDetail/view8143.vue'
    import navCategoryItem from '../leftMenuDetail/navCategoryItem.vue'
    export default {
        components: {
            view8141, view8142, view8143, navCategoryItem
        },
        props: {
            open: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                categories: [],
                detailView: "navCategoryItem",
                menuJsonpUrl: "menu-weinintuijian"
            }
        },
        computed: {
            isOpen: function () {
                return this.open;
            }
        },
        mounted () {
            let that = this;
            // 默认推荐
            $.get('/src/json/menu-category.json', function(data, err) {
                that.categories = data;
                var first = data[0].id;
                $.get('/src/json/menu-detail-' + first + ".json", function(data) {
                    $(".category-tab li[data-target=tc" + first + "]").addClass("active");
                })
            })
        },
        methods: {
            closeDrawer () {
                this.$emit('closeDrawer');
                this.isOpen = false;
            },
            loadDetail(id, dataUrl, event) {
                $(".category-tab>li").removeClass("active")
                $(event.srcElement).addClass("active");
                if (+id === 8142 || +id === 8141 || +id === 8143) {
                    this.detailView = "view" + id;
                } else {
                    this.detailView = "navCategoryItem";
                    this.menuJsonpUrl = dataUrl
                }
            }
        }
    }
</script>