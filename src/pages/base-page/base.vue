/**
**  页面基础类
 */
<template>
  <div class="m-page">
    <div class="page-header">
        <p class="page-title">{{title}}</p>
    </div>
    <div class="page-content">
        <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "m-base",
  props: ["title"]
}
</script>
<style lang="scss" scoped>
@import './base'
</style>
