<style>
    .carousel { height: 200px; overflow: hidden; position: relative;}
    .carousel-img img { max-width: 100%; width: 100%; }
</style>
<template>
    <swiper class="carousel" :options="swiperOption">
        <swiper-slide class="carousel-img" v-for="ca in carousel" :key="ca.id">
            <img :src="ca.img"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
    import { mapGetters } from 'vuex'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        data() {
           return {
               swiperOption: {
                 autoplay: 3500,
                 setWrapperSize :true,
                 pagination : '.swiper-pagination',
                 paginationClickable :true,
                 mousewheelControl : true,
                 observeParents:true,
               },
               swiperSlides: [1, 2, 3, 4, 5]
             }
        },
        created () {
            this.$store.dispatch('getCarousel')
        },
        components: {
            swiper, swiperSlide
        },
        computed: mapGetters({
            carousel: 'carousels'
        }),
        mounted() {
        }
    }
</script>