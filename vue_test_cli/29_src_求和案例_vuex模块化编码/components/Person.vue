<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">count组件求和为{{ sum }}</h3>
    <h3>列表中第一个人的名字是{{ firstPersonName }}</h3>
    <input type="text" name="" id="" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addWang">添加兴旺的人</button>
    <button @click="addPersonServer">添加一个随机的人</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { nanoid } from 'nanoid';
export default {
  name: "Person",
  data () {
    return {
      name: ""
    }
  },
  computed: {
    // personList () {
    //   return this.$store.state.personList
    // },
    ...mapState('personAbout', ['personList']),
    ...mapState('countAbout', ['sum']),
    firstPersonName () {
      console.log('@', this.$store);
      return this.$store.getters['personAbout/firstPersonName'];
    }
  },
  methods: {
    add () {
      const personObj = {
        id: nanoid(),
        name: this.name
      }
      this.$store.commit('personAbout/ADD_PERSON', personObj);
      this.name = "";
      console.log('@', personObj)
    },
    addWang () {
      const personObj = {
        id: nanoid(),
        name: this.name
      }
      this.$store.dispatch('personAbout/addPersonWang', personObj);
      this.name = "";
      console.log('@', personObj)
    },
    addPersonServer () {
      this.$store.dispatch('personAbout/addPersonServer');
    }
  }
}
</script>

<style>
</style>