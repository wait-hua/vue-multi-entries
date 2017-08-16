<template>
    <div class="m-root">
      <div class="m-nav">
        <router-link class="nav-title" :to="'/'">管理后台</router-link>
        <div class="nav-content">
          <span class="f-fr">
              <span>{{userName}}</span>
              <a href="/api/home/logout" class="nav_logout"><i class="fa fa-power-off"></i></a>
          </span>
        </div>
      </div>
      <div class="m-content">
        <m-sidebar :menus="sideMenus"></m-sidebar>
        <div class="m-container">
          <router-view class="m-router"></router-view>
        </div>
      </div>
    </div>
</template>

<script>
import SlideBar from 'components/sidebar/sidebar';
export default {
  name: 'app',
  components: {
    'm-sidebar': SlideBar
  },
  data () {
    return {
      userName: null
    }
  },
  computed: {
      sideMenus () {
        return [{
          text: "模块管理",
          href: {name: "module"}
        }]
      }
  }
}
</script>

<style lang="scss">
@import './common/reset';
@import './common/common';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
