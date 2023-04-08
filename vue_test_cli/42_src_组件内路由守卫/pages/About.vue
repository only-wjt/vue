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
  //通过路由规则，进入改组件是被调用
  beforeRouteEnter (to, from, next) {
    console.log('@通过路由规则，进入后');
    //在这里面也可以加上校验
    next();

  },
  //通过路由规则，离开改组件是被调用
  beforeRouteLeave (to, from, next) {
    console.log('@通过路由规则，离开该组件时', to, from);
    //可以控制不允许离开
    next();
  }

}
</script>

<style>
</style>