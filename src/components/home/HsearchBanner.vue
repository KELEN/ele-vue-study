<style>
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
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjQAAAA+CAMAAAALUXF+AAABU1BM…07HRvLd+eWHafbW4jR8P+on+owf4hHA3jaBhjjDHGGHPmJzMczejSVfABAAAAAElFTkSuQmCC') no-repeat 2px 6px;
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
        <hleft-menu></hleft-menu>
        <a class="category-btn">更多分类</a>
        <div class="search-input">
            <span class="place-holder">搜索商品/店铺</span>
        </div>
        <a class="login-btn">登录</a>
    </div>
</template>
<script>
    import HleftMenu from './HleftMenu.vue'
    export default {
        created (){
            window.addEventListener("scroll", this.handlerScroll)
        },
        methods: {
            handlerScroll () {
                if (window.scrollY > 60) {
                    console.log("change");
                    document.querySelector(".search-banner").style.background = "red";
                } else {
                    document.querySelector(".search-banner").style.background = "-webkit-linear-gradient(top,rgba(0,0,0,.7),rgba(0,0,0,0))";
                }
            }
        },
        components: {
            HleftMenu
        }
    }
</script>