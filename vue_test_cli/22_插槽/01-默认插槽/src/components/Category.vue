<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽，等着别人来填充 -->
    <slot>默认值，当使用者没传具体结构时，会出现</slot>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['title']
}
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
</style>