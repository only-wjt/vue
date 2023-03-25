<template>
  <div class="container">
    <Category title="美食">
      <img
        slot="center"
        src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
        alt=""
      />
      <a slot="footer" href="http://baidu.com">点我查看更多</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div slot="footer" class="foot">
        <a href="http://baidu.com">单机游戏</a>
        <a href="http://baidu.com">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <img
        slot="center"
        src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
        alt=""
      />
      <template v-slot:footer>
        <div class="foot">
          <a href="http://baidu.com">经典</a>
          <a href="http://baidu.com">热门</a>
          <a href="http://baidu.com">推荐</a>
        </div>
        <h4 slot="footer">欢迎观影</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'
export default {
  name: 'App',
  components: { Category },
  data () {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》']
    }
  }
}
</script>
<style lang="css">
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h3 {
  text-align: center;
  background-color: orange;
}
img {
  width: 100%;
}
h4 {
  text-align: center;
}
</style>
