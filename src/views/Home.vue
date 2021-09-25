<template>
  <form id="myForm" class="lg:flex lg:justify-center lg:items-center">
    <div>
      <label>Nom</label>
      <input v-model="newManga.name" type="text" class="input"/>
    </div>
    <div>
      <label>Prix</label>
      <input v-model="newManga.price" type="number" class="input"/>
    </div>
    <div>
      <label>Parution</label>
      <select v-model="newManga.parution" class="input">
        <option value="En cours" selected>En cours</option>
        <option value="Terminée">Terminée</option>
      </select>
    </div>
    <div>
      <label>Dernier volume</label>
      <input v-model="newManga.lastReleasedVolume" class="input"/>
    </div>
    <div>
      <label>Dernier acheté</label>
      <input v-model="newManga.lastBoughtVolume" class="input"/>
    </div>
    <button @click="addManga(newManga)" type="button" class=" text-black border p-4 bg-gray-200 rounded">ajout</button>
  </form>
  <div class="flex justify-center items-center">
    <table>
      <thead class="border">
        <tr>
          <th>Nom</th>
          <th>Prix</th>
          <th>Parution</th>
          <th>Tomes Sortis</th>
          <th>Tomes Achetés</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="manga in $store.state.listManga">
          <th class="w-36">{{ manga.name }}</th>
          <th class="w-36">{{ manga.price }}</th>
          <th class="w-36 parution">{{ manga.parution }}</th>
          <th class="w-36">{{ manga.lastReleasedVolume }}</th>
          <th class="w-36">{{ manga.lastBoughtVolume }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
      newManga:{
        name:'',
        price:null,
        parution:true,
        lastReleasedVolume: null,
        lastBoughtVolume: null,
      }
    }
  },
  methods:{
    addManga(newManga){
      this.$store.commit('addMangaToList', newManga);
      this.newManga.property = null;
    }
  }
}
</script>

<style lang="scss">
// th {
//   border: 1px black solid;
// }
thead {
  border: 3px black solid;
}
input {
  outline: none;
}
tbody tr {
  &:hover {
    background-color: rgb(199, 199, 199);
  }
}
.input {
  @apply border rounded m-1 p-1;
}
tbody th {
  @apply border;
}
</style>
