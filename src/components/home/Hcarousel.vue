<style>
    .carousel { height: 200px; overflow: hidden; }
    .carousel-img img { max-width: 100%; width: 100%; }
</style>
<template>
    <mt-swipe class="carousel" :auto="3000">
      <mt-swipe-item class="carousel-img" v-for="item in carousel" :key="item.id">
          <img  :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
</template>
<script>
    import { mapGetters } from 'vuex'
    import { Swipe, SwipeItem } from 'mint-ui'
    export default {
        computed: mapGetters({
            carousel: 'carousels'
        }),
        created () {
            this.$store.dispatch('getCarousel')
        },
        component () {
            Swipe, SwipeItem
        }
    }
</script>