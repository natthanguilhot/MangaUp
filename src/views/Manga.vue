<template>
  <div class="min-h-screen bg-white text-black dark:bg-gray-700 dark:text-white relative transition-all duration-300">
    <TheDarkModeSwitcher />
    <div class="m-auto w-auto flex justify-center items-center">
      <button @click="formAddManga = !formAddManga" aria-label="Ajouter un manga" class="p-4 border-4 hover:shadow-md m-4 rounded-full w-12 h-12 flex justify-center items-center text-4xl active:scale-90 transform duration-75">
        <span v-if="formAddManga == false">+</span>
        <span v-else>-</span>
      </button>
    </div>
    <FormAddManga v-show="formAddManga"/>
    <TheMangaArray />
  </div>
</template>

<script>

import store from "@/store/index.js";
// @ is an alias to /src
import FormAddManga from "../components/FormAddManga";
import TheDarkModeSwitcher from "../components/TheDarkModeSwitcher";
import TheMangaArray from "../components/TheMangaArray";

export default {
  name: 'Home',
  data(){
    return {
      formAddManga:false,
    }
  },
  components: {
    FormAddManga,
    TheMangaArray,
    TheDarkModeSwitcher,
  },
  methods:{
    init(){
      let LS = localStorage.getItem('MangaUp');
      store.state.listManga = JSON.parse(LS) || [];
    },
  },
  mounted(){
    this.init();
  }
}
</script>
<style lang="scss">
tbody > tr:last-child > th:first-child {
  border-bottom-left-radius: 0.5rem;
}
tbody > tr:last-child > th:nth-last-child(2) {
  border-bottom-right-radius: 0.5rem;
}
table{
  border-spacing: 0px;
}
thead > tr:last-child > th:first-child {
  border-top-left-radius: 0.5rem;
}
thead > tr:last-child > th:nth-last-child(2) {
  border-top-right-radius: 0.5rem;
}
 
</style>