//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
//关闭Vue的生产提示
Vue.config.productionTip = false
//使用插件
// Vue.use(vueResource)
Vue.use(VueRouter);

//创建vm
const vm = new Vue({
	el: '#app',
	render: h => h(App),
	router: 'hello',
	mounted () {
		console.log('@'); s
	},
})