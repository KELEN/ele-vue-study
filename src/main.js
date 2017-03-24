import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './config/routers'
import App from './App.vue'
import store from './store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app")
