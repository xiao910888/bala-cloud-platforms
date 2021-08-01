import Vue from 'vue'
import VueRouter from "vue-router";

import Home from "../views/home/Home";
import Identi from "../views/identi/Identi";

//1.安装插件
Vue.use(VueRouter)

//2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/identi',
    component: Identi
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

export  default router
