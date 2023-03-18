<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名传给school组件</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data () {
    return {
      name: '张三',
      sex: '男',
      number: 0
    }
  },
  methods: {
    sendStudentName () {
      this.$bus.$emit('hello', this.name)
    }
  },
  mounted () {
    console.log('Student', this.x);
  }
}
</script>
<style scoped>
.student {
  background-color: blue;
  padding: 5px;
  margin-top: 30px;
}
</style>