<template>
  <v-chart :option="option" class="vchart" :autoresize="true" />
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
    props:{
      option:{}
    },
    data() {
      return {

      };
    },
    };
</script>

<style scoped>

</style>
