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
    }
</style>
<template>
    <div v-show="isOpen" class="more-category-wrap">
        <aside id="sideMenu" class="side-menu">
            <h3>title</h3>
        </aside>
        <div class="side-menu-overlay" v-on:click="closeDrawer()"></div>
    </div>
</template>
<script>
    export default {
        props: {
            open: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                isOpen: this.open
            }
        },
        watch: {
            isOpen: function (newVal) {
                console.log(newVal);
            }
        },
        mounted () {},
        methods: {
            closeDrawer () {
                var $sideMenu = $("#sideMenu");
                $sideMenu.css({
                    transform: "translateX(-100%)"
                })
                this.isOpen = false;
            }
        }
    }
</script>