<template>
  <div class="demo">
    <!-- 组件的结构 -->
    <h2>学生名称:{{ name }}</h2>
    <h2>年龄:{{ address }}</h2>
    <!-- <button @click="showName">点我提示学校名称</button> -->
  </div>
</template>
<script>
export default {
  name: 'Student',
  data () {
    return {
      name: '天津城建大学',
      age: 21
    }
  },
  methods: {
    showName () {
      alert(this.schoolName);
    }
  }
}
//统一暴露
// export {
//   school
// }
</script>

<style>
</style>