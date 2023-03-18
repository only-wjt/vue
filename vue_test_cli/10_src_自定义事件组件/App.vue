<template>
  <div class="app">
    <h1>{{ msg }},学生姓名是：{{ studentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />
    <hr />
    <!-- 通过父组件给子组绑定一个自定义事件实现：子给父传递数据 -->
    <!-- <Student v-on:selfEven.once="getStudentName" /> -->
    <!-- 通过父组件给子组绑定一个自定义事件实现：子给父传递数据  第二种写法，使用ref-->
    <Student ref="student" @click.native="show" />
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
  },
  methods: {
    getSchoolName (name) {
      this.msg = name;
    },
    getStudentName (studentName, ...a) {//这个也是形参接受
      console.log('@', 'demo被调用了', a);
      // this.msg = studentName;
      this.studentName = studentName
    },
    show () {
      console.log('@', '显示show');
    }
  },
  mounted () {
    this.$refs.student.$on('selfEvent', this.getStudentName);

    // this.$refs.student.$once('selfEvent', this.getStudentName) //只实现一次
  }
}
</script>
<style scoped>
.app {
  background-color: grey;
  padding: 5px;
}
</style>