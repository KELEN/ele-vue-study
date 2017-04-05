<style scoped>
    .search-banner {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 50px;
        z-index: 9999;
        display: flex;
        transition: background ease 0.5s;
        background: -webkit-linear-gradient(top,rgba(0,0,0,.7),rgba(0,0,0,0));
    }
    .category-btn {
        height: 45px;
        width: 25px;
        margin-left: 18px;
        text-indent: -1000em;
        background: url("data:image/png;base64,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") no-repeat 2px 6px;
        background-size: 282px 31px;
        display: inline-block;
        text-indent: -1000em;
    }
    .search-input {
        background: white;
        margin: 6px 18px 0;
        height: 34px;
        opacity: 0.9;
        flex: 1;
        position: relative;
        border-radius: 4px;
    }
    .place-holder {
        position: absolute;
        left: 8px;
        top: 10px;
        font-size: 14px;
        color: #555;
    }
    .login-btn {
        position: relative;
        top: 15px;
        right: 8px;
        bottom: 0;
        height: 14px;
        line-height: 14px;
        font-size: 12px;
        color: white;
    }
</style>
<template>
    <div class="search-banner">
        <hleft-menu :open="openDrawer" v-on:closeDrawer="closeDrawer"></hleft-menu>
        <a class="category-btn" v-on:click="openCategory()">更多分类</a>
        <div class="search-input">
            <span class="place-holder">搜索商品/店铺</span>
        </div>
        <router-link class="login-btn" to="/login" v-if="!userInfo.userId">登录</router-link>
        <span v-if="userInfo.userId" class="login-btn">Hello, {{ userInfo.name }}, <a v-on:click="loginOut()">退出</a></span>
    </div>
</template>
<script>
    import HleftMenu from './HleftMenu.vue'
    import { mapGetters } from 'vuex'

    export default {
        created (){
            window.addEventListener("scroll", this.handlerScroll)
        },
        computed: mapGetters({
            userInfo: "userInfo"
        }),
        data() {
            return {
                openDrawer: false
            }
        },
        methods: {
            handlerScroll () {
                if (window.scrollY > 60) {
                    document.querySelector(".search-banner").style.background = "red";
                } else {
                    document.querySelector(".search-banner").style.background = "-webkit-linear-gradient(top,rgba(0,0,0,.7),rgba(0,0,0,0))";
                }
            },
            openCategory () {
                this.openDrawer = true;
            },
            closeDrawer() {
                this.openDrawer = false;
            },
            loginOut() {
                this.$store.dispatch("logout");
            }
        },
        components: {
            HleftMenu
        },
        mounted() {}
    }
</script>