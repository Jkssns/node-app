<template>
    <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
    name: 'App',
    setup() {
        const $route = useRoute()
    }
})
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
li {
    list-style: none;
}
#app {
    width: 100%;
    height: 100%;
}
</style>
