<template>
    <div>
        <h3>{{ userInfo }}</h3>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    import { GET_USERINFO } from '../store/mutations-types'
    export default {
        data: function () {
            return {
                a: 1
            }
        },
        created () {
            this.$store.dispatch(GET_USERINFO)
        },
        computed: mapGetters({
            userInfo: 'userInfo'
        }),
    }
</script>