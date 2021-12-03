<template>
  <form id="myForm" class="border w-11/12 lg:w-6/12 mx-auto my-4 p-4">
    <div class="flex justify-center items-center">
      <label for="name" class="border-b p-1 w-40">Nom</label>
      <input id="name" v-model="newManga.name" type="text" class="input dark:text-black" placeholder="Naruto"/>
    </div>
    <div class="flex justify-center items-center">
      <label for="price" class="border-b p-1 w-40">Prix</label>
      <input id="price" v-model="newManga.price" type="number" class="input dark:text-black" placeholder="6.85" step="0.05"/>
    </div>
    <div class="flex justify-center items-center">
      <label for="parution" class="border-b p-1 w-40">Parution</label>
      <select id="parution" v-model="newManga.parution" class="input dark:text-black">
      <option value="En cours" selected>En cours</option>
      <option value="Terminée">Terminée</option>
      </select>
    </div>
    <div class="flex justify-center items-center">
      <label for="lastReleased" class="border-b p-1 w-40">Dernier volume</label>
      <input id="lastReleased" v-model="newManga.lastReleasedVolume" class="input dark:text-black" type="number" placeholder="72"/>
    </div>
    <div class="flex justify-center items-center">
      <label for="lastBought" class="border-b p-1 w-40">Dernier acheté</label>
      <input id="lastBought" v-model="newManga.lastBoughtVolume" class="input dark:text-black" type="number" placeholder="65"/>
    </div>
    <div class="flex justify-center items-center">
      <label for="lastRead" class="border-b p-1 w-40">Dernier lu</label>
      <input id="lastRead" @keyup.enter="addManga(newManga)" v-model="newManga.lastRead" class="input dark:text-black" type="number" placeholder="53"/>
    </div>
    <button @click="addManga(newManga)" type="button" class=" text-black border px-4 py-2 m-4 mt-8 bg-gray-200 rounded w-40">Ajouter</button>
  </form>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'FormAddManga',
  components: {
  },
  data(){
    return{
      newManga:{
        name:'',
        price:null,
        parution:'En cours',
        lastReleasedVolume: null,
        lastBoughtVolume: null,
        lastRead: null,
      }
    }
  },
  methods:{
    addManga(newManga){
      this.$store.commit('addMangaToList', newManga);
      this.newManga.name='';
      this.newManga.price = null;
      this.newManga.parution = 'En cours';
      this.newManga.lastReleasedVolume = null;
      this.newManga.lastBoughtVolume = null;
      this.newManga.lastRead = null;
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  outline: none;
}
.input {
  @apply border rounded m-1 p-1 w-60;
}
</style>

