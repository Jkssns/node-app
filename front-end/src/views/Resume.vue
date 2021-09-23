<template>
        <header>
            <img src="https://img0.baidu.com/it/u=3311900507,1448170316&fm=26&fmt=auto&gp=0.jpg" alt="">

            <nav>
                <li v-for="item in routes" :key="item.path" @click="routerTo">{{$t(item.name)}}</li>
            </nav>
        </header>

        <main>
            <!-- <ul>
                <li @click="scrollTo('shui')">自我介绍</li>
                <li @click="scrollTo('sha')">工作经历</li>
                <li @click="scrollTo('neng')">技能点数</li>
                <li @click="scrollTo('xiang')">展望</li>
                <li @click="scrollTo('shuo')">吐槽</li>
                <li @click="scrollTo('resume')">1111111</li>
                <li @click="scrollTo('workList')">2222222</li>
                <li @click="scrollTo('skill')">333333333</li>
                <li @click="scrollTo('hope')">44444444444</li>
                <li @click="scrollTo('BB')">555555555</li>
            </ul>
            <div>
                <ol>
                    <li id="resume">
                        1111111
                    </li>
                    <li id="workList">
                        2222222
                    </li>
                    <li id="skill">
                        333333333
                    </li>
                </ol>
            </div> -->
        </main>

        <footer>

        </footer>
</template>

<script lang="ts" setup>
    import { ref, defineComponent, getCurrentInstance, onBeforeMount, reactive } from "vue";
	import { routes } from '@/router/index.ts';
    const { proxy } = getCurrentInstance()

	console.log(routes)

    onBeforeMount(() => {

    })
    
    const state = reactive({
        routes: [
            { name: '我的简历', path: '' },
            { name: '', path: '' },
            { name: '', path: '' },
            { name: '', path: '' },
        ]
    })

    const scrollTo = (type) => {
        document.getElementById(type).scrollIntoView({behavior: 'smooth', block: 'end'})
    }

    
</script>

<style lang="scss" scoped>
    // .resume_wrapper {
    //     width: 1200px;
    // }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
        padding: 0 15%;
        background: #121212;

        img {
            width: auto;
            height: 50px;
            border-radius: 50%;
        }

        .header__right {
            color: red;
        }
    }

    main {
        display: flex;
        margin: 0 auto;
        height: calc(100% - 70px);
        background: #121212;
        width: 80%;
        ul {
            width: 200px;
            li {
                width: 100%;
                display: inline-block;
                height: 50px;
                text-align: center;
                line-height: 50px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.3);
                cursor: pointer;
            }
        }

        ol {
            background: #f8f8f8;
            width: 500px;
            height: 100%;
            color: red;
            overflow: auto;
            li {
                height: 100%;
            }
        }
    }
</style>