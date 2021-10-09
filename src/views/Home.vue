<template>
  <FormAddManga />
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
          <th class="w-36">{{ priceFormat(manga.price) }}</th>
          <th class="w-36">{{ manga.parution }}</th>
          <th class="w-36">{{ manga.lastReleasedVolume }}</th>
          <th class="w-36">{{ manga.lastBoughtVolume }}</th>
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
