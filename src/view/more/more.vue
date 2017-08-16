<template>
    <div class="m-root">
      More 页面
      <div class="m-bg"><i class="i-icon i-icon-company"></i></div>
    </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  },
  data () {
    return {
      userName: null
    }
  },
  computed: {

  }
}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.m-bg{
    width: 300px;
    height: 30px;
    background-color: #f8f8f8;
}
</style>
