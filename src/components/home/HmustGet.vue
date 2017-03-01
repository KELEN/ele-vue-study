<style scoped>
    .plate-wrapper:after {
        content: '';
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
    .banner-title {
        height: 34px;
        color: red;
        line-height: 40px;
        text-align: center;
        background-color: #F0F0F0;
    }
    .banner-title>.logo {
        width: 15px;
    }
    .must-get-list {
        margin: 0;
        padding: 0;
    }
    .getlist-item {
        float: left;
        width: 25%;
        box-sizing: border-box;
        padding: 8px;
        text-align: center;
    }
    .getlist-title {
        font-size: 12px;
        margin: 8px 0;
    }
    .old-price {
        color: #9b9b9b;
        font-size: 14px;
        line-height: 14px;
        text-decoration: line-through;
        margin-right: 8px;
    }
    .new-price {
        color: #ff2621;
        font-size: 14px;
        line-height: 14px;
    }
</style>
<template>
    <div class="plate-wrapper">
        <div class="banner-title">- <img class="logo" :src="mustGetList.bannerLogo" alt=""> {{ mustGetList.bannerTitle }} -</div>
        <ul class="must-get-list">
            <li class="getlist-item" v-for="item in mustGetList.items">
                <div class="getlist-title"> {{ item.title }}</div>
                <img :src="item.img" alt="" width="90%">
                <div><span class="new-price">￥{{ item.newPrice }}</span><span class="old-price">￥{{ item.oldPrice }}</span></div>
            </li>
        </ul>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: mapGetters({
            mustGetList: 'mustGetList'
        }),
        created() {
            this.$store.dispatch('GetMustGetList')
        }
    }
</script>