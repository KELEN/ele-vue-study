<style lang="less" scope>
    .home-menu {
        overflow: hidden;
        padding: 10px;
    }
    .home-menu-item {
        width: 20%;
        float: left;
        text-align: center;
        list-style: none;
        font-size: 12px;
    a {
        color: black;
    }
    }
    .home-menu-item img {
        max-width: 60%;
        margin: 8px auto;
    }
</style>
<template>
    <ul class="home-menu">
        <li class="home-menu-item" v-for="menu in menus" :key="menu.id">
            <div><img :src="menu.logo" alt=""></div>
            <router-link :to="menu.link" class="grid-content bg-purple">{{ menu.title }}</router-link>
        </li>
    </ul>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        computed: mapGetters({
            menus: 'menus'
        }),
        created () {
            this.$store.dispatch('getMenus')
        }
    }
</script>