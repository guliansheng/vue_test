export default {
  evenOrOdd (state) { //不需要调用, 只需要读取属性值
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}