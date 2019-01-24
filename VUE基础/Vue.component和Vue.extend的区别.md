### Vue.component和Vue.extend的联系
1. 当调用Vue.component时，不管是全局注册还是局部注册,内部都会调用Vue.extend
2. 两个都是创建组件的方式,Vue.component是声明式的，标记式的，而Vue.extend是基于类的，指令式的

### Vue.component和Vue.extend的区别
1. Vue.component返回的是一个Vue实例,而Vue.extend返回的是一个可复用的构造函数，需要注册才能使用
2. Vue.extend创造了Vue的子类，Vue.component则是像Vue.filter()一样的注册函数，将构造函数和id联系起来
