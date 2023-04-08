<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link replace class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link replace class="list-group-item " active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <ul>
        <!-- 如果不写include，则下面全部的组件都会被缓存,写了之后就可以缓存指定组件 -->
        <keep-alive :include="['News','Message']">
          <router-view></router-view>
        </keep-alive>
      </ul>
    </div>
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