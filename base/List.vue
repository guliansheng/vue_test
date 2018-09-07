<template>
  <div class="list">
    <p>评论回复:</p>
    <ul class="msgList">
        <h2 v-if = '!comments.length'>暂无评论,请添加评论!!!</h2>
        <li v-for = '(val, index) in comments' :key = 'index'>
          <div class="msgName">{{val.name}} :</div>
          <div class="msgContent">{{val.say}}</div>
          <button @click = 'removeComment(index)'>删除</button>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    comments: {
      type: Array
    }
  },
  methods: {
    removeComment (index) {
      if (confirm('确认删除评论吗?')) {
        this.comments.splice(index, 1)
      }
    }
  }
}
</script>
<style scoped>
  ul,li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .list {
    width: 500px;
    height: 300px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
  .list p {
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-weight: bold;
  }
  .msgList {
    margin: 10px 0;
    height: 200px;
    box-sizing: border-box;

  }
  .msgList li {
    width: 100%;
    height: 80px;
    margin: 10px 0;
    border: 1px solid #ccc;
    box-sizing: border-box;
    padding: 10px;
    position:relative;
    border-radius: 5px;
  }
  .msgName {
    height: 30px;
  }
  .msgContent {
    text-indent: 2em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .msgList li button{
    width: 40px;
    height: 20px;
    border: 1px solid #ccc;
    position: absolute;
    top: -1px;
    right: 5px;
    text-align: center;
    color: #2E8CD3;
    font-size: 12px;
    line-height: 20px;
    cursor: pointer;
  }
</style>
