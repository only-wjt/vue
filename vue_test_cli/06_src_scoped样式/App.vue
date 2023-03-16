<template>
  <div>
    <School />
    <hr />
    <Student />
    <h1 class="title">你好呢</h1>
  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'

export default {
  name: 'App',
  components: { School, Student }
}
</script>
<style scoped>
.title {
  color: red;
}
</style>