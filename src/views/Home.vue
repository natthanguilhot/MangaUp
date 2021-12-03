<template>
  <div class="m-auto w-auto flex justify-center items-center">
    <button @click="formAddManga = !formAddManga" class="p-4 border-4 hover:shadow-md m-4 rounded-full w-12 h-12 flex justify-center items-center text-4xl active:scale-90 transform duration-75">
      <span v-if="formAddManga == false">+</span>
      <span v-else>-</span>
    </button>
  </div>
  <FormAddManga v-show="formAddManga"/>
  <TheMangaArray />
</template>

<script>
// @ is an alias to /src
import FormAddManga from "../components/FormAddManga";
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
  },
}
</script>