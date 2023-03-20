<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div
      class="card"
      v-show="dataObj.users.length"
      v-for="user in dataObj.users"
      :key="user.login"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="dataObj.isFirst">欢迎你</h1>
    <!-- 展示加载中 -->
    <h1 v-show="dataObj.isLoadding"></h1>
    <h1 v-show="dataObj.errMsg">
      请求出错了，错误信息为：{{ dataObj.errMsg }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      dataObj: {
        isFirst: true,
        isLoadding: false,
        errMsg: '',
        users: []
      }
    }
  },
  mounted () {
    this.$bus.$on('updateListData', (dataObj) => {

      // this.isFirst = isFirst
      // this.isLoadding = isLoadding
      // this.errMsg = errMsg
      console.log('@', 'list组件', dataObj);
      this.dataObj = { ...this.dataObj, ...dataObj };//合并对象，将后面有的属性替换到前面的对象里面
    })
  }
}
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>