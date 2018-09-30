<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <template v-for="(item,index) in arr">
      <h2 :key="index">
        {{item.cityName}}
        <!-- 对象键名出现-符号，必须使用中括号使用法，才能使用，否则会报错
        （因为js会解析错误,为了不出错，js尽量使用驼峰命名 -->
        {{item['gdp-level']}}
      </h2>
    </template>
    
    <ul>
      <li v-for="(item,index) in reportArr" :key="index">
        <p>从{{item.from}}到{{item.to}},费用是{{item.fee}}</p>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li v-for="(item,index) in userInfor" :key="index">
        {{item}}
      </li>
      
    </ul>
  </div>
</template>

<script>
import {mock_instance} from './mock/index.js'
let {function_get,statistics_policies_get,session_post,monthlyReport_get}  =  mock_instance
export default {
  name: 'app',
  data () {
    return {
      msg: "easy-mock练习",
      arr:'',
      reportArr:[],
      userInfor:[]
    }
  },
  mounted(){
  function_get('?time=201809')
    .then(res=>{
      console.log(res)
      let code = res.data.code
      if(code==="SUCCESS"){
        console.log(res.data.data)
        this.arr = res.data.data.name
      }
    })
    .catch(err=>{
      console.log("err",err)
    })
  monthlyReport_get().then(res=>{
      console.log(res.data.data.rows)
      this.reportArr = res.data.data.rows
    })
  session_post().then(res=>{
    this.userInfor = res.data.data
  })  
},

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
