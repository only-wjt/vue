//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
//关闭Vue的生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
  el: '#app',
  render: h => h(App),
  mounted () {
    // setTimeout(() => {
    //   console.log('@', '销毁了');//此时子组件的实例都会小胡了
    //   this.$destroy()
    // }, 3000);
  }
})