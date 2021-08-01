<template>
  <div>
    <div class="home-title">常用快捷入口</div>
    <div class="btn">
      <el-link href="" class="btn-entrance">标识明细</el-link>
      <el-link href="" class="btn-entrance">标识生成</el-link>
      <el-link href="" class="btn-entrance">产品管理</el-link>
      <el-link href="" class="btn-entrance">产品修改</el-link>
      <el-link href="" class="btn-entrance">扫码统计</el-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeEntrance"
  }
</script>

<style scoped>
  .btn{
    margin-top: 12px;
  }
  .btn-entrance{
    color: #666;
    padding: 5px 0;
    margin: 0;
    display: table;
  }
</style>
