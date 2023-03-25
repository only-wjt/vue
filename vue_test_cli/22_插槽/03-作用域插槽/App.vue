<template>
  <div class="container">
    <Category title="游戏">
      <template v-slot="atguigu">
        <ul>
          <li v v-for="(g, index) in atguigu.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template v-slot="atguigu">
        <ol>
          <li v v-for="(g, index) in atguigu.games" :key="index">{{ g }}</li>
        </ol>
        <h1>{{ atguigu.msg }}</h1>
      </template>
    </Category>
    <Category title="游戏">
      <template v-slot="{ games }">
        <h4 v v-for="(g, index) in games" :key="index">{{ g }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'
export default {
  name: 'App',
  components: { Category }

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
