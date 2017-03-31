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
        padding-left: 8px;
        border: 1px solid #E1E1E1;
    }
</style>
<template>
    <transition name="drawer">
        <div v-show="isOpen" class="more-category-wrap">
            <aside id="sideMenu" class="side-menu">
                <h3 class="side-header">全部分类</h3>
                <div class="category-wrap">
                    <ul>
                        <li v-for="item in categories">
                            {{ item.name }}
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
                that.categories = data.data;
            })
        },
        methods: {
            closeDrawer () {
                this.$emit('closeDrawer');
                this.isOpen = false;
            }
        }
    }
</script>