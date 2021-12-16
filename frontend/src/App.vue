<!-- fichier central de l'application Vue -->
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

<style>
body {
  background: linear-gradient(90deg, rgba(19,37,67,1) 0%, rgba(10,81,166,1) 100%);
}
</style>
