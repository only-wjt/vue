<template>
  <div>
    <h2>这是home组件</h2>
  </div>
</template>

<script>
export default {
  name: 'Home',
  beforeDestroy () {
    console.log('@', "home组件即将被销毁");
  },
  mounted () {
    console.log('@', "home组件即将挂载");
  },
}
</script>

<style>
</style>