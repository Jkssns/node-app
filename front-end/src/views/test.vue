<template>
    <div class="open_container" @click="state.open=!state.open">
		<!-- <section class="door_left" :class="{slide_left: state.open}">
			1
		</section>

		<section class="door_right" :class="{slide_right: state.open}" @click.stop="slide">
			2
		</section> -->

		<div class="test">
			<img src="https://img2.baidu.com/it/u=690487400,3736912659&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=675" alt="">
		</div>
    </div>
</template>

<script lang="ts" setup>
    import { ref, defineComponent, getCurrentInstance, onBeforeMount, reactive } from "vue";

	const state = reactive({
		open: false
	})

	const slide = () => {
		// state.open = !state.open
	}

</script>

<style lang="scss" scoped>
	.open_container {
		display: flex;
		width: 100%;
		height: 100%;
		overflow: hidden;
		.door_left,.door_right {
			width: 50%;
			height: 100%;
			box-sizing: border-box;
			background: grey;
			transform-origin: left center;
			transform-style: preserve-3d;
			backface-visibility: hidden;
			transition: all 2s ease;

		}
		.door_right {
			transform-origin: right center;
		}
		.door_left.slide_left {
			transform: rotateY(140deg);
		}
		.door_right.slide_right {
			transform: rotateY(-140deg);
		}
		
	}

	.test {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background: grey;
		box-shadow: 3px 0 12px rgba(128, 128, 128, 0.4);
		animation: shake 5s linear infinite both; 
		overflow: hidden;
		img {
			width: 100%;
			height: auto;
		}
	}

@keyframes ani {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@keyframes shake {
   0% {
    transform: rotate(360deg);
  }
  40% {
    transform: rotate(0deg);
  }
  45% {
    transform: translate(0);
  }
  50% {
      transform: translate(-3px, 3px);
  }
  55% {
      transform: translate(-3px, -3px);
  }
  60% {
      transform: translate(3px, 3px);
  }
  65% {
      transform: translate(3px, -3px);
  }
  70% {
      transform: translate(0);
  }
  75% {
      transform: translateY(0);
  }
  76% {
      transform: translateY(10px);
  }
  100% {
	  position: absolute;
  }
}


</style>