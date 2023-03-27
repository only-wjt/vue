<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和放大10倍为：{{ bigSum }}</h1>
    <h3>我在{{ school }},专业学的是：{{ $store.state.subject }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'Count',
  data () {
    return {
      n: 1, //用户选择的数字
    }
  },
  computed: {
    // sum () {
    //   return this.$store.state.sum
    // }
    //借助mapState生成计算属性，从state中读取数据，对象写法
    // ...mapState({ sum: 'sum', school: "school" }),
    ...mapState(['sum', 'school']),
    // ...mapGetters
    // ...mapGetters({ bigSum: 'bigSum' }),
    ...mapGetters(['bigSum'])
  },
  methods: {
    increment () {
      this.$store.commit('JIA', this.n)
    },
    decrement () {
      this.$store.commit('DECREMENT', this.n)
    },
    incrementOdd () {
      this.$store.dispatch('incrementOdd', this.n)
    },
    incrementWait () {
      this.$store.dispatch('incrementWait', this.n)

    },
  },
  mounted () {
    const x = mapState({ sum: 'sum' });
    console.log('@', x);
  },
}
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>
