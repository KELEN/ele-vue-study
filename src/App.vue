<style scope>
    .loading {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: #eee;
        z-index: 99999;
        animation: opacity 1s ease;
    }
    .logo-loading {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 30px;
        height: 21px;
        margin-top: -10px;
        margin-left: -15px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAHICAMAAAAlVnn7AAAATlBMVEUAAADdJyfdJyfdJyfdJyfdJyfdJyfdJyfdJyfdJyfdJyfdJyfdJyfdJyfdJyfdJyfdJyfdJyfdJyfdJyfdJyfdJyfdJyfdJyfdJyfdJydorXnTAAAAGXRSTlMA7luml0ESIdAHa2OA98EuA8aNNdy9TeDe9sbavAAAAppJREFUeNrtm9tS6kAQRTs3ksmdCOj+/x89sq1yiCVCGk8JYa+3URYZeCCLrsGOpHm1b0u7krLdV3lqH4QMJL/OzUGywFWGpB6K7H19jXt8XDHUCTLuGQl3XHB92U0K7j3Bced7NEZeOuSX99y9GGmwNyuRBPvggEt2Chzsg5CgtPRksw3/d54CqE9eQGr5ydpaoPjRbeOqRm797OETkP6w52n2VL3tUNoJ7dnXnfO6kRI7S7CxU5oO2+aby27Rzf+8QWLAaDOGCujbojx9zrYHqsFmjIAB9oXQ7HDEIsCuCfaFKM8Yi6l/TSwyFaPZWfkykiVLlnyPMj+3PQR0VmHwyQMq3ug88EaXoho97lghNdti8sgTtseaALZpGZaIoUy3wAtbpIKD6t0ldfbWYQHdW1bbM7Oseje1t3rJwVu9xFe9xFm9xFm9xFu9vIq3eg9m/uqd7AGq95OyWFi9c5ZX7yevvapXsmTJa5RVvareNaNZr2a9vzzrjXirl3irl3irl/irN8qXkfwL8qNmhWTJdyyrelW9a0bVq+p9uBMOmvVKliz5/8tjQ9lJeMivg3Fa4YLV68VdvYTV6yO4q3dj5q/efhxvqN5B1avqVfWqelW9kiVLlqxZ76pmvRZZPuu1iKpX1avqVfWqeiVLlixZ1Xsv1WuR5SccLKJZr6pX1avqVfVKlixZ8iqr126o3p3dUL2tEV/1BvukX36uN5LrhIOqV9Wr6lX1Sj4vP96RS8lPI6t6n3bWq1+zfYOq9y+ql7irl3irl3irl3irl3irl3irl3irl3irl1xRvbpLSpYseXWyqlfVu2ZSvnPe6k2N+Kq3NOKuXuKuXuKe9RL3rJd4Z70k+Ge9NmSa9WrWK1myZMmq3uet3n9e9UhllKazwQAAAABJRU5ErkJggg==);
        background-size: 100% auto;
        animation: logoLoading 1s ease infinite;
    }
    .logo-loading:after {
        content: "加载中...";
        position: absolute;
        bottom: -10px;
        width: 80px;
        font-size: 12px;
        left: -2px;
        bottom: -18px;
    }
    @keyframes logoLoading {
        0%,10%{background-position-y:0}
        10.01%,20%{background-position-y:-23px}
        20.01%,30%{background-position-y:-46px}
        30.01%,40%{background-position-y:-69px}
        40.01%,50%{background-position-y:-92px}
        50.01%,60%{background-position-y:-115px}
        60.01%,70%{background-position-y:-138px}
        70.01%,80%{background-position-y:-161px}
        80.01%,90%{background-position-y:-184px}
        90.01%,100%{background-position-y:-207px}
    }
</style>
<template>
    <div id="app">
        <transition>
            <router-view></router-view>
        </transition>
        <!--<ul>
             <li><router-link to="/jhs">home</router-link></li>
        </ul>-->
        <div class="loading">
            <div class="logo-loading"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

