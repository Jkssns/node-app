<template>
    <div>
        
    </div>
</template>

<script lang="ts">
import { ref, defineComponent, getCurrentInstance } from "vue";
export default defineComponent({
	name: "Home",
	setup: () => {
        const { proxy } = getCurrentInstance()

        proxy.$server.login({ user: '123', password: '123132' }).then(res => {
            console.log("res::: ", res);
        })
    },
});
</script>
<style>
</style>