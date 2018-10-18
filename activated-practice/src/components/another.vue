<template>
    <div>
        <router-link :to="{name:'HelloWorld'}" tag="button">tian</router-link>
    </div>
</template>

<script>
import {user} from "api/index"
export default {
  name:"another",
  data(){
      return{
          younger:''
      }
  },
  mounted(){
  },
  activated() {
    console.log("%cI am activated", "color:red");
  },
  deactivated() {
    console.log("%cI am deactivated", "color:green");
  }
};
</script>

