<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">点我学校名给app</button>
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
  props: ['getSchoolName'],
  methods: {
    sendSchoolName () {
      this.getSchoolName(this.name)
    }
  }

}
</script>
<style scoped>
.school {
  background-color: red;
  padding: 5px;
}
</style>