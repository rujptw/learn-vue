<template>
  <div id="app">
    <hello-world>
      <template slot-scope="datas">
        <ul>
          <li v-for="(item,index) in datas.testdata" :key="index + 'tree'">
            {{ item }}
          </li>
        </ul>
      </template>
      <p slot="test2">we dont known enough information about this machine</p>
      <p>i am coming</p>
    </hello-world>
  </div>
</template>

<script>
  import HelloWorld from "./components/HelloWorld";

  export default {
    name: "App",
    components: {
      HelloWorld
    }
  };
</script>

<style lang="stylus" scoped>
   #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #1983ee0c;
    margin-top: 60px;
  }
</style>
