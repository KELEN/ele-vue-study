<style>
    .carousel-img { overflow: hidden; }
</style>
<template>
    <el-carousel class="carousel" height="150px">
        <el-carousel-item v-for="item in carousel" :key="item.id">
            <img width="100%" :src="item.img" alt="">
        </el-carousel-item>
    </el-carousel>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: mapGetters({
            carousel: 'carousels'
        }),
        created () {
            this.$store.dispatch('getCarousel')
        }
    }
</script>