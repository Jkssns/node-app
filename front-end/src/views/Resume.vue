<template>
    <div class="box_container">
        <button @click="post">add</button>
    </div>
</template>

<script lang="ts" setup>
    import { ref, defineComponent, getCurrentInstance, onBeforeMount, reactive } from "vue";
    import apis from '../server/apis'

    onBeforeMount(() => {
        like('get')
    })
    
    const state = reactive({
        likeMe: 0,
    })

    const like = (method: string) => {
        apis.like(method, {like: state.likeMe + 1}).then(res => {
            state.likeMe = res.data.like
        })
    }

    const post = () => {
        like('post')
    }


</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100%;
}
    .box_container {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: auto;
        width: 100%;
        height: 100%;
        background: #1a1a1d url(https://jkssns.oss-cn-hangzhou.aliyuncs.com/images/smash-fake.png) no-repeat;
        background-size: auto 100%;
        background-position: center;
        color: #fff;
    }

    .my__box {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .my__avatar {
            width: auto;
            height: 100px;
            border-radius: 50%;
            margin-right: 12px;
        }
        .my__info {
            margin-top: 30px;
            width: 100%;
            text-align: center;
            overflow: hidden;
            .my__info__name {
                font-size: 80px;
            }
            .my__info__title {
                margin-top: 12px;
                font-weight: lighter;
                color: rgba(255, 255, 255, 0.8);
            }
        }
    }

    //     .my__right {
    //         color: red;
    //     }

</style>