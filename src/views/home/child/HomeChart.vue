<template>
  <div>
    <div class="home-title">标识统计趋势图</div>
    <div class="time">
      <el-radio-group v-model="rstTime" size="mini" fill="#014da1">
        <el-radio-button label="近7天"></el-radio-button>
        <el-radio-button label="近30天"></el-radio-button>
        <el-date-picker
          v-model="otherTime"
          type="daterange"
          range-separator="至"
          start-placeholder="开始月份"
          end-placeholder="结束月份"
          size="mini" class="otherTime"
        >
        </el-date-picker>
      </el-radio-group>
    </div>
    <demo-chart class="info-chart"></demo-chart>
  </div>
</template>

<script>
  import DemoChart from "components/content/chart/DemoChart";
  export default {
    name: "HomeChart",
    components: {
      DemoChart
    },
    data(){
      return{
        rstTime:'近7天',
        otherTime:''
      }
    }
  }
</script>

<style scoped>
  .time{
    margin:20px 0;
  }
  .el-radio-group{
    align-items: center;
    display: flex;
    font-size: 0;
  }
  .otherTime{
    margin-left: 20px;
  }
  .info-chart{
  }
</style>
