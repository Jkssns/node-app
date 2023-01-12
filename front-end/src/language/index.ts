import { createApp, reactive, provide } from 'vue'


const install = (app, options) => {
	app.config.globalProperties.$t = (str, lang) => {
		
	}
	app.mixin({
		beforeCreate() {
			// this.$t = 
		}
	})
}


// import { createI18n } from 'vue-i18n'

// const i18n = createI18n({
//   locale: 'chs', // set locale
//   messages: {
//     chs: {
//       message: { 
//         hello: '你好世界',
//       },
//     },
//     eng: {
//       message: {
//         hello: 'hello world',
//       },
//     },
//   },
// })

// export default i18n