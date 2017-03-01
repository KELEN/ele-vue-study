import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './config/routers'
import App from './App.vue'
import store from './store'
import Mint from 'mint-ui';
import { Lazyload } from 'mint-ui';

Vue.use(Mint)
Vue.use(VueRouter)
Vue.use(Lazyload);

const router = new VueRouter(routerConfig)

new Vue({
  router: router,
    store,
  render: h => h(App),
}).$mount("#app")
