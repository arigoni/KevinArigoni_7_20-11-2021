<script>
import NavLink from "./components/NavLink";

export default {
  name: "App",
  components: {
    NavLink
  }
}
</script>

<template>
  <div id="app">
    <NavLink></NavLink>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
body {
    background: rgb(61,71,190);
    background: linear-gradient(90deg, rgba(61,71,190,1) 0%, rgba(10,81,166,1) 100%);
  }
</style>
