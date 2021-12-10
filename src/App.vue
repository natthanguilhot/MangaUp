<template>
  <div id="appVue" class="dark:bg-gray-700 transition-colors duration-300 dark:text-white min-h-screen">
    <TheDarkModeSwitcher />
    <header class="w-60 mx-auto">
      <router-link to="/" class=""><h1 class="text-4xl font-bold p-4"><img src="./assets/MangaUp_logo.png" alt="MangaUp"/></h1></router-link>
    </header>
    <router-view v-slot="{Component}">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
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
  font-family: "Montserrat", "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  z-index: 1;
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
.slide-enter-active {
  transition: opacity 0.3s, transform 0.3s;
}
.slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.slide-enter-from {
  opacity: 0;
  transform: translateX(10%);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-10%);
}
</style>
