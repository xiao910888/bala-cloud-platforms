<template>
  <el-menu
    background-color="#fff"
    text-color="#8c8c8c"
    active-text-color="#014da1"
    :unique-opened="true"
    :router="true">
    <!--一级菜单-->
    <el-menu-item index="/home">
      <template slot="title">
        <i class="iconfont icon-zhuye" ></i>
        <span slot="title">控制台</span>
      </template>
    </el-menu-item>
    <el-submenu  v-for="(item,index) in menulist" :key="index" :index="item.path+' '">
      <template slot="title">
        <i class="iconfont" :class="item.icon"></i>
        <span slot="title">{{item.auName}}</span>
      </template>
      <el-menu-item v-for="(subItem,subIndex) in item.children" :key="subIndex" :index="'/'+subItem.path">
        <template slot="title">
          <i class="iconfont icon-yingyongzhongxin" ></i>
          <span slot="title">{{subItem.auName}}</span>
        </template>
      </el-menu-item>
    </el-submenu>
<!--    <el-submenu index="2">
      &lt;!&ndash;一级菜单的模板区域&ndash;&gt;
      <template slot="title">
        &lt;!&ndash;图标&ndash;&gt;
        <i class="iconfont icon-shuju"></i>
        &lt;!&ndash;文本&ndash;&gt;
        <span>标识管理</span>
      </template>
      <el-menu-item>
        <template slot="title">
          &lt;!&ndash;图标&ndash;&gt;
          <i class="el-icon-location"></i>
          &lt;!&ndash;文本&ndash;&gt;
          <span>二级菜单1</span>
        </template>
      </el-menu-item>
      <el-menu-item>
        <template slot="title">
          &lt;!&ndash;图标&ndash;&gt;
          <i class="el-icon-location"></i>
          &lt;!&ndash;文本&ndash;&gt;
          <span>二级菜单2</span>
        </template>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      &lt;!&ndash;一级菜单的模板区域&ndash;&gt;
      <template slot="title">
        &lt;!&ndash;图标&ndash;&gt;
        <i class="iconfont icon-shuju"></i>
        &lt;!&ndash;文本&ndash;&gt;
        <span>产品管理</span>
      </template>
    </el-submenu>
    <el-submenu index="4">
      &lt;!&ndash;一级菜单的模板区域&ndash;&gt;
      <template slot="title">
        &lt;!&ndash;图标&ndash;&gt;
        <i class="iconfont icon-diannao"></i>
        &lt;!&ndash;文本&ndash;&gt;
        <span>营销管理</span>
      </template>
    </el-submenu>
    <el-submenu index="5">
      &lt;!&ndash;一级菜单的模板区域&ndash;&gt;
      <template slot="title">
        &lt;!&ndash;图标&ndash;&gt;
        <i class="iconfont icon-gouwuche"></i>
        &lt;!&ndash;文本&ndash;&gt;
        <span>商城管理</span>
      </template>
    </el-submenu>
    <el-submenu index="6">
      &lt;!&ndash;一级菜单的模板区域&ndash;&gt;
      <template slot="title">
        &lt;!&ndash;图标&ndash;&gt;
        <i class="iconfont icon-zhibao"></i>
        &lt;!&ndash;文本&ndash;&gt;
        <span>电子质保</span>
      </template>
    </el-submenu>
    <el-submenu index="7">
      &lt;!&ndash;一级菜单的模板区域&ndash;&gt;
      <template slot="title">
        &lt;!&ndash;图标&ndash;&gt;
        <i class="iconfont icon-bd-"></i>
        &lt;!&ndash;文本&ndash;&gt;
        <span>防窜管理</span>
      </template>
    </el-submenu>
    <el-submenu index="8">
      &lt;!&ndash;一级菜单的模板区域&ndash;&gt;
      <template slot="title">
        &lt;!&ndash;图标&ndash;&gt;
        <i class="iconfont icon-lianjie"></i>
        &lt;!&ndash;文本&ndash;&gt;
        <span>消源管理</span>
      </template>
    </el-submenu>
    <el-submenu index="9">
      &lt;!&ndash;一级菜单的模板区域&ndash;&gt;
      <template slot="title">
        &lt;!&ndash;图标&ndash;&gt;
        <i class="iconfont icon-statistic"></i>
        &lt;!&ndash;文本&ndash;&gt;
        <span>统计分析</span>
      </template>
    </el-submenu>
    <el-submenu index="10">
      &lt;!&ndash;一级菜单的模板区域&ndash;&gt;
      <template slot="title">
        &lt;!&ndash;图标&ndash;&gt;
        <i class="iconfont icon-zuzhi"></i>
        &lt;!&ndash;文本&ndash;&gt;
        <span>组织结构</span>
      </template>
    </el-submenu>
    <el-submenu index="11">
      &lt;!&ndash;一级菜单的模板区域&ndash;&gt;
      <template slot="title">
        &lt;!&ndash;图标&ndash;&gt;
        <i class="iconfont icon-yingyongzhongxin"></i>
        &lt;!&ndash;文本&ndash;&gt;
        <span>应用中心</span>
      </template>
    </el-submenu>-->
  </el-menu>
</template>

<script>
  import {getMenuList} from "network/main";

  export default {
    name: "AppAside",
    components:{
      getMenuList
    },
    data(){
      return{
        menulist:[]
      }
    },
    created() {
      this.menulist= [
          {"auName": "标识管理", "icon": "icon-shuju", "path": "Home",
            "children":[{"auName": "导航一", "icon": "icon-gouwuche", "path": "Identi"},
              {"auName": "导航二", "icon": "icon-gouwuche", "path": "2-2"}
            ]},
          {"auName": "产品管理", "icon": "icon-shuju", "path": "3"},
          {"auName": "营销管理", "icon": "icon-diannao", "path": "4"},
          {"auName": "商城管理", "icon": "icon-gouwuche", "path": "5"},
          {"auName": "电子质保", "icon": "icon-zhibao", "path": "6"},
          {"auName": "防窜管理", "icon": "icon-bd-", "path": "7"},
          {"auName": "消源管理", "icon": "icon-lianjie", "path": "8"},
          {"auName": "统计分析", "icon": "icon-statistic", "path": "9"},
          {"auName": "组织结构", "icon": "icon-zuzhi", "path": "10"},
          {"auName": "应用中心", "icon": "icon-yingyongzhongxin", "path": "11"}
      ]
     // this.getMenuList()
    },
    methods:{
/*      getMenuList() {
        getMenuList().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      }*/
    }
  }
</script>

<style scoped>
  .el-menu{
    border-right: none;
  }
  .el-menu i{
    padding: 3px;
  }
  .el-menu span{
    margin-left: 5px;
  }
</style>
