<template>
    <div class="m-20 text-white">
        <h2>Page introuvable !</h2>
        <p>Oops, la page est introuvable.<br>
            <router-link :to="{name : 'Home'}" class=" text-xl underline my-8 block border rounded w-80 py-2 mx-auto hover:text-black hover:bg-white"> Revenez au l'accueil</router-link>
        </p>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
}
</script>