<template>
  <div class="addchat" @keydown.ctrl.13 = 'addChat'>
      <p>用户名</p>
      <input type="text" placeholder = "用户名" v-model.trim = 'comment.name'>
      <p>评论内容</p>
      <textarea placeholder = "评论内容" v-model.trim = 'comment.say'></textarea>
      <button @click = 'addChat'>提交</button>
  </div>
</template>
<script>
export default{
  data () {
    return {
      comment: {}
    }
  },
  methods: {
    addChat () {
      if (!this.comment.name || !this.comment.say) {
        alert('用户名和内容不能为空')
        return
      }
      this.addComment(this.comment)
      this.comment = {}
    }
  },
  props: {
    addComment: {
      type: Function
    }
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
