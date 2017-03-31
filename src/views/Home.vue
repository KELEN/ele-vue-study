<template>
    <div class="home-container">
        <hsearch-banner></hsearch-banner>
        <hcarousel></hcarousel>
        <hmenu></hmenu>
        <!-- 必抢 -->
        <hmust-get></hmust-get>
        <hkuwan></hkuwan>
    </div>
</template>

<script>
    import HsearchBanner from '../components/home/HsearchBanner.vue'
    import Hcarousel from '../components/home/Hcarousel.vue'
    import Hmenu from '../components/home/Hmenu.vue'
    import HmustGet from '../components/home/HmustGet.vue'
    import Hkuwan from '../components/home/Hkuwan.vue'
    import FooterBanner from '../components/footer/FooterBanner.vue'

    export default {
        data: function () {
            return  {
                a: 1
            }
        },
        components: {
            HsearchBanner,
            Hcarousel,
            HmustGet,
            Hkuwan,
            FooterBanner,
            Hmenu
        },
        mounted: function () {
            setTimeout(function() {
                document.querySelector(".loading").style.opacity = 0;
                document.querySelector(".loading").style.display = "none";
            }, 2000)
        }
    }
</script>
