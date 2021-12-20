<template>
  <div id="appVue" class="transition-all duration-300 min-h-screen bg-gradient-to-bl from-cyan-400 via-green-200 to-purple-400">
    <TheHeader />
    <router-view v-slot="{Component}">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </div>
</template>
<script>
import TheHeader from "@/components/TheHeader";


export default {
  components:{
    TheHeader,
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
html {
  @apply bg-gradient-to-bl from-violet-900 to-fuchsia-900;
}
</style>
