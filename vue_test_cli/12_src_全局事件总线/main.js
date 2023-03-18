//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
//关闭Vue的生产提示
Vue.config.productionTip = false
const Demo = Vue.extend({

})
const d = new Demo();
// window.x = "sss"
Vue.prototype.x = d;
//创建vm
new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate () {//在创建vm，且没渲染子组件之前，放进去
    Vue.prototype.$bus = this;//安装全局事件总线
  }
})