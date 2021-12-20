<template>
    <div class="min-h-screen text-white">
        <div class="text-3xl my-60 w-10/12 lg:w-[40%] mx-auto flex flex-col justify-center items-center">
            <h2 class=""><img src="@/assets/logomangaup.png" alt="MangaUp" class="rounded-lg inline"/> un suivi simple et efficace de <strong>vos mangas.</strong></h2>
        </div>
        <section class="my-10">
            <div class="w-11/12 bg-white mx-auto border text-black rounded-lg max-w-[1200px]">
                <nav class="rounded-t-lg hidden lg:contents">
                    <ul class="flex w-full justify-around items-center h-24 bg-gray-100 rounded-t-lg">
                        <li class="px-4 py-2 rounded-lg m-1 w-40 bg-white">Intro</li>
                        <li class="px-4 py-2 rounded-lg m-1 w-40">Vos données</li>
                        <li class="px-4 py-2 rounded-lg m-1 w-40">Essayez</li>
                        <li class="px-4 py-2 rounded-lg m-1 w-40">Contact</li>
                    </ul>
                </nav>
                <div class="flex flex-col justify-around items-center pt-20 mb-10 lg:flex-row-reverse">
                    <img src="@/assets/screenmangaup.png" alt="App MangaUp" class="w-60 h-60 object-cover rounded-full ring-2 ring-gray-400 p-2 m-2 lg:w-80 lg:h-80 lg:mr-20"/>
                    <div class="lg:pl-20 lg:flex-col lg:justify-center lg:items-center w-full mx-auto">
                        <h2 class="bar-gradiant text-2xl mt-8">Le principe</h2>
                        <p class="w-9/12 mx-auto">MangaUp est une application gratuite qui vous permet de savoir ou vous en êtes dans l'achat et la lecture de vos mangas.</p>
                        <router-link :to="{name : 'Manga'}">
                            <p class="text-2xl mx-auto font-bold text-white my-4 p-4 w-full max-w-xs border rounded-lg bg-gradient-to-r from-fuchsia-900 to-violet-900 hover:shadow-xl transform hover:-translate-y-1 transition-all">Essayez MangaUp</p>
                        </router-link>
                    </div>
                </div>
                <div class="lg:flex">
                    <div class="border-t flex flex-col justify-around items-center mb-10">
                        <h2 class="bar-gradiant text-2xl mt-8">Simple d'utilisation</h2>
                        <div class="w-48 h-48 object-cover rounded-full ring-2 ring-gray-400 p-2 m-4 text-9xl text-violet-900 flex justify-center items-center"><i class="far fa-gem"></i></div>
                        <p class="w-9/12">L'application MangaUp est très simple d'utilisation. Vous pouvez rentrer vos manga très rapidement. Le suivi est simple à comprendre.</p>
                    </div>
                    <div class="border-t flex flex-col justify-around items-center mb-10">
                        <h2 class="bar-gradiant text-2xl mt-8">Gardez vos données</h2>
                        <div class="w-48 h-48 object-cover rounded-full ring-2 ring-gray-400 p-2 m-4 text-9xl text-violet-900 flex justify-center items-center"><i class="fas fa-clipboard-list"></i></div>
                        <p class="w-9/12">L'application MangaUp ne stock aucunes données. Toutes vos données sont sauvegardées sur votre navigateur.</p>
                    </div>
                </div>
                <div class="border-t flex flex-col justify-around items-center lg:py-20">
                    <h2 class="bar-gradiant text-2xl mt-8">Commencer !</h2>
                    <p class="w-9/12">L'application MangaUp n'attends que vous !</p>
                    <router-link :to="{name : 'Manga'}">
                        <p class="text-2xl font-bold text-white my-4 p-4 w-full border rounded-lg bg-gradient-to-r from-fuchsia-900 to-violet-900 hover:shadow-xl transform hover:-translate-y-1 transition-all">Essayez MangaUp</p>
                    </router-link>
                </div>
            </div>
        </section>
        <TheFooter />
    </div>
</template>

<script>
import TheFooter from "@/components/TheFooter.vue";
export default {
    name: 'Home',
    components: {
        TheFooter,
    }

}
</script>

<style lang="scss">
.bar-gradiant {
    &:after {
        background: linear-gradient(90deg, #efa8b0, #a89cc8, #8cc9f0);
        display: block;
        content: '';
        width: 3.25em;
        height: 2px;
        margin: 0.7em 0 1em 0;
        border-radius: 2px;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>