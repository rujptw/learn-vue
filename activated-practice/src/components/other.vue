<template>
    <div>
        <router-link :to="{name:'HelloWorld'}" tag="button">{{younger}}</router-link>
    </div>
</template>

<script>
import {user} from "api/index"
export default {
  data(){
      return{
          younger:'son'
      }
  },
  mounted(){
  },
  activated() {
    
  },
  deactivated() {
    
  }
};
</script>

