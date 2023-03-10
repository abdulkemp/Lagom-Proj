<template>
  <router-view/>
</template>

<script>
import Footer from './components/Footer.vue'
export default {
  name : 'App',
  component: {Footer}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  /* text-align: center; */
  /* color: #2c3e50; */
}


</style>
