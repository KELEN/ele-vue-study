const App = r => require.ensure([], () => r(require('../App.vue')), 'App')
const Home = resolve => require(['../views/Home.vue'], resolve)
const Jhs = resolve => require(['../views/Jhs.vue'], resolve)
const Login = resolve => require(['../views/Login.vue'], resolve)
// const Login = r => require.ensure([], () => r(require('../views/Login.vue')), 'Login')

export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home', component: Home
    },
    {
        path: '/jhs', component: Jhs
    },
    {
        path: '/login', component: Login
    }
]
