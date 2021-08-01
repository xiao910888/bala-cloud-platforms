<template>
  <div>
    <div class="home-title">标识统计趋势图</div>
    <div class="time">
      <el-radio-group v-model="rstTime" size="mini" fill="#014da1" @change="timeChange()">
        <el-radio-button label="近7天"></el-radio-button>
        <el-radio-button label="近30天"></el-radio-button>
        <el-date-picker
          v-model="rstTime"
          type="daterange"
          range-separator="至"
          start-placeholder="开始月份"
          end-placeholder="结束月份"
          size="mini" class="otherTime"/>
      </el-radio-group>
<!--      <div>{{rstTime}}</div>-->
    </div>
    <demo-chart class="info-chart" :option="option"></demo-chart>
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
        otherTime:'',
        option: {
          legend: {
            data: ['生码数量', '扫描数量', '查验数量']
          },
          xAxis: {
            type: 'category',
            boundaryGap:false,
            data: ['7.25', '7.26', '7.27', '7.28', '7.29', '7.30', '7.31']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '生码数量',
              data: [2,12,5, 1, 5,11,4],
              type: 'line',
              smooth: true
            },
            {
              name: '扫描数量',
              type: 'line',
              stack: '总量',
              data: [2,11,4, 2, 5,11,3],
              smooth: true
            },
            {
              name: '查验数量',
              data: [1,12,5, 1, 4,11,3],
              type: 'line',
              smooth: true
            }
          ]
        }
      }
    },
    methods:{
      timeChange(){
        if(this.rstTime=='近7天'){
          this.option.xAxis.data= ['7.25', '7.26', '7.27', '7.28', '7.29', '7.30', '7.31']
          this.option.series[0].data=[ 2, 12, 5, 1, 5, 11, 4]
          this.option.series[1].data=[ 2, 11, 4, 2, 5, 11, 3]
          this.option.series[2].data=[ 1, 12, 5, 1, 4, 11, 3]
        }
        else if(this.rstTime=='近30天'){
          this.option.xAxis.data= ['7.18', '7.19', '7.20', '7.21', '7.22', '7.23', '7.24','7.25', '7.26', '7.27', '7.28', '7.29', '7.30', '7.31']
          this.option.series[0].data=[ 2, 12, 5, 1, 5, 11, 4, 2, 1, 5, 8, 5, 11, 4]
          this.option.series[1].data=[ 2, 11, 4, 2, 5, 11, 3, 5, 1, 4, 11, 3, 8, 5]
          this.option.series[2].data=[ 1, 12, 5, 1, 4, 11, 3, 2, 0, 4, 12, 5, 11, 3]
        }
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
    height: 330px
  }
</style>
