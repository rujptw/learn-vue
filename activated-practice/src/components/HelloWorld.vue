<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(item,index) in reportData" :key="index">
        {{item.from}}--{{item.to}}--{{item.fee}}
      </li>
    </ul>
      <Other></Other>
    <router-link 
    tag="button"
    :to="{name:'another'}"
    >another</router-link>
  </div>
</template>

<script>
import {user} from "api/index"
import Other from '@/components/other'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      reportData:[]
    }
  },
  components:{
    Other,
  },
  created(){
    console.log("created")
  },
  mounted(){
    console.log("mounted")
    user.monthlyReport_get().then(res=>{
      let code = res.data.code;
      if(code==="SUCCESS"){
        this.reportData = res.data.data.rows || []
      }
    })
  },
  beforeUpdate(){
    console.log("beforeUpdate")
  },
  updated(){
    console.log("updated")
  },
  beforeDestroy(){
    console.log("beforeDestroy")
  },
  destroyed(){
    console.log("destroyed")
  },
  activated(){
    user.monthlyReport_get().then(res=>{
      let code = res.data.code;
      if(code==="SUCCESS"){
        this.reportData = res.data.data.rows || []
      }
    })
  },
  deactivated(){
    console.log("%cI am deactivated","color:orange")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
