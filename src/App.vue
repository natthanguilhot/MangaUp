<template>
  <div id="appVue" class="dark:bg-gray-700 transition-colors duration-300 dark:text-white h-screen">
    <TheDarkModeSwitcher />
    <router-link to="/" class=""><h1 class="text-4xl font-bold p-4">MangaUp</h1></router-link>
    <router-view/>
  </div>
</template>
<script>
import TheDarkModeSwitcher from "@/components/TheDarkModeSwitcher";

export default {
  components:{
    TheDarkModeSwitcher,
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
