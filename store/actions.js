export default {
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