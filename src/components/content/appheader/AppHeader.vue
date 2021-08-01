<template>
  <div class="header">
    <div class="left">
      <img src="~assets/logo.png" alt="">
      <span>某某云平台</span>
    </div>
    <div class="center">
      <i class="iconfont icon-table"></i>
      <i class="iconfont icon-shuaxin"></i>
      <span>企业功能</span>
      <span>帮助文档</span>
    </div>
    <div class="right">
      <i class="iconfont icon-tixing"></i>
      <i class="iconfont icon-quanping"></i>
      <img :src="userimg ? '': require(`../../../assets/userpic.png`) " alt="">
      <span>{{name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AppHeader",
    data(){
      return{
        userimg:'',
        name:'某某某科技有限公司'
      }
    }
  }
</script>

<style lang="less" scoped>
  .header{
    position: fixed;
    font-size: 15px;
    width: 100%;
  }
  .left{
    width: 200px;
  }
  div {
    display: flex;
    align-items: center;
   span {
      margin-left: 15px;
    }
  }
  img {
    width: 40px;
    height: 40px;
  }
  .center{
    flex: 1;
    >i{
      margin: 0 20px;
    }
  }
  .right{
    width: 400px;
    >i {
      margin: 0 20px;
    }
  }

</style>
