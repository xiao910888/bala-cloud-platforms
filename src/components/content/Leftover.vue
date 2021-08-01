<template>
  <div>
    <div class="home-title">
      {{title}}
    </div>
    <div class="num">
      {{num}}
    </div>
    <div class="btn">
      <el-button type="text" @click.native="leftClick">{{btnleft}}</el-button>
      <el-button type="text" @click="rightClick">{{btnright}}</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "leftover",
    props:{
      title:'',
      num:'',
      btnleft:'',
      btnright:''
    },
    methods:{
      rightClick(){
        this.$emit('rightClick')
      },
      leftClick(){
        this.$emit('leftClick')
      }
    }
  }
</script>

<style lang="less" scoped>
  .num{
    font-size: 21px;
    height: 50px;
    line-height: 70px;
    position: relative;
  }
  .btn{
    color: #409eff;
    position: relative;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
  }
</style>
