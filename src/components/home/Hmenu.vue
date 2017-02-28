<style>
    .home-menu {
        overflow: hidden;
        padding: 0;
    }
    .home-menu-item {
        width: 20%;
        float: left;
        text-align: center;
        list-style: none;
        font-size: 12px;
    }
    .home-menu-item img {
        max-width: 80%;
        margin: 4px auto;
    }
</style>
<template>
    <ul class="home-menu">
        <li class="home-menu-item" v-for="menu in menus" :key="menu.id">
            <div><img :src="menu.logo" alt=""></div>
            <a class="grid-content bg-purple">{{ menu.title }}</a>
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