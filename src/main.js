import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import routerConfig from './config/routers'
import App from './App.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter(routerConfig)

new Vue({
  router: router,
  render: h => h(App),
}).$mount("#app")
