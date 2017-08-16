<template>
    <div class="m-root">
      <!-- 导航栏 -->
      <div class="m-nav">
        <router-link class="nav-title" :to="'/'">管理后台</router-link>
        <div class="nav-content cl-fl">
          <div class="f-fr nav-name">
            <span>{{userName}}</span>
            <a href="/api/home/logout" class="nav_logout"><i class="fa fa-power-off"></i></a>
          </div>
        </div>
      </div>
      <!-- END 导航栏 -->
      <div class="m-content">
        <!-- 左侧-侧边栏 -->
        <m-sidebar :menus="sideMenus"></m-sidebar>
        <div class="m-container">
          <!-- 右侧-内容 -->
          <router-view class="m-router"></router-view>
        </div>
      </div>

      <!-- index 页面 -->
      <!-- <component :is="currentView"></component> -->
      <!-- router-link to对应的为vueRouter里的name -->
      <!-- <router-link v-for="item in sideBars" :to="item.href" :key="item.id">{{item.text}}</router-link>
      <div>
        <router-view></router-view>
      </div> -->
    </div>
</template>

<script>

import SlideBar from 'components/sidebar/sidebar'

export default {
  name: 'app',
  components: {
    'm-sidebar': SlideBar
  },
  data () {
    return {
      // currentView: Module,
      userName: "Friday",
      sideMenus:[
        {href: "module", text:"模块管理"},
        {href: "rule", text: "规则管理"}
      ]

    }
  },
  computed: {

  }
}
</script>

<style lang="scss">
// @import '../../common/reset';
// @import '../../common/common';
@import 'reset';

@import 'common';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.cl-fl{
  @include clearfix;
}
</style>
