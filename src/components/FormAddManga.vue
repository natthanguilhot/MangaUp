<template>
  <form id="myForm" class="border rounded-2xl w-11/12 lg:w-6/12 mx-auto my-4 p-4">
    <div>
      <label for="name">Nom</label>
      <input id="name" v-model="newManga.name" type="text" class="input"/>
    </div>
    <div>
      <label for="price">Prix</label>
      <input id="price" v-model="newManga.price" type="number" class="input"/>
    </div>
    <div>
      <label for="parution">Parution</label>
      <select id="parution" v-model="newManga.parution" class="input">
      <option value="En cours" selected>En cours</option>
      <option value="Terminée">Terminée</option>
      </select>
    </div>
    <div>
      <label for="lastReleased">Dernier volume</label>
      <input id="lastReleased" v-model="newManga.lastReleasedVolume" class="input" type="number"/>
    </div>
    <div>
      <label for="lastBought">Dernier acheté</label>
      <input id="lastBought" @keyup.enter="addManga(newManga)" v-model="newManga.lastBoughtVolume" class="input" type="number"/>
    </div>
    <button @click="addManga(newManga)" type="button" class=" text-black border p-4 bg-gray-200 rounded w-40">Ajouter</button>
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
        parution:'',
        lastReleasedVolume: null,
        lastBoughtVolume: null,
      }
    }
  },
  methods:{
    addManga(newManga){
      this.$store.commit('addMangaToList', newManga);
      this.newManga.name='test';
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

