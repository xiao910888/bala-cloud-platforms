<template>
  <div id="app" class="app">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
    <el-container class="home-container">
      <!--头部区域-->
      <el-header height="56px">
        <app-header/>
      </el-header>
      <el-container>
        <!--侧边区域-->
        <el-aside width="200px">
          <app-aside/>
        </el-aside>
        <!--右边主体区域-->
        <el-main>
          <!--路由占位符-->
          <router-view/>
          <div class="copyright">Copyright © 2021 hello happy Incorporated. All rights reserved.</div>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
import AppHeader from "./components/content/appheader/AppHeader";
import AppAside from "./components/content/appaside/AppAside";
export default {
  name: 'App',
  components: {
    AppAside,
    AppHeader
  }
}
</script>

<style lang="less">
  @import "./assets/css/base.css";
  .app{
    height: calc(100vh);
    overflow-x: hidden;
  }
  .el-header {
    background-color: #014da1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 20px;
    position: absolute;
    width: 100%;
    z-index: 5;
  }
  .el-aside {
    margin-top: 56px;
  }
  .el-main {
    background-color: #f3f3f3;
    position: absolute;
    left: 200px;
    right: 0;
    top: 56px;
    bottom: 0;
    overflow-y: scroll;
  }
  .copyright{
    position: fixed;
    bottom: 0px;
    background-color: #fff;
    margin-left: -20px;
    width: calc(100% - 200px - 20px);
  }
</style>
