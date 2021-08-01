<template>
  <el-row :gutter="10" justify="space-between">
    <el-col :span="18" :xs="24">
      <el-row :gutter="10" justify="space-between">
        <el-col :span="8" :xs="24">
          <Welcome class="grid-content row1-1"/>
        </el-col>
        <el-col :span="16" :xs="24">
          <el-row :gutter="10" justify="space-between">
            <el-col :span="12">
              <leftover class="grid-content row1-2"
                        title="账户余额"
                        :num="accountLeft"
                        btnleft="充值记录"
                        btnright="消费记录"
                        @leftClick="accountInRecord"
                        @rightClick="accountOutRecord"/>
            </el-col>
            <el-col :span="12">
              <leftover class="grid-content row1-2"
                        title="剩余码量"
                        :num="codeNum"
                        btnleft="立即购买"
                        btnright="购买记录"
                        @leftClick="codeBuy"
                        @rightClick="codeBuyRecord"/>
            </el-col>
          </el-row>
          <el-row>
            <NumTable class="grid-content row2-2"/></el-row>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
        <home-chart class="grid-content row3-1"/>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="6" :xs="24">
      <el-row :gutter="10" justify="space-between">
        <el-col ><button class="button row1-2-1_4">企业型入口</button></el-col>
        <el-col ><home-todo class="grid-content row1-2-3_4"/></el-col>
        <el-col ><home-entrance class="grid-content row2-2"/></el-col>
        <el-col ><home-ranking class="grid-content row3-1"/></el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
  import Welcome from "./child/Welcome";
  import Leftover from "components/content/Leftover";
  import NumTable from "./child/NumTable";
  import DemoChart from "components/content/chart/DemoChart";
  import HomeChart from "./child/HomeChart";
  import HomeTodo from "./child/HomeTodo";
  import HomeEntrance from "./child/HomeEntrance";
  import HomeRanking from "./child/HomeRanking";
  export default {
    name: "Home",
    components:{
      HomeChart,
      Welcome,
      Leftover,
      NumTable,
      DemoChart,
      HomeTodo,
      HomeEntrance,
      HomeRanking
    },
    data(){
      return{
        balance:12500,
        codeNum:108766
      }
    },
    computed:{
      accountLeft(){
        return '￥'+this.balance.toFixed(2)
      }
    },
    methods:{
      accountInRecord(){
        console.log('单击充值记录')
      },
      accountOutRecord(){
        console.log('单击消费记录')
      },
      codeBuy(){
        console.log('单击立即购买')
      },
      codeBuyRecord(){
        console.log('单击购买记录')
      }
    }
  }
</script>

<style lang="less" scoped>
  .el-row {

  }
  .el-col {
    border-radius: 4px;
    margin-bottom: 10px;
    /*&:last-child {*/
    /*  margin-bottom: 0;*/
    /*}*/
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    background-color: #fff;
    padding: 10px;
  }
  .button{
    border-radius: 4px;
    background-color: #000;
    color: #fff;
    width: 100%;
    font-size: 14px;
  }
  .row1-1{
    height: 330px;
  }
  .row1-2{
    height: 130px;
  }
  .row1-2-1_4{
    height: 30px;
  }
  .row1-2-3_4{
    height: 90px;
  }
  .row2-2{
    height: 190px;
  }
  .row3-1{
    height: 400px;
  }
</style>
