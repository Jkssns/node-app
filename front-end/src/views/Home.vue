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

        proxy.$server.userList({id: '60fab7c19b1a698890d178e5'}).then(res => {
            console.log("res::: ", res);
        })
    },
});
</script>
<style>
</style>