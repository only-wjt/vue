<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生名称：{{ studentName }}</h2>
    <h2>性别：{{ sex }}</h2>
    <h2>年龄：{{ studentAge }}</h2>
    <button @click="updateAge">尝试修改该收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: 'School',
  data () {
    return {
      msg: '我是一个好学生',
      studentName: this.name,
      studentAge: this.age
    }
  },
  methods: {
    updateAge () {
      this.studentAge++
    }
  },
  // props: [ //简单接受
  //   'name',
  //   'sex',
  //   'age'
  // ]
  //接受的同时对数据进行类型限制，会报错，但是会继续计算
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String
  // }
  props: {
    name: {
      type: String,//类型是字符串
      required: true//名字是必须的
    },
    sex: {
      type: String,//类型是字符串
      required: true//名字是必须的
    },
    age: {
      type: Number,//类型是字符串
      default: 99//默认值
    }
  }
}
</script>
<style>
</style>