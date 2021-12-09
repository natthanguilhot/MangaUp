<template>
  <div class="MangaDetails my-4 flex flex-col justify-center items-center">
    <div class="flex">
      <button @click="$router.back()" class="flex justify-center items-center"><i class="fas fa-arrow-left"></i></button>
      <h2 class="font-bold text-xl m-4">{{ manga.name }}</h2>
    </div>
    <div>Parution : <span class="font-bold">{{ manga.parution }}</span></div>
    <table class="m-4 border-separate">
      <thead class="">
        <tr class="font-bold">
          <th class="border w-36 rounded-tl-lg">Tomes sortis</th>
          <th class="border w-36">Prix</th>
          <th class="border w-36">Tomes Achetés {{ manga.lastBoughtVolume }}</th>
          <th class="border w-36 rounded-tr-lg">Tomes Lus {{ manga.lastRead }}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tome, index) in manga.tomes" :key="index" :data-set="index" class="hover:bg-gray-400 dark:hover:bg-gray-900">
          <th class="w-36 border p-1">{{ index+1 }}</th>
          <th class="w-36 border p-1">{{ priceFormat(manga.price) }}</th>
          <th class="w-36 border p-1"><input @change="updateTomeBought(this.manga.id)" :id="'tomeBought'+tome.number" :name="'tomeBought'+tome.number" type="checkbox" v-model="tome.bought"/></th>
          <th class="w-36 border p-1"><input @change="updateTomeRead(this.manga.id)" :id="'tomeRead'+tome.number" name="'tomeRead'+tome.number" type="checkbox" v-model="tome.read"/></th>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>{{ manga.name }}</th>
          <th>{{totalReleased()}}</th>
          <th>{{totalBought()}}</th>
          <th>{{totalRead()}}</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
import store from "@/store/index.js";

export default {
  name: "MangaDetails",
  data(){
    return {
      manga: null,
    }
  },
  methods:{
    updateTomeBought(idManga){
      store.commit('updateTomeBought', idManga);
    },
    updateTomeRead(idManga){
      store.commit('updateTomeRead', idManga)
    },
    mangaFinder(){
      this.manga = store.state.listManga.find(
        (manga) => manga.id == this.$route.params.id
      );
    },
    totalReleased(){
      return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(this.manga.price * this.manga.lastReleasedVolume);
    },
    totalBought(){
      let totalBought = 0;
      for(let tome of this.manga.tomes){
        if (tome.bought === true){
          totalBought = totalBought + this.manga.price;
        }
      }
      return Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(totalBought);
    },
    totalRead(){
      let totalRead = 0;
      for(let tome of this.manga.tomes){
        if (tome.read === true){
          totalRead++;
        }
      }
      return totalRead;
    },
    priceFormat(prix){
      return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(prix);
    },
  },
  created(){
    this.mangaFinder();
  }
}
</script>