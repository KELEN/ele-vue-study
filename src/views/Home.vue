<template>
    <h1>
        Home 3
        <footer-banner></footer-banner>
    </h1>
</template>

<script>
    import FooterBanner from '../components/footer/FooterBanner.vue'
    export default {
        data: function () {
            return  {
                a: 1
            }
        },
        components: {
            FooterBanner
        }
    }
</script>
