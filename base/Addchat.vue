<template>
  <div class="addchat" @keydown.ctrl.13 = 'addChat(comment);blur1.blur();blur2.blur()'>
      <p>用户名</p>
      <input type="text" placeholder = "用户名" v-model.trim = 'comment.name' ref = 'blur1'>
      <p>评论内容</p>
      <textarea placeholder = "评论内容" v-model.trim = 'comment.say' ref = 'blur2'></textarea>
      <button @click = 'addChat(comment);blur1.blur();blur2.blur()'>提交</button>
  </div>
</template>
<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default{
  data () {
    return {
      blur1: null,
      blur2: null
    }
  },
  methods: {
    ...mapActions(['addChat'])
  },
  computed: {
    ...mapState(['comment'])
  },
  created: function() {
　　this.$nextTick(() => {
      this.blur1 = this.$refs.blur1
      this.blur2 = this.$refs.blur2
　　})
  }
}
</script>
<style scoped>
  button,input{
    -webkit-appearance:none;
  }
  .addchat p{
    margin: 0;
    padding: 0;
    font-weight: bold;
    font-size: 14px;
  }
  .addchat{
    width: 350px;
    height: 300px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .addchat input[type = 'text']{
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 12px;
    margin: 5px 0 15px 0;
    padding: 10px;
    box-sizing: border-box;
    outline: none;
  }
  textarea{
    height: 120px;
    border-radius: 5px;
    padding: 10px;
    outline: none;
    box-sizing: border-box;
    margin: 5px 0 15px 0;
    resize:none;
  }
  button{
    background: #fff;
    width: 50px;
    height: 25px;
    border: 1px solid #ccc;
    outline: none;
    cursor: pointer;
  }
</style>
