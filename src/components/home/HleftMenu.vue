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
        position: relative;
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
        height: 100%;
        .category-tab {
            width: 24%;
            float: left;
            li {
                line-height: 50px;
                border-bottom: 1px solid #E1E1E1;
                text-align: center;
            }
        }
        .category-tab-content {
            width: 76%;
            float: left;
        }
    }
    .category-tab-content {
        display: none;
    }
    .active {
        display: block;
    }
</style>
<template>
    <transition name="drawer">
        <div v-show="isOpen" class="more-category-wrap">
            <aside id="sideMenu" class="side-menu">
                <h3 class="side-header">全部分类</h3>
                <div class="category-list">
                    <ul class="category-tab">
                        <li v-on:click="loadDetail(item.id, $event)" v-for="item in categories" :data-target="'tc' + item.id">
                            {{ item.name }}
                        </li>
                    </ul>
                    <ul class="category-tab-content">
                        <li v-for="item in categories" :id="'tc' + item.id">
                            <ul>
                                <li>2222</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>
            <div class="side-menu-overlay" v-on:click="closeDrawer()"></div>
        </div>
    </transition>
</template>
<script>
    export default {
        props: {
            open: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                categories: []
            }
        },
        computed: {
            isOpen: function () {
                return this.open;
            }
        },
        mounted () {
            let that = this;
            $.get('/src/json/menu-category.json', function(data, err) {
                that.categories = data;
                var first = data[0].id;
                $.get('/src/json/menu-detail-' + first + ".json", function(data) {
                    $(".category-tab-content[data-id='" + first + "']").addClass("active");
                })
            })
        },
        methods: {
            closeDrawer () {
                this.$emit('closeDrawer');
                this.isOpen = false;
            },
            loadDetail(id, event) {
                $(".category-tab li").removeClass("active");
                var clickTarget = $(event.srcElement)
                clickTarget.addClass("active");
                var target = clickTarget.attr("data-target");
                $.get("/src/json/menu-detail-" + id + ".json", function (data, err) {
                    $("#" + target).addClass("active");
                })
            }
        }
    }
</script>