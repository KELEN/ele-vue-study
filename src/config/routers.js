const Home = resolve => require(['../views/Home.vue'], resolve)

export default {
  routes: [
      {
          path: '/',
          redirect: '/home'
      },
      {
          path: '/home', component: Home
      },
  ]
}