<template>
    <div class="open_container pinyin">
        <section class="door_left" v-if="state.showDoor" :class="{ slide_left: state.open }">
            <p class="door_name">张</p>
            <span class="door_title">前端</span>
        </section>

        <section class="door_right" v-if="state.showDoor" :class="{ slide_right: state.open }" @click.stop="slide">
            <p class="door_name">钧</p>
            <span class="door_title">开发</span>
        </section>

        <div id="avatar_wrapper" :class="state.avatarClass" @mousedown="onMousedown" @click="onClick">
			<img class="avatar" draggable="false" src="https://jkssns.oss-cn-hangzhou.aliyuncs.com/images/bear.jpg" alt="">
		</div>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineComponent, getCurrentInstance, onBeforeMount, onMounted, nextTick, reactive } from 'vue'

const state = reactive({
    open: false,
    lastX: 0,
    lastY: 0,
    iSpeedX: 0,
    iSpeedY: 0,
    timer: null,
    move: false,
    avatar: null,
    showDoor: true,
    clickDoor: false, // 是否能点击门
    avatarClass: '', // 头像动态css
})

onMounted(() => {
    nextTick(() => {
        state.avatar = document.getElementById('avatar_wrapper')
    })
})

const openDoor = () => {
    state.open = !state.open
    setTimeout(() => {
        state.showDoor = false
    }, 2000)
}

const onMousedown = ev => {
    let disX = ev.pageX - state.avatar.offsetLeft
    let disY = ev.pageY - state.avatar.offsetTop
    document.onmousemove = function (moveEvent) {
        state.move = true
        let l = moveEvent.pageX - disX
        let t = moveEvent.pageY - disY
        state.avatar.style.left = l + 'px'
        state.avatar.style.top = t + 'px'
        state.iSpeedX = l - state.lastX
        state.iSpeedY = t - state.lastY
        state.lastX = l
        state.lastY = t
    }
    document.onmouseup = function (e) {
        document.onmousemove = null
        document.onmouseup = null
        startMove()
    }
    clearInterval(state.timer)
}

const onClick = () => {
    if (state.move) {
        state.move = false
        return
    }
    let l = state.avatar.offsetLeft
    let t = state.avatar.offsetTop
    state.avatar.style.left = l + 'px'
    state.avatar.style.top = t + 'px'
    state.lastX = l
    state.lastY = t
    clearInterval(state.timer)
    startMove()
}

const startMove = () => {
    let nowX = state.avatar.offsetLeft
    let nowY = state.avatar.offsetTop
    clearInterval(state.timer)
    state.timer = setInterval(function () {
        state.iSpeedY += 3
        nowX += state.iSpeedX
        if (nowX > document.documentElement.clientWidth - state.avatar.offsetWidth) {
            state.iSpeedX *= -0.8
            nowX = document.documentElement.clientWidth - state.avatar.offsetWidth
        } else if (nowX < 0) {
            state.iSpeedX *= -0.8
            nowX = 0
        }
        nowY += state.iSpeedY
        if (nowY > document.documentElement.clientHeight - state.avatar.offsetHeight) {
            state.iSpeedY *= -0.8
            state.iSpeedX *= 0.8
            nowY = document.documentElement.clientHeight - state.avatar.offsetHeight
        } else if (nowY < 0) {
            state.iSpeedY *= -1
            state.iSpeedX *= 0.8
            nowY = 0
        }
        if (Math.abs(state.iSpeedX) < 1) {
            state.iSpeedX = 0
        }
        if (Math.abs(state.iSpeedY) < 1) {
            state.iSpeedY = 0
        }
        if (state.iSpeedX == 0 && state.iSpeedY == 0 && nowY == document.documentElement.clientHeight - state.avatar.offsetHeight) {
            clearInterval(state.timer)
            state.clickDoor = true
            state.avatarClass = 'opacity'
            setTimeout(() => {
                state.avatarClass = 'none'
                openDoor()
            }, 2000)
        }
        state.avatar.style.left = nowX + 'px'
        state.avatar.style.top = nowY + 'px'
    }, 30)
}
</script>

<style lang="scss" scoped>
.open_container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
    .door_left,
    .door_right {
        width: 50%;
        height: 100%;
        box-sizing: border-box;
		background-size: cover;
        transform-origin: left center;
        transform-style: preserve-3d;
        backface-visibility: hidden;
        transition: transform 3s ease;
        background-color: rgba(0, 0, 0, 0.85);
        background-size: cover;
        background-repeat: no-repeat;
        .door_name {
            margin-top: 45%;
            font-size: 60px;
            color: #fff;
        }
        .door_title {
            margin-top: 50px;
            font-size: 35px;
            color: rgba(255, 255, 255, 0.8);
        }
    }
    .door_left {
        text-align: right;
        background-image: url(../assets/images/left_bg.png);
		&.slide_left {
			animation: slideLeft 2s linear;
		}
	}
    .door_right {
        transform-origin: right center;
        background-image: url(../assets/images/right_bg.png);
		&.slide_right {
			animation: slideRight 2s linear;
		}
	}
}

@keyframes slideLeft {
    0% {
        transform: translateX(0%);
    }
    30% {
        transform: translateX(-30%);
    }
    40% {
        transform: translateX(-30%);
    }
    50% {
        transform: translateX(-18%);
    }
    55% {
        transform: translateX(-30%);
    }
    65% {
        transform: translateX(-30%);
    }
    95% {
        transform: translateX(-0%);
    }
    100% {
        transform: translateX(-100%);
    }
}

@keyframes slideRight {
    0% {
        transform: translateX(0%);
    }
    50% {
        transform: translateX(50%);
    }
    100% {
        transform: translateX(100%);
    }
}

#avatar_wrapper {
    position: absolute;
    width: 200px;
    height: 200px;
    top: 20%;
    border-radius: 50%;
    overflow: hidden;
    @keyframes opacity {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    &.opacity {
        animation: opacity 2s;
    }
    &.none {
        display: none;
    }
    .avatar {
        height: 100%;
        width: auto;
    }
}

@keyframes rotate {
    from {
        transform: rotate(360deg);
    }
    to {
        transform: rotate(0deg);
    }
}

@keyframes shake {
    0% {
        transform: translate(0);
    }
    20% {
        transform: translate(-2px, 2px);
    }
    40% {
        transform: translate(-2px, -2px);
    }
    60% {
        transform: translate(2px, 2px);
    }
    80% {
        transform: translate(2px, -2px);
    }
    100% {
        transform: translate(0);
    }
}
</style>