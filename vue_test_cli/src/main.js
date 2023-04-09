//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false
//引入element组件和样式
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
//应用elementui，全部引入，会很大
// Vue.use(ElementUI);

//按需引入
import { Button, Row, DatePicker } from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);

//创建vm
const vm = new Vue({
	el: '#app',
	render: h => h(App),

})