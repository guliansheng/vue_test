<template>
  <div>
  <!-- $store.state 和 直接调用 这两种写法都可以显示相关效果 -->
  <p>{{$store.state.count}} , count is {{evenOrOdd}}</p>
  <p>{{count}} , count is {{evenOrOdd}}</p>
  <button @click = 'add'>+</button>
  <button @click = 'reducing'>-</button>
  <button @click = 'increOdd'>偶数+</button>
  <button @click = 'increAsync'>延迟+</button>
  </div>
</template>
<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default{
    methods: {
      ...mapActions(['add', 'reducing', 'increOdd', 'increAsync']) //这种写法必须要求执行的方法名和actions中的名称相同
      // add () {
      //   this.$store.dispatch('add') //触发store中actions对应的add调用
      // },
      // reducing () {
      //   this.$store.dispatch('reducing')
      // },
      // increOdd () {
      //   this.$store.dispatch('increOdd')
      // },
      // increAsync () {
      //   this.$store.dispatch('increAsync')
      // }
    },
    computed: {
      ...mapState(['count']),//获取数据,名称和state中的名字相同
      ...mapGetters(['evenOrOdd'])//获取计算属性的返回值,名字和getters中的名称相同
      // evenOrOdd () {
      //   return this.$store.getters.evenOrOdd //不需要执行,直接读取到属性值即可
      // }
    }
  }
</script>
<style scoped>

</style>
