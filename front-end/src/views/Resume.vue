<template>
    <div class="box_container">
        <div class="my__box">
            <img class="my__avatar" src="https://jkssns.oss-cn-hangzhou.aliyuncs.com/images/bear.jpg" />
            <div class="my__info pinyin">
                <p class="my__info__name">张钧</p>
                <p class="my__info__title">前端工程师</p>
            </div>
        </div>

            <!-- <div class="my__right">
                <button style="height: 50px;width: 100px;color: black;" @click="like('post')">点赞{{state.likeMe}}</button>
            </div> -->
    </div>
</template>

<script lang="ts" setup>
    import { ref, defineComponent, getCurrentInstance, onBeforeMount, reactive } from "vue";
	import { routes } from '@/router/index.ts';
    import apis from '@/server/apis.ts'

    onBeforeMount(() => {
        like('get')
    })
    
    const state = reactive({
        routes: [
            { name: '我的简历', path: '' },
            { name: '', path: '' },
            { name: '', path: '' },
            { name: '', path: '' },
        ],
        likeMe: 0,
    })

    const scrollTo = (type) => {
        document.getElementById(type).scrollIntoView({behavior: 'smooth', block: 'end'})
    }

    const like = (method) => {
        apis.like(method, {like: state.likeMe + 1}).then(res => {
            state.likeMe = res.data.like
        })
    }

</script>

<style lang="scss" scoped>
    .box_container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: #1a1a1d url(https://jkssns.oss-cn-hangzhou.aliyuncs.com/images/smash-fake.png) no-repeat;
        background-size: auto 100%;
        background-position: center;
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