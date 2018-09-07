// 状态对象
export default {
  count: 0,
  comment: {},
  comments: JSON.parse(localStorage.getItem('comments')) || '[]'
}
