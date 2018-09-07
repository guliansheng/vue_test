<template>
  <div id="app">
    <router-link to = '/home'>Home</router-link>
    <router-link to = '/message'>Message</router-link>
    <router-view></router-view>
  </div>
</template>
<style>
#app {
  font-family: 微软雅黑;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
