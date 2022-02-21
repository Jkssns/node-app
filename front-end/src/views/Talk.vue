<template>
    <div>
        
    </div>
</template>

<script lang="ts" setup>
    import { ref, defineComponent, getCurrentInstance, onBeforeMount, reactive } from "vue";
    const { proxy } = getCurrentInstance()

    onBeforeMount(() => {

    })
    
    const state = reactive({
        
    })
</script>

<style> 
</style>

{
    id: '',
    msg: '',
    from: '',
    to: '',
    replyDate: '',
    like: 0,
    unLike: 0,
    reply: [
        {
            id: '',
            pid: '',
            msg: '',
            from: '',
            to: '',
            replyDate: '',
            like: 0,
            unLike: 0,
        }
    ]
}