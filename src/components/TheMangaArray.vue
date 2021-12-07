<template>
    <div class="flex justify-center items-center">
        <table class="">
            <thead class="">
                <tr class="font-bold">
                    <th class="w-36 border">Nom</th>
                    <th class="w-36 border">Prix</th>
                    <th class="w-36 border">Parution</th>
                    <th class="w-36 border">Tomes Sortis</th>
                    <th class="w-36 border">Tomes Achetés</th>
                    <th class="w-36 border">Tomes Lus</th>
                    <th></th>
                </tr>
            </thead>
            <tbody v-if="$store.state.listManga.length > 0">
                <tr v-for="(manga, index) in $store.state.listManga" :key="manga.id" class="hover:bg-gray-400 h-12">
                    <th class="w-36 border">{{ manga.name }}</th>
                    <th class="w-36 border">{{ priceFormat(manga.price) }}</th>
                    <th class="w-36 border">{{ manga.parution }}</th>
                    <th class="w-36 border relative">
                        <button type="button" @click="addTomeReleased(index)" class="btnPlus hover:!text-white hover:!bg-black dark:hover:!bg-white dark:hover:!text-gray-900">+</button>
                        {{ manga.tomes.length }}
                        <button type="button" class="btnMinus hover:!text-white hover:!bg-black dark:hover:!bg-white dark:hover:!text-gray-900">-</button>
                    </th>
                    <th class="w-36 border relative">
                        <button type="button" @click="addTomeBought(index)" class="btnPlus hover:!text-white hover:!bg-black dark:hover:!bg-white dark:hover:!text-gray-900">+</button>
                        {{ totalTomeBought(manga.tomes) }}
                        <button type="button" class="btnMinus hover:!text-white hover:!bg-black dark:hover:!bg-white dark:hover:!text-gray-900">-</button>
                    </th>
                    <th class="w-36 border relative">
                        <button type="button" @click="addTomeRead(index)" class="btnPlus hover:!text-white hover:!bg-black dark:hover:!bg-white dark:hover:!text-gray-900">+</button>
                        {{ totalTomeRead(manga.tomes) }}
                        <button type="button" class="btnMinus hover:!text-white hover:!bg-black dark:hover:!bg-white dark:hover:!text-gray-900">-</button>
                    </th>
                    <th>
                        <router-link :to="{name: 'MangaDetails', params:{id: manga.id, name: manga.name}}" aria-label="Consulter les tomes" class="w-8 h-8 flex justify-center items-center text-black bg-white p-1 m-1 border border-black rounded-full hover:text-white hover:bg-black dark:bg-white dark:hover:bg-black group">
                        <i class="fas fa-search-plus group-hover:text-white"></i>
                        </router-link>
                    </th>
                    <th>
                        <button type="button" @click="deleteManga(index)" aria-label="Supprimer un manga" class="w-8 h-8 flex justify-center items-center text-red-500 bg-white p-1 m-1 border border-black rounded-full hover:bg-black dark:bg-white dark:hover:bg-black">
                            <i class="fas fa-times"></i>
                        </button>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
import store from "@/store/index.js";

export default {
    name:"TheMangaArray",
    methods:{
        priceFormat(prix){
            return prix = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(prix);
        },
        deleteManga(indexToDelete){
            store.commit('deleteMangaToList', indexToDelete);
        },
        addTomeReleased(index){
            store.commit('addTomeReleased', index);
        },
        addTomeBought(index){
            store.commit('addTomeBought', index);
        },
        addTomeRead(index){
            store.commit('addTomeRead', index);
        },
        totalTomeBought(tableauTomes){
            let n = 0;
            for(let tome of tableauTomes){
                if (tome.bought == true){
                    n++;
                }
            }
            return n;
        },
        totalTomeRead(tableauTomes){
            let n = 0;
            for(let tome of tableauTomes){
                if (tome.read == true){
                    n++;
                }
            }
            return n;
        },
    },
    computed:{

    },
}
</script>

<style lang="scss" scoped>
.btnPlus {
  @apply w-2/6 absolute top-0 left-0 h-full flex justify-center items-center text-black bg-gray-400 dark:bg-gray-900 dark:text-white text-3xl font-bold bg-opacity-30 rounded-full cursor-pointer transition-transform duration-75 transform scale-[0.65] border border-black hover:text-white hover:bg-black;
  &:active {
    transform: scale(0.85);
  }
}
.btnMinus {
  @apply w-2/6 absolute top-0 right-0 h-full flex justify-center items-center text-black bg-gray-400 dark:bg-gray-900 dark:text-white text-3xl font-bold bg-opacity-30 rounded-full cursor-pointer transition-transform duration-75 transform scale-[0.65] border border-black hover:text-white hover:bg-black;
  &:active {
    transform: scale(0.45);
  }
}
</style>