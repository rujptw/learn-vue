<template>
  <div id="app">
    <div class="top"></div>
    <div class="main" :class="{isFixed:Fixed}"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      Fixed:false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    window.scroll = this.scrollMove
  },
  methods:{
    scrollMove(){
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop>=200){
        this.Fixed = true
      }else{
        this.Fixed = false
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.top{
  height:200px;
  background: aqua;
}
.main{
  height:2000px;
  background:yellowgreen;
}
.isFixed{
  position: fixed;
  top:0;
}
</style>
