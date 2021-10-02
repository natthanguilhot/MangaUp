<template>
  <form id="myForm" class="lg:flex lg:justify-center lg:items-center">
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
      <select id="parution" v-model="newManga.parution">
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
        <tr v-for="manga in $store.state.listManga" :key="manga.id">
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
