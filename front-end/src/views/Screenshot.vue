<template>
	<div class="big_container">
		<!-- <p v-for="item in 100" style="text-align: center;">{{item}}</p> -->
		<div class="container">
			<button style="width: 50px;height: 50px;position: relative;z-index: 999;" @click="handleLi">12</button>
			<ul style="display: flex;">
				<li :ref="el => liRefs[index] = el" @mousedown.stop="handleDrag" :class="{active: item.active}" v-for="(item, index) in arr" style="margin: 20px;width: 50px;height: 50px;border: 1px solid red;"></li>
			</ul>
			<div class="white_block"></div>
		</div>
	</div>
</template>

<script setup>
	import { onMounted, nextTick, ref } from 'vue';
	// import { useRouter } from 'vue-router'
	// const router = useRouter()

	const arr = ref(new Array(10).fill('').map((item, index) => ({index, active: false})))

	const liRefs = ref([]);


	const handleDrag = (e) => {
		console.log('e::: ', e);
	}

	const handleLi = () => {
		arr.value.forEach(item => {
			item.active = false;
		})
	}

	onMounted(() => {
		const container = document.querySelector('.container');
		const ractBlock = document.querySelector('.white_block');

		container.addEventListener('mousedown', (downEvent) => {
			console.log('downEvent::: ', downEvent);
			const windowW  = window.innerWidth; // 获取window的宽度
			const windowH = window.innerHeight; // 获取window的高度
			const startX = downEvent.clientX; // 获取点击的起始x位置
			const startY = downEvent.clientY; // 获取点击的起始y位置
			ractBlock.style.display = 'block';
			ractBlock.style.top = startY + 'px';
			ractBlock.style.left = startX + 'px';
	
			const move = (moveEvent) => {
				const moveX = moveEvent.clientX - startX;
				const moveY = moveEvent.clientY - startY;
				const domStyle = ractBlock.style;
	
				if (moveX >= 0) {
					domStyle.right = 'auto';
					domStyle.left = startX + 'px';
					domStyle.width = moveX + 'px';
				} else {
					domStyle.left = 'auto';
					domStyle.right = (windowW - startX) + 'px';
					domStyle.width = Math.abs(moveX) + 'px';
				}
	
				if (moveY >= 0) {
					domStyle.bottom = 'auto';
					domStyle.top = startY + 'px';
					domStyle.height = moveY + 'px';
				} else {
					domStyle.top = 'auto';
					domStyle.bottom = (windowH - startY) + 'px';
					domStyle.height = Math.abs(moveY) + 'px';
				}

				liRefs.value.forEach((item, index) => {
					let l = item.offsetLeft, r = item.offsetLeft + item.offsetWidth, t = item.offsetTop, b = item.offsetTop + item.offsetHeight;
					let domL = ractBlock.offsetLeft, domR = ractBlock.offsetLeft + ractBlock.offsetWidth, domT = ractBlock.offsetTop, domB = ractBlock.offsetTop + ractBlock.offsetHeight;
					if (
						domR > l && domR < r && domB > t && domT < b
						|| domL < r && domL > l && domB > t && domT < b 
						|| domL < l && domR > r && domT < b && domB > b
						|| domL < l && domR > r && domB > t && domT < t
					)
					{
						arr.value[index].active = true;
					} else {
						arr.value[index].active = false;
					}
				})

			}

			const mouseup = () => {
				ractBlock.style.display = 'none';
				ractBlock.style.width = '0';
				ractBlock.style.height = '0';
				document.removeEventListener('mousemove', move);
				document.removeEventListener('mouseup', mouseup);
			}
	
			document.addEventListener('mousemove', move);
			document.addEventListener('mouseup', mouseup)
		}, true)
	})
</script>

<style scoped lang="scss">
	.big_container {
		width: 100%;
		height: 100%;
		background: rgba(0,0,0, 0.1);
		user-select: none;
	}
	.container {
		position: absolute;
		width: 100%;
		height: 100%;
		user-select: none;
		top: 0;
		left: 0;
	}
	.active {
		background: yellow;
	}
	.white_block {
		position: absolute;
		border: 1px solid blue;
		background-color: rgba(0, 0, 255, 0.1);
	}
</style>