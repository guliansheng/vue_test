import Vue from 'vue'
import Router from 'vue-router'
import Message from '../components/Message.vue'
import Home from '../components/Home.vue'
import Countnum from '../components/Countnum.vue'
import Menu from '../components/Menu.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home,
      children: [
        {path: 'countnum', component: Countnum},
        {path: 'menu', component: Menu}
      ]
    },
    {
      path: '/message',
      component: Message
    }
  ]
})
