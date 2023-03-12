<template>
  <div class="demo">
    <!-- 组件的结构 -->
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="showName">点我提示学校名称</button>
  </div>
</template>
<script>
export default {
  name: 'School',
  data () {
    return {
      name: '天津城建大学',
      address: '天津西青区'
    }
  },
  methods: {
    showName () {
      alert(this.name);
    }
  }
}
//统一暴露
// export {
//   school
// }
</script>

<style>
.demo {
  background-color: orange;
}
</style>