<template>
    <input type="file" @change="onFileChange">
	<div>
		<img :src="state.imgUrl" />
	</div>
</template>

<script lang="ts" setup>
    import { ref, defineComponent, getCurrentInstance, onBeforeMount, reactive } from "vue";
	import { message } from 'ant-design-vue';
    import apis from '../server/apis';

    const state = reactive({
        list: [],
        loading: false,
		imgUrl: '',
    })

	const onFileChange = (event: Event):void => {
		let file = (<HTMLInputElement>event.target).files[0];
		 let oFileReader = new FileReader();
        oFileReader.onloadend = (e) => {
            const base64 = e.target.result;
			const data = {
				Image: base64,
			}
			apis.comicFace(data).then((res: any) => {
				if (res.code === 200) {
					state.imgUrl = 'data:image/jpeg;base64,' + res.data.ResultImage;
				} else {
					(<HTMLInputElement>event.target).value = '';
					message.error(res.msg);
				}
			})
        };
        oFileReader.readAsDataURL(file);
	}
</script>

<style>
</style>