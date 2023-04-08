<template>
  <div>
    <ul>
      <li :style="{opacity}">欢迎学习Vue</li>
      <li>news001 <input type="text"></li>
      <li>news002 <input type="text"></li>
      <li>news003 <input type="text"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data () {
    return {
      a: false,
      opacity: 1
    }
  },
  // mounted () {
  //   this.timer = setInterval(() => {
  //     this.opacity -= 0.01;
  //     if (this.opacity <= 0) this.opacity = 1
  //   }, 16);
  // },
  // beforeDestroy () {
  //   console.log('@', "news组件即将被销毁了");
  //   clearInterval(this.timer);
  // },
  activated () {//激活
    console.log('@', 'news组件被激活');
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1
    }, 16);
  },
  deactivated () {//失活
    console.log('@', 'news组件失活');
    clearInterval(this.timer);
  }
}
</script>

<style>
</style>