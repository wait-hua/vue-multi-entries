<template>
  <div class="m-sidebar">
      <ul class="menu" ref="menu">
          <li v-for="item in menus" :key="item.id">
              <router-link v-if="!item.subMenu" :to="item.href" >{{item.text}}</router-link>
              <template v-else>
                  <a href="#" @click.prevent="toggleMenu">{{item.text}}<i class="fa arrow"></i></a>
                  <ul class="nav-second-level">
                      <li v-for="subItem in item.subMenu" :key="subItem.id">
                          <router-link :to="subItem.href" >{{subItem.text}}</router-link>
                      </li>
                  </ul>
              </template>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'm-sidebar',
  props: ["menus"],
  methods: {
    toggleMenu (e) {
      var _submenu = e.target.nextElementSibling;
      var show = e.target.parentElement.classList.toggle("active");
      _submenu.style.height = show ? (_submenu.scrollHeight + "px") : "";
    },

    _initMenu () {
      if (this.$refs.menu.querySelector(".router-link-active")) {
          var _submenu = this.$refs.menu.querySelector(".router-link-active").parentElement.parentElement;
          if (_submenu.classList.contains("nav-second-level")) {
              _submenu.parentElement.classList.add("active");
              _submenu.style.height = _submenu.scrollHeight + "px";
          }
      }
    }
  },

  created () {
    this.$nextTick(this._initMenu);
  }
}
</script>

<style lang="scss" scoped>
@import './sidebar';
</style>

