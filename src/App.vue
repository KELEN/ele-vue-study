<template>
  <div id="app">
      <transition>
        <router-view></router-view>
      </transition>
      <ul>
          <li><router-link to="/home">home</router-link></li>
      </ul>
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

