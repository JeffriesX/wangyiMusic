<template>
    <div class="home">
        <!-- 头部 -->
      <div class="nav-bar">
        <div class="icon icon-left">
          <van-icon name="wap-nav" />
        </div>
        <div class="middleText">
        <router-link to="/user">我的</router-link>
        <router-link to="/find">发现</router-link>
        <router-link to="/cloud">云村</router-link>
        <router-link to="/music">音乐</router-link>
        </div>
        <div class="icon icon-right">
          <van-icon name="search" />
        </div>
      </div>

      <!-- 二级路由出口 -->
      <router-view> </router-view>
    </div>
  </template>

<script>
export default {
  name: 'layoutIndex'
}
</script>

<style lang="less" scoped>
  //顶部
  .nav-bar{
    height: 50px;
    margin: 10px  0px;
    padding: 0px 10px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    .icon{
      height: 35px;
      color: black;
      font-size: 26px;
    }
    .middleText{
      font-size: 18px;
      width: 70%;
      // color: black;
      display: flex;
      justify-content: space-around;
      a{
        color: black;
      }
      a.router-link-active{
    font-weight: 900;
    color: black;
  }
    }
  }
  </style>
