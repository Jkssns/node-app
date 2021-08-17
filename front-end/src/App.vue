<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
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
        background: #222222;
        color: #fff;
    }
</style>
