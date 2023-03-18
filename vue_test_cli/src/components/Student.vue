<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>当前数值为{{ number }}</h2>
    <button @click="add">当我number加yi</button>
    <button @click="sendStudentName">点我学生名给app</button>
    <button @click="unbind">解绑selfEvent</button>
    <button @click="death">销毁vc实例对象</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data () {
    return {
      name: '张三',
      sex: '男',
      number: 0
    }
  },
  methods: {
    sendStudentName () {
      //出发student组件实例身上的onlyWjt事件
      this.$emit('selfEvent', this.name, 555, 33)
      // this.$emit('click')
    },
    unbind () {
      //解绑一个自定义事件
      this.$off(['selfEvent']);//用数组解绑多个自定义事件
      this.$off();//解绑所有的自定义事件
    },
    add () {
      console.log('@', '被调用了');
      this.number++;
    },
    death () {
      this.$destroy();//销毁了当前vc实例
    }
  }
}
</script>
<style scoped>
.student {
  background-color: blue;
  padding: 5px;
  margin-top: 30px;
}
</style>