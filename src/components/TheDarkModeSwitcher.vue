<template>
    <button @click="SwitchDM" class="absolute top-1 left-1">
        <i class="fas fa-adjust"></i>
    </button>
</template>

<script>
export default {
    name: "TheDarkModeSwitcher",
    methods:{
        SwitchDM(){
            let app = document.querySelector('#app');
            app.classList.toggle('dark');
        }
    }
}
</script>