<template>
  <div class="footer-nav">
    <router-link tag="div" class="nav-item" :to="{name: 'home'}">
      <span class="nav-icon"><i class="fa fa-heart"></i></span>
      <p class="nav-name">首页</p>
    </router-link>
    <router-link tag="div" class="nav-item" :to="{name: 'activity'}">
      <span class="nav-icon"><i class="fa fa-tag"></i></span>
      <p class="nav-name">活动</p>
    </router-link>
    <router-link tag="div" class="nav-item" :to="{name: 'share'}">
      <span class="nav-icon"><i class="fa fa-share-alt"></i></span>
      <p class="nav-name">分享</p>
    </router-link>
    <router-link tag="div" class="nav-item" :to="{name: 'order'}">
      <span class="nav-icon"><i class="fa fa-file-text"></i></span>
      <p class="nav-name">订单</p>
    </router-link>
    <router-link tag="div" class="nav-item" :to="{name: 'user'}">
      <span class="nav-icon"><i class="fa fa-user"></i></span>
      <p class="nav-name">我</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'footer-nav',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/common/less/variable.less';

  .footer-nav {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    border-top: 1px solid @color-border;
    background-color: @color-background;
    .nav-item {
      position: relative;
      flex: 1;
      text-align: center;
      font-size: @fontsize-small;
      color: @color-subcolor;
      .nav-icon {
        display: inline-block;
        padding-top: 8px;
        height: 20px;
        font-size: @fontsize-large-xxx;
      }
      .nav-name {
        position: absolute;
        height: 12px;
        line-height: 12px;
        padding-bottom: 8px;
        bottom: 0;
        left: 0;
        right: 0;
        color: @color-subcolor;
      }
      &.router-link-active {
        color: @color-theme;
        .nav-name {
          color: @color-theme;
        }
      }
    }
  }
</style>
