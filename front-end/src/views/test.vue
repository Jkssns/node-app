<template>
    <div class="open_container" @click="state.open=!state.open">
		<section class="door_left" :class="{slide_left: state.open}">
			1
		</section>

		<section class="door_right" :class="{slide_right: state.open}" @click.stop="slide">
			2
		</section>

		<!-- <div id="avatar_wrapper">
			<img class="avatar" draggable="false" src="https://img2.baidu.com/it/u=690487400,3736912659&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=675" alt="">
		</div> -->
    </div>
</template>

<script lang="ts" setup>
    import { ref, defineComponent, getCurrentInstance, onBeforeMount, onMounted, nextTick, reactive } from "vue";

	const state = reactive({
		open: false,
		lastX: 0,
		lastY:  0,
		iSpeedX:  0,
		iSpeedY:  0,
		timer:  null,
		move:  false,
		avatar: null,
	})

	onMounted(() => {
		nextTick(() => {
			state.avatar = document.getElementById('avatar_wrapper');
			
			state.avatar.onmousedown = function (ev){
				let disX = ev.pageX - state.avatar.offsetLeft;
				let disY = ev.pageY - state.avatar.offsetTop;
				document.onmousemove = function (moveEvent){
					state.move = true
					let l = moveEvent.pageX - disX;
					let t = moveEvent.pageY - disY;
					state.avatar.style.left = l + 'px';
					state.avatar.style.top = t + 'px';
					state.iSpeedX = l - state.lastX;
					state.iSpeedY = t - state.lastY;
					state.lastX = l;
					state.lastY = t;
				}
				document.onmouseup = function(e){
					document.onmousemove = null;
					document.onmouseup = null;
					startMove();
				}
				clearInterval(state.timer);
			}

			state.avatar.onclick = function (ev){
				if (state.move) {
					state.move = false
					return
				}
				let l = state.avatar.offsetLeft
				let t = state.avatar.offsetTop
				state.avatar.style.left = l + 'px';
				state.avatar.style.top = t + 'px';
				state.lastX = l;
				state.lastY = t;
				clearInterval(state.timer);
				startMove()
			}

			function startMove (){
				let nowX = state.avatar.offsetLeft;
				let nowY = state.avatar.offsetTop;
				clearInterval(state.timer);
				state.timer = setInterval(function(){
					state.iSpeedY +=3
					nowX+=state.iSpeedX;
					if(nowX>document.documentElement.clientWidth-state.avatar.offsetWidth)
					{
						state.iSpeedX *= -0.8;
						nowX = document.documentElement.clientWidth-state.avatar.offsetWidth;
					}else if(nowX<0)
					{
						state.iSpeedX *= -0.8;
						nowX = 0;
					}
					nowY+=state.iSpeedY;
					if(nowY>document.documentElement.clientHeight-state.avatar.offsetHeight)
					{
						state.iSpeedY *= -0.8;
						state.iSpeedX *=0.8
						nowY = document.documentElement.clientHeight-state.avatar.offsetHeight;
					}else if(nowY<0)
					{
						state.iSpeedY *= -1;
						state.iSpeedX *= 0.8;
						nowY = 0;
					}
					if(Math.abs(state.iSpeedX)<1)
					{
						state.iSpeedX = 0;
						
					}
					if(Math.abs(state.iSpeedY)<1)
					{
						state.iSpeedY = 0 ;
					}
					if(state.iSpeedX ==0&&state.iSpeedY ==0&&nowY ==document.documentElement.clientHeight-state.avatar.offsetHeight)
					{
						clearInterval(state.timer);
					}
					state.avatar.style.left = nowX + 'px';
					state.avatar.style.top = nowY + 'px';
				},30) 
			}
		})
	})

	const slide = () => {
		state.open = !state.open
	}

</script>

<style lang="scss" scoped>
	.open_container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		overflow: hidden;
		.door_left,.door_right {
			width: 50%;
			height: 100%;
			box-sizing: border-box;
			background: #f8f8f8;
			transform-origin: left center;
			transform-style: preserve-3d;
			backface-visibility: hidden;
			transition: all 3s ease;
		}
		.door_right {
			transform-origin: right center;
		}
		.door_left.slide_left {
			animation: slideLeft 2s linear;
		}
		.door_right.slide_right {
			animation: slideRight 2s linear;
		}
	}
	

@keyframes slideLeft {
	0% {
		transform: translateX(0%);
	}
	20% {
		transform: translateX(-20%);
	}
	30% {
		transform: translateX(-20%);
	}
	50% {
		transform: translateX(-18%);
	}
	55% {
		transform: translateX(-20%);
	}
	70% {
		transform: translateX(-18%);
	}
	80% {
		transform: translateX(-10%);
	}
	90% {
		transform: translateX(-18%);
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
		border-radius: 50%;
		overflow: hidden;
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