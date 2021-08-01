<template>
  <div>
    <div class="home-title">待办事项</div>
    <table>
      <td>
        <tr class="home-table-num">{{todo.ask}}</tr>
        <tr >售后工单</tr>
      </td>
      <td>
        <tr class="home-table-num">{{todo.after}}</tr>
        <tr >询价工单</tr>
      </td>
      <td>
        <tr class="home-table-num">{{todo.wait}}</tr>
        <tr >待联系</tr>
      </td>
    </table>
  </div>
</template>

<script>
  export default {
    name: "HomeTodo",
    data(){
      return{
        todo:{'after':0,'ask':0,'wait':0}
      }
    }
  }
</script>

<style scoped>
  table{
    margin-top: 5px;
    width: 100%;
    text-align: center;
  }
</style>
