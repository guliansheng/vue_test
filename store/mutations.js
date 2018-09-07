export default {
  ADD (state) {
    state.count++
  },
  REDUCING (state) {
    state.count--
  },
  // 增加留言到comments中,并且将comment置空
  ADDCHAT (state,comment) {
    state.comments.unshift(comment)
    state.comment = {}
  }
}
