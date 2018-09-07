<template>
  <!-- 3. 使用组件标签 -->
  <div class="message">
    <Addchat/>
    <List/>
  </div>
</template>
<script>
//  1.引入组件
import Addchat from '../base/Addchat.vue'
import List from '../base/List.vue'
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  //  2.映射组件标签
  components: {
    Addchat, List
  },
  computed:{
    ...mapState(['comments'])
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
