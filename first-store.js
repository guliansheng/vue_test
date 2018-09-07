import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  count:0
}
const mutations = {
  ADD (state) {
    state.count++
  },
  REDUCING (state) {
    state.count--
  }
}
const actions = {
  add ({commit}) {
    //提交增加的mutation,交给对应的mutations中的ADD执行
    commit('ADD')
  },
  reducing ({commit}) {
    //提交减少的mutation
    commit('REDUCING')
  },
  //可以进条件判断,传入state用来获取数据
  increOdd ({commit,state}) {
    if(state.count%2 ==0){
      commit('ADD')
    }
  },
  //实现异步action,可以在action中直接执行异步代码
  increAsync ({commit}) {
    setTimeout(()=>{
      commit('ADD')
    },1000)
  }
}
const getters = {
  evenOrOdd (state) { //不需要调用, 只需要读取属性值
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}
export default new Vuex.Store({
  state,//状态对象
  mutations,//包含多个更新state函数的对象
  actions,//包含多个事件回调函数的对象
  getters //包含多个getter计算属性函数的对象
})
