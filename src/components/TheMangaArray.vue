<template>
    <div class="flex justify-center items-center overflow-hidden">
        <table class="border-separate overflow-scroll">
            <thead class="">
                <tr>
                    <th class="w-36 border">Nom</th>
                    <th @click="sortByPrice($store.state.listManga)" class="w-36 border cursor-pointer">Prix <span v-show="sort" class="inline-block transform -rotate-90">></span><span v-show="!sort" class="inline-block transform rotate-90">></span></th>
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
                        <button type="button" @click="modifyTomeReleased(index, '+')" class="btnPlus hover:!text-white hover:!bg-black dark:hover:!bg-white dark:hover:!text-gray-900">+</button>
                        {{ manga.lastReleasedVolume }}
                        <button type="button" @click="modifyTomeReleased(index, '-')" class="btnMinus hover:!text-white hover:!bg-black dark:hover:!bg-white dark:hover:!text-gray-900">-</button>
                    </th>
                    <th class="w-36 border relative">
                        <button type="button" @click="modifyTomeBought(index, '+')" class="btnPlus hover:!text-white hover:!bg-black dark:hover:!bg-white dark:hover:!text-gray-900">+</button>
                        {{ manga.lastBoughtVolume }}
                        <button type="button" @click="modifyTomeBought(index, '-')" class="btnMinus hover:!text-white hover:!bg-black dark:hover:!bg-white dark:hover:!text-gray-900">-</button>
                    </th>
                    <th class="w-36 border relative">
                        <button type="button" @click="modifyTomeRead(index, '+')" class="btnPlus hover:!text-white hover:!bg-black dark:hover:!bg-white dark:hover:!text-gray-900">+</button>
                        {{ manga.lastRead }}
                        <button type="button" @click="modifyTomeRead(index, '-')" class="btnMinus hover:!text-white hover:!bg-black dark:hover:!bg-white dark:hover:!text-gray-900">-</button>
                    </th>
                    <!-- <th>
                        <router-link :to="{name: 'MangaDetails', params:{id: manga.id, name: manga.name}}" aria-label="Consulter les tomes" class="w-8 h-8 flex justify-center items-center text-black bg-white p-1 m-1 border border-black rounded-full hover:text-white hover:bg-black dark:bg-white dark:hover:bg-black group">
                        <i class="fas fa-search-plus group-hover:text-white"></i>
                        </router-link>
                    </th> -->
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
    data(){
        return {
            sort:true,
        }
    },
    methods:{
        priceFormat(prix){
            return prix = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(prix);
        },
        deleteManga(indexToDelete){
            store.commit('deleteMangaToList', indexToDelete);
        },
        modifyTomeReleased(index, theSwitch){
            store.commit('modifyTomeReleased', {index, theSwitch});
        },
        modifyTomeBought(index, theSwitch){
            store.commit('modifyTomeBought', {index, theSwitch});
        },
        modifyTomeRead(index, theSwitch){
            store.commit('modifyTomeRead', {index, theSwitch});
        },
        sortPrice(a, b) {
            if (a.price < b.price)
                return -1;
            if (a.price > b.price)
                return 1;
            return 0;
        },
        sortPriceDecrease(a, b) {
            if (a.price > b.price)
                return -1;
            if (a.price < b.price)
                return 1;
            return 0;
        },
        sortByPrice(array){
            switch (this.sort) {
                case true:
                    this.sort=false;
                    return array.sort(this.sortPrice);
                case false:
                    this.sort=true;
                    return array.sort(this.sortPriceDecrease);
            }
        },
    },
    computed:{

    },
}
</script>

<style lang="scss">
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