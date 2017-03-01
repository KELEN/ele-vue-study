<style>
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
    .kuwan-list {
        display: flex;
        flex-wrap: nowrap;
    }
    .kuwan-list .kuwan-item {
        flex: 1;
        -webkit-flex: 1;
        img {
            width: 100%;
            max-width: 100%;
        }
    }
</style>
<template>
    <div class="plate-wrapper">
        <div class="banner-title">- <img class="logo" :src="kuwan.bannerLogo" alt=""> {{ kuwan.bannerTitle }} -</div>
        <ul class="kuwan-list">
            <li class="kuwan-item" v-for="item in kuwan.items">
                <img :src="item.img" alt="" width="90%">
            </li>
        </ul>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: mapGetters ({
            kuwan: 'kuwan'
        }),
        created () {
            this.$store.dispatch('getKuwan')
        }
    }
</script>