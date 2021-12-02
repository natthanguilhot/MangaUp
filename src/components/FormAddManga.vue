<template>
  <form id="myForm" class="border w-11/12 lg:w-6/12 mx-auto my-4 p-4">
    <div class="flex justify-center items-center">
      <label for="name" class="border-b p-1 w-40">Nom</label>
      <input id="name" v-model="newManga.name" type="text" class="input dark:text-black"/>
    </div>
    <div class="flex justify-center items-center">
      <label for="price" class="border-b p-1 w-40">Prix</label>
      <input id="price" v-model="newManga.price" type="number" class="input dark:text-black"/>
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
      <input id="lastReleased" v-model="newManga.lastReleasedVolume" class="input dark:text-black" type="number"/>
    </div>
    <div class="flex justify-center items-center">
      <label for="lastBought" class="border-b p-1 w-40">Dernier acheté</label>
      <input id="lastBought" @keyup.enter="addManga(newManga)" v-model="newManga.lastBoughtVolume" class="input dark:text-black" type="number"/>
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

