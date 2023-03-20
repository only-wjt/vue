<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          v-model="keyWord"
        />&nbsp;<button @click="searchUser">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
// import { response } from 'express';
export default {
  name: 'Search',
  data () {
    return {
      keyWord: ''
    }
  },
  methods: {
    searchUser () {
      //请求前更新list里面的数据
      this.$bus.$emit('updateListData', { isFirst: false, isLoadding: true, errMsg: '', users: [] });
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        response => {
          // console.log('@', '请求成功了', response.data.items);
          // this.$bus.$emit('updateListData', response.data.items);
          // this.$bus.$emit('updateListData', response.data.items, false, false, '');
          this.$bus.$emit('updateListData', { isLoadding: false, errMsg: '', users: response.data.items });
        },
        error => {
          this.$bus.$emit('updateListData', { isLoadding: false, errMsg: error.message, users: [] });
          // console.log('@', '请求失败了', error.message);
        }
      )
    }
  }
}
</script>

<style>
</style>