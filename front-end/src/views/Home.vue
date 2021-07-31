<template>
    <div>
        <a-textarea v-model:value="msg" placeholder="请留言" allow-clear />
        <br/>
        <br/>
        <a-button type="primary" @click="addMsg">点击留言</a-button>
    </div>
</template>

<script lang="ts">

import { ref, defineComponent, getCurrentInstance } from "vue";
export default defineComponent({
	name: "Home",
	setup: () => {
        const { proxy } = getCurrentInstance()

        const msg = ref('')
        const addMsg  = () => {
            proxy.$server.addMsg({msg: msg.value}).then(res => {
                console.log("res::: ", res);
            })
        } 

        return {
            msg,
            addMsg,
        }
    },
});
</script>

<style> 
</style>