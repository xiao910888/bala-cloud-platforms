<template>
  <v-chart :option="option" />
</template>

<script>
  import { use } from "echarts/core";
  import { CanvasRenderer } from "echarts/renderers";
  import { LineChart } from "echarts/charts";
  import {
    TitleComponent,
    GridComponent,
    LegendComponent
  } from "echarts/components";
  import VChart, { THEME_KEY } from "vue-echarts";

  use([
    CanvasRenderer,
    TitleComponent,
    LegendComponent,
    LineChart,
    GridComponent
  ]);

  export default {
    name: "DemoChart",
    components: {
      VChart
    },
    provide: {
    },
    data() {
      return {
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
      };
    },

    methods: {
      setEcharts() {
        let DemoChart = document.getElementById("DemoChart");
        DemoChart.style.width = window.innerWidth - 290 + "px";  //初始化echarts图表宽度
        this.DemoChart = this.$echarts.init(DemoChart)
        this.DemoChart.setOption(this.option);
        let self = this;
        window.addEventListener("resize", () => {  // 通过resize方法来重设图表宽度
          let DemoChart = document.getElementById("DemoChart");
          DemoChart.style.width = window.innerWidth - 290 + "px";
          self.DemoChart.resize();
        });
      }
    },
    mounted() {
      this.setEcharts();
    },

    };
</script>

<style scoped>
</style>
