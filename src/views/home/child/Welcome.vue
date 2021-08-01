<template>
  <div>
    <div class="hello">
      <img :src="info.conpanylogo ? info.conpanylogo :require('../../../assets/img/companylogo.png')"/>
      <div class="hello-info">
        <div>
          <span class="hello-com">{{info.name}},您好！</span>
          <el-button type="text" class="hello-change">编辑资料</el-button>
        </div>
        <div class="hello-phone">{{phonenum}}</div>
      </div>
    </div>
    <div class="company">
      <div>
      <div>
        企业名称：{{info.name}}
        <span class="isnotAuth" :class="{'isAuth': info.isAuth}">{{ info.isAuth?'已认证':'未认证'}}</span>
      </div>
      <div>
        所属代理：{{info.agent}}
      </div>
      </div>
    </div>
    <div class="company-number">
      <div>
      <p>企业前缀</p>
      <div>{{info.companyNum}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "welcome",
    data(){
      return{
        info:{'name':'某某某科技有限公司','phone':'13512345678',
          'conpanylogo':'',
          'isAuth':'True','agent':'某某某某代理有限公司','companyNum':'88.118.1234'}
      }
    },
    computed:{
      phonenum(){
        return this.info.phone.slice(0,3)+'****'+this.info.phone.slice(7)
      }
    }
  }
</script>

<style lang="less" scoped>
  .hello {
    align-items: center;
    height: 100px;
    position: relative;
    display: flex;
    >  img{
      width: 40px;
      height: 40px;
    }
  }
  .hello-info{
    padding: 0 3px;
    > div{
      display: flex;
    }
  }
  .hello-com{
    font-size: 13px;
    font-weight: 700;
    color: #000;
    flex: 1;
    line-height: 18px;
  }
  .hello-phone{
    display: block;
    font-size: 10px;
  }
  .hello-change{
    font-size: 11px;
  }
  .company{
    position: relative;
    font-size: 12px;
    height: 80px;
    display: flex;
    align-items: center;
    border-width: 1px 0;
    border-style: solid;
    border-color: rgba(100,100,100,.1);
    >div{
      position: relative;
      display: block;
      >div{
        line-height: 27px;
      }
    }
  }
  .isnotAuth{
    background-color: #f13e3a;
    color: #fff;
    font-size: 10px;
    padding: 3px;
  }
  .isAuth {
    background-color: #138375;
  }
  .company-number{
    position: relative;
    display: flex;
    align-items: center;
    height: 120px;
    >div{
      width: 100%;
      >p{
        text-align: center;
        display: block;
        margin-bottom: 10px;
      }
      >div{
        background-color: #f6f6f6;
        text-align: center;
        line-height: 36px;
        font-weight: 900;
        color: #000;
      }
    }
  }

</style>
