<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="hanldeCheck(todo.id)"
      />
      <!-- 虽然能够实现，但是不太建议这样写，因为这样是对props属性里面的对象里面的值最修改，但是vue不允许修改props中数据 -->
      <!-- <input type="checkbox" v-model="todo.done" />  -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="deleteTodoByid(todo.id)">
      删除
    </button>
  </li>
</template>

<script>
export default {
  name: 'MyItem',
  //生命接受todo对象
  props: ['todo'],
  methods: {
    hanldeCheck (id) {
      // 通知App组件将对应的todo对象的done值取反
      // this.checkTodo(id);
      this.$bus.$emit('checkTodo', id);
    },
    deleteTodoByid (id) {
      if (confirm("确定删除吗？")) {
        // this.deleteTodo(id);
        this.$bus.$emit('deleteTodo', id);
      }
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: grey;
}
li:hover button {
  display: block;
}
</style>