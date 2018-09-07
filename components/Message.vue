<template>
  <!-- 3. 使用组件标签 -->
  <div class="message">
    <Addchat :addComment = 'addComment'/>
    <List :comments = 'comments'/>
  </div>
</template>
<script>
//  1.引入组件
import Addchat from '../base/Addchat.vue'
import List from '../base/List.vue'
export default {
  data () {
    return {
      comments: JSON.parse(localStorage.getItem('comments')) || '[]'
    }
  },
  methods: {
    addComment (comment) {
      this.comments.unshift(comment)
    }
  },
  //  2.映射组件标签
  components: {
    Addchat, List
  },
  watch: {
    comments: {
      handler () {
        localStorage.setItem('comments', JSON.stringify(this.comments))
      },
      deep: true
    }
  }
}
</script>
<style scoped>
.message {
  margin: 30px auto;
  width: 800px;
  height: 300px;
  display: flex;
}
</style>
