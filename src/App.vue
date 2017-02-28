<template>
  <div id="app">
     <h3>{{ msg }}</h3>
     <p>
        <router-link to="/home">home</router-link>
      </p>
      <transition>
        <router-view></router-view>
      </transition>
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

