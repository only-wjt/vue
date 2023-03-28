//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)
//求和功能相关配置
const countOptons = {
	namespaced: true,
	actions: {
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
	},
	mutations: {
		JIA (state, value) {
			console.log('@', 'mutations的jia被调用了', state, value);
			state.sum += value;
		},
		DECREMENT (state, value) {
			state.sum -= value;
		},
	},
	state: {
		sum: 0,
		school: '天津城建大学',
		subject: "工商管理",
	},
	getters: {
		bigSum (state) {
			return state.sum * 10;
		}
	}
}
const personOptons = {
	namespaced: true,
	actions: {},
	mutations: {
		ADD_PERSON (state, value) {
			state.personList.unshift(value);
		}
	},
	state: {
		personList: [
			{ id: '0001', name: '张三' }
		]
	},
	getters: {}
}


//创建并暴露store
export default new Vuex.Store({
	modules: {
		countAbout: countOptons,
		personAbout: personOptons
	}
})