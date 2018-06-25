#路由
* vue-axio是实行http请求的类库,是对axios的封装,能进行普通的ajax请求和http请求
* node-js req.body.id:post请求 req.params.id:url地址上加个? req.query.id:get请求
* 安装vue-router,实现路由,router-view:显示路由所指向的节点
* 静态路由表的mode可设置为history,这样就可以去掉url中的#,mode为hash有#
* 使用router-link,并设置active-class="active" 和exact属性,可实现路由切换的高亮操作,用a标签较为繁琐
* this.$router.push():用于跳转 this.$route.params:用于获取路径数据 
* req.body.id:表单 req.params.id(路由) req.query.id:?后面的
* 在静态路由表中设置name属性可以在router-link,redirect中用{name:'name'},代替路径
* 设置通配符*,使用redirect可以实现重定向
* router-view部分遵循有定义则显示，没定义则不显示的原则
* 静态路由表定义可以使用components,让内容更加丰富
* 可用transition标签包含router-view,实现动画效果
* 利用hash值可以跳转到对应的标签上
* 导航守卫:导航表示路由正在发生改变。全局守卫:router.beforeEach 路由独享的守卫：beforeEnter 路由组件内的守卫:beforeRouteEnter
* 单页面的优缺点:?
# vuex(相当于人类的大脑,大脑发出指令)
* 状态管理器,单向数据流
* mapMutation和mapGetters和...(展开运算符)配合能够获取store里的getters和mutations
 state 只做声明不做操作(推荐) getters:只管获取 mutations:只管操作,改值（用commit） actions:异步操作