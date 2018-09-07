//  入口js:创建vue实例
import Vue from 'vue'
import App from './App' // 引入App.vue文件
import router from './router' // 默认找到router文件夹中的index.js
import store from './store'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: {App},
  template: '<App/>',
  router,
  store //所有组件对象都多了一个属性: $store
})
