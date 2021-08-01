import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
import less from 'less'
import './assets/icon/iconfont.css';
import router from "./router/router";


Vue.use(ElementUI)
Vue.use(less)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
