<template>
  <div>
    <h2>about</h2>
  </div>
</template>

<script>
export default {
  name: 'About',
  beforeDestroy () {
    console.log('@', "about组件即将被销毁");
  },
}
</script>

<style>
</style>