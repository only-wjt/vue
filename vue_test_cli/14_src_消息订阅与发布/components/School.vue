<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
  name: 'School',
  data () {
    return {
      name: '天津城建大学',
      address: '北京',
    }
  },
  mounted () {
    // console.log('Student', this.x);
    // this.$bus.$on('hello', (data) => {
    //   console.log('@', '收到的数据是', data);
    // })
    this.pubid = pubsub.subscribe('hello', (msgName, data) => {
      // console.log('@', '有人发布了hello消息，hello消息的回调执行了', msgName, data);
      console.log('@', this);
      this.name = data
    })
    // this.pubid = pubsub.subscribe('hello', this.setName)
  },
  methods: {
    setName (msgName, data) {
      console.log('@', '消息收到了', data);
      this.name = data
    }
  },
  beforeDestroy () {
    // this.$bus.$off('hello');
    pubsub.subscribe(this.pubid);
  }
}
</script>
<style scoped>
.school {
  background-color: red;
  padding: 5px;
}
</style>