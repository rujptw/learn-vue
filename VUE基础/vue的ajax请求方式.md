### ajax请求方式

1. 根组件请求
2. 组件请求
3. vuex请求
4. 路由请求

#### 根组件请求：在App.vue上请求
  1. 优点:请求的逻辑都放在App.vue的子组件只负责展现
  2. 缺点:App.vue会非常的臃肿

#### 组件请求:组件内部请求数据
> 其实就是根组件请求=>子根组件请求
1. 优点: 组件自己管理请求,自己负责渲染，组件的解耦性较高
2. 缺点：组件多了以后**emit**和**props**，会变得十分繁琐，与非父子关系的组件需要借助vuex
3. 技巧: 使用mixins,简化相同的ajax请求

#### vuex action请求
1. 优点:没有了组件请求和根组件请求所需要的props和emit,解耦了状态和渲染逻辑
2. 缺点:vuex会非常的臃肿
3. 技巧:使用promise，这样能够做一些loading的动作

```
例子:
store = new Vuex.Store({
  state: {
    message: ''
  },
  mutations: {
    updateMessage(state, payload) {
      state.message = payload
    }
  },
  actions: {
    refreshMessage(context) {
      return new Promise((resolve) => {
        this.$http.get('...').then((response) => {
          context.commit('updateMessage', response.data.message);
          resolve();
        });
      });
    }
  }
});

Vue.component('my-component', {
  template: '<div>{{ message }}</div>',
  methods: {
    refreshMessage() {
      this.$store.dispatch('refeshMessage').then(() => {
        // do stuff
      });
    }
  },
  computed: {
    message: { return this.$store.state.message; }
  }
});
```

#### 路由请求:当切换到某个地址后,请求ajax数据
> 需要服务器端设置端点,匹配路由
1. 优点:每个组件都独立获取数据,ui渲染更加可预测。
2. 缺点:总体会更慢一些，ui无法渲染直到数据已经准备完毕。

```
import axios from 'axios';

router.beforeRouteEnter((to, from, next) => {
  axios.get(`/api${to.path}`).then(({ data }) => {
    next(vm => Object.assign(vm.$data, data))
  });
})

```
TODO:服务端渲染还没看
[服务端渲染](https://vuejsdevelopers.com/2017/08/06/vue-js-laravel-full-stack-ajax/)
