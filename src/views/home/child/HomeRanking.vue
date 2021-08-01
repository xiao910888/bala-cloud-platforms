<template>
  <div>
    <div class="home-title">标识排行</div>
    <table >
      <tr class="table-title" >
        <th colspan="3">标识信息</th>
        <th>扫码次数</th>
      </tr>
      <tr v-for="item in ranking" class="rank-item">
        <td >
          <img v-if="item.ranking<4"
               :src='require("../../../assets/svg/jiangpai"+item.ranking+".svg")'
               class="info-icon"/>
        </td>
        <td class="info-img">
          <el-image
            style="width: 30px; height: 30px"
            :src="item.img"
            ></el-image>
        </td>
        <td class="info-detail">
          <div>{{item.code}}</div>
          <div>{{item.name}}</div>
        </td>
        <td class="info-num">
          <span>{{item.num}}</span>次
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "HomeRanking",
    data(){
      return{

        ranking:[
          {'ranking':1,'img':'http://cdn.178hui.com/upload/2016/0802/15485692709.jpg','code':'88.188.19637/2021012345678901234455678','name':'九三维生素A大豆油','num':16},
          {'ranking':2,'img':'http://cdn.178hui.com/upload/1920/2021/0726/01220537083.jpg','code':'88.188.19637/2021098765432133466789980','name':'五大冷矿泉水[测试]','num':13},
          {'ranking':3,'img':'http://cdn.178hui.com/upload/1920/2021/0725/14420586459.jpg','code':'88.188.19637/2021012543234455677821098','name':'不知名商品一','num':12},
          {'ranking':4,'img':'http://cdn.178hui.com/upload/1920/2021/0726/17400489831.jpg','code':'88.188.19637/2021012345455677821254378','name':'不知名商品二','num':10},
          {'ranking':5,'img':'http://cdn.178hui.com/upload/1920/2021/0727/11563330828.jpg','code':'88.188.19637/2021012213346677782125678','name':'又一个不知名商品','num':7},
          {'ranking':6,'img':'http://cdn.178hui.com/upload/1920/2021/0731/00270475363.jpg','code':'88.188.19637/2021044556773444545567078','name':'还是不知名商品','num':6},
        ]
      }
    },
    methods:{
    }
  }
</script>

<style lang="less" scoped>
  table{
    width: 100%;
    text-align: center;
  }
  .table-title{
    background-color: #f6f6f6;
  }
  .rank-item{
    border-bottom: 1px solid rgba(100,100,100,.1);
    height: 50px;
  }
  .info-icon{
    width: 18px;
    height: 18px;
  }
  .info-detail{
    >div{
      width: 130px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      line-height: 22px;
    }
  }
  .info-num{
    color: #e6a23c;
    >span{
      font-size: 18px;
    }
  }
</style>
