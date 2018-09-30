<template>
  <div class='hello'>
      <p class="title">作用域插槽也可以加上name属性,数据由子组件提供</p>
      <slot name="test1" :testdata="testdata"></slot> 
      <hr/>
      <p class="title">默认插槽:父组件不提供内容,slot自己提供</p>
      <slot>默认插槽</slot>
      <hr/>
      <p class="title">普通插槽:父组件提供什么内容，子组件就显示什么内容，默认插槽会失效，由父组件的内容代替其中的内容,上面的一个就是被替代了</p>
      <slot></slot>
      <hr/>
      <p class="title">命名插槽：名字要一 一对应，才能对应的渲染</p>
      <slot name="test2"></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data () {
    return {
        testdata: [1,2,3,4,5]
    }
  },

props:{
},
mounted(){
},
computed:{
},
methods: {
}
}
</script>

<style lang='stylus' scoped>
  .title{
    color orange 
  }
</style>
