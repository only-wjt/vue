//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//准备actions——用于响应组件中的动作
const actions = {
	// jia (context, value) {
	// 	// console.log('@', 'action的jia被调用了');
	// 	context.commit('JIA', value)
	// },
	// decrement (context, value) {
	// 	// console.log('@', 'action的jia被调用了');
	// 	context.commit('DECREMENT', value)
	// },
	incrementOdd (context, value) {
		// console.log('@', 'action的jia被调用了');
		if (context.state.sum % 2) {
			context.commit('JIA', value)
		}
	},
	incrementWait (context, value) {
		setTimeout(() => {
			context.commit('JIA', value)
		}, 500);
	}
}

//准备mutations——用于操作数据（state）
const mutations = {
	JIA (state, value) {
		console.log('@', 'mutations的jia被调用了', state, value);
		state.sum += value;
	},
	DECREMENT (state, value) {
		state.sum -= value;
	},
	ADD_PERSON (state, value) {
		state.personList.unshift(value);
	}
}
//准备state——用于存储数据
const state = {
	sum: 0,
	school: '天津城建大学',
	subject: "工商管理",
	personList: [
		{ id: '0001', name: '张三' }
	]
}
//准备一个getters，用于将state中的数据进行加工
const getters = {
	bigSum (state) {
		return state.sum * 10;
	}
}

//创建并暴露store
export default new Vuex.Store({
	actions,
	mutations,
	state,
	getters
})