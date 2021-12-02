<template>
  <div class="m-auto w-auto flex justify-center items-center">
    <button @click="formAddManga = !formAddManga" class="p-4 border hover:shadow-md m-4 rounded-full w-10 h-10 flex justify-center items-center text-2xl">
      <span v-if="formAddManga == false">+</span>
      <span v-else>-</span>
    </button>
  </div>
  <FormAddManga v-show="formAddManga"/>
  <div class="flex justify-center items-center">
    <table class="">
      <thead class="">
        <tr class="font-bold">
          <th class="border">Nom</th>
          <th class="border">Prix</th>
          <th class="border">Parution</th>
          <th class="border">Tomes Sortis</th>
          <th class="border">Tomes Achetés</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="manga in $store.state.listManga" :key="manga.id" class="hover:bg-gray-400 dark:hover:bg-gray-900 h-12">
          <th class="w-36 border">{{ manga.name }}</th>
          <th class="w-36 border">{{ priceFormat(manga.price) }}</th>
          <th class="w-36 border">{{ manga.parution }}</th>
          <th class="w-36 border">{{ manga.lastReleasedVolume }}</th>
          <th class="w-36 border">{{ manga.lastBoughtVolume }}</th>
          <th><router-link :to="{name: 'MangaDetails', params:{id: manga.id, name: manga.name}}" class="text-black bg-white p-1 m-1 border border-black rounded-md hover:text-white hover:bg-black dark:bg-white dark:hover:bg-black group">
            <i class="fas fa-pencil-alt group-hover:text-white"></i>
          </router-link></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import FormAddManga from "../components/FormAddManga";


export default {
  name: 'Home',
  data(){
    return {
      formAddManga:false,
    }
  },
  components: {
    FormAddManga,
  },
  methods:{
    priceFormat(prix){
      return prix = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(prix);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
