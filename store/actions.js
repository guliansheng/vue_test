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
  },
  // Message 添加留言
  addChat ({commit,state},comment) {
    if (!comment.name || !comment.say) {
      alert('用户名和内容不能为空')
      return
    }
    commit('ADDCHAT',comment)
  },
  // Message 删除留言
  removeComment ({commit,state},index) {
      if (confirm('确认删除评论吗?')) {
        state.comments.splice(index, 1)
      }
    }
}
