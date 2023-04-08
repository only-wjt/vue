<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <button @click="back">后退</button>
      <button @click="foward">前进</button>
      <h2>Vue Router Demo</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    back () {
      this.$router.back();
      console.log('@banner', this.$router);
    },
    foward () {
      this.$router.forward();
    }
  }
}
</script>

<style>
</style> 