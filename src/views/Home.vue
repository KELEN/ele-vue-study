<template>
    <div>
        <hcarousel></hcarousel>
        <hmenu></hmenu>
        <footer-banner></footer-banner>
    </div>
</template>

<script>
    import Hmenu from '../components/home/Hmenu.vue'
    import Hcarousel from '../components/home/Hcarousel.vue'
    import FooterBanner from '../components/footer/FooterBanner.vue'
    export default {
        data: function () {
            return  {
                a: 1
            }
        },
        components: {
            Hcarousel,
            FooterBanner,
            Hmenu
        }
    }
</script>
