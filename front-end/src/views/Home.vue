<template>
    <div>
        <a-textarea v-model:value="msg" placeholder="请留言" allow-clear />
        <br/>
        <br/>
        <a-button type="primary" @click="addMsg" :loading="state.loading">点击留言</a-button>
        <a-button style="margin-left: 10px;" @click="delAll" :loading="state.loading">删除全部</a-button>

        <ul>
            <li v-for="item in state.list" :key="item.id" @click="delItem(item.id || item._id)">
                {{item.msg}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
    import { ref, defineComponent, getCurrentInstance, onBeforeMount, reactive } from "vue";
    const { proxy } = getCurrentInstance()

    onBeforeMount(() => {
        getList()
    })
    
    const state = reactive({
        list: [],
        loading: false,
    })

    const msg = ref('')
    const addMsg  = () => {
        state.loading = true
        proxy.$server.addMsg({msg: msg.value + state.list.length}).then(res => {
            state.loading = false
            if (res.code === 200) {
                getList()
            } else {
                
            }
        }).catch(err => state.loading = false )
    }

    const getList = () => {
        proxy.$server.msgList().then(res => {
            if (res.code === 200) {
                state.list = res.data
            }
        })
    }

    const delItem = (id) => {
        proxy.$server.msgDelete({id}).then(res => {
            if (res.code === 200) {
               getList()
            }
        })
    }

    const delAll = () => {
        proxy.$server.msgDeleteAll().then(res => {
            if (res.code === 200) {
               getList()
            }
        })
    }

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