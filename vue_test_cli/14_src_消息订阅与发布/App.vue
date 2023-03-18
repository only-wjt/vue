<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School />
    <hr />
    <!-- 通过父组件给子组绑定一个自定义事件实现：子给父传递数据 -->
    <!-- <Student v-on:selfEven.once="getStudentName" /> -->
    <!-- 通过父组件给子组绑定一个自定义事件实现：子给父传递数据  第二种写法，使用ref-->
    <Student />
  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'

export default {
  name: 'App',
  components: { School, Student },
  data () {
    return {
      msg: '你好呀',
      studentName: ''
    }
  }
}
</script>
<style scoped>
.app {
  background-color: grey;
  padding: 5px;
}
</style>