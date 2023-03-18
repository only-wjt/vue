<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: 'School',
  data () {
    return {
      name: '天津城建大学',
      address: '北京',
    }
  },
  mounted () {
    console.log('Student', this.x);
    this.$bus.$on('hello', (data) => {
      console.log('@', '收到的数据是', data);
    })
  },
  beforeDestroy () {
    this.$bus.$off('hello');
  }
}
</script>
<style scoped>
.school {
  background-color: red;
  padding: 5px;
}
</style>