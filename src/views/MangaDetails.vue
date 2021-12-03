<template>
  <div class="MangaDetails my-4 flex flex-col justify-center items-center">
    <div class="flex">
      <button @click="$router.back()" class="flex justify-center items-center"><i class="fas fa-arrow-left"></i></button>
      <h2 class="font-bold text-xl m-4">{{ manga.name }}</h2>
    </div>
    <table class="m-4">
      <thead class="">
        <tr class="font-bold">
          <th class="border w-36">Tomes sortis</th>
          <th class="border w-36">Prix</th>
          <th class="border w-36">Tomes Achetés</th>
          <th class="border w-36">Tomes Lus</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tome in manga.tomes" :key="tome.id" class="hover:bg-gray-400 dark:hover:bg-gray-900">
          <th class="w-36 border p-1">{{ tome.number }}</th>
          <th class="w-36 border p-1">{{ priceFormat(manga.price) }}</th>
          <th class="w-36 border p-1"><label :for="'tomeBought'+tome.number" class="w-36 h-full block"><input :id="'tomeBought'+tome.number" :name="'tomeBought'+tome.number" type="checkbox" v-model="tome.bought"/></label></th>
          <th class="w-36 border p-1"><label :for="'tomeRead'+tome.number" class="w-36 h-full block"><input :id="'tomeRead'+tome.number" name="'tomeRead'+tome.number" type="checkbox" v-model="tome.read"/></label></th>
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
          totalBought++;
        }
      }
      return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(totalBought * this.manga.price);
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