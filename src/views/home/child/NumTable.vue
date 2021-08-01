<template>
  <div>
    <table rules="cols">
      <td v-for="item in info">
        <div v-for="i in item" >
          <tr class="num">{{i.num}}</tr>
          <tr class="title">{{i.title}}</tr>
        </div>
      </td>
    </table>
  </div>
</template>

<script>
  export default {
    name: "NumTable",
    data(){
      return {
        info: [
          [{'title':'今日生码总量','num':0},{'title':'累计生码总量','num':1234}],
          [{'title':'今日扫描总量','num':0},{'title':'累计扫描总量','num':75}],
          [{'title':'今日查验总量','num':0},{'title':'累计查验总量','num':38}],
        ]
      }
    }
  }
</script>

<style scoped>
  table{
    margin-top: 5px;
    width: 100%;
    border-color: rgba(100,100,100,.1);
  }
  td{
    padding-left: 20px;
  }
  tr{
    height: 40px;
    line-height: 40px;
  }
  .num{
    font-size: 21px;
    color: #000;
  }
  .title{

  }
</style>
