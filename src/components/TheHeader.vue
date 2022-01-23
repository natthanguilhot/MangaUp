<template> 
    <header class="text-white w-full mx-auto flex justify-center items-center">
        <button @click="$router.back()" type="button" class="lg:absolute left-1/4 ml-2 text-5xl" v-if="$route.path == '/Manga'"><i class="fas fa-arrow-left"></i></button>
        <router-link :to="{name : 'Home'}" class=""><h1 class="text-5xl font-bold p-4 w-60">MangaUp</h1></router-link>
    </header>
</template>

<script>

export default {
    name:'TheHeader',
    component:{
        
    },
}
</script>

<style>

</style>