##### slot:html模板的插槽(相当占位符,很像挖了一个坑，但是里面放什么东西是由你决定的)

> slot:普通插槽

1. html模板显示不显示、以及内容与样式由父组件来决定。
2. 插槽显示的位置由子组件决定(就像一个坑挖了,它就在那里,不能移动,你只能决定往里面放什么东西),**没有插槽,就不会显示内容**
3. 默认插槽：没有name属性，与之对应的html模板也没有slot属性（相当于没有标签，只能放默认的东西）。
4. 命名插槽：name属性和html上的slot属性值**相同**，一一对应。
5. 默认内容：父组件没有传递内容给子组件，显示slot的默认内容

> slot-scope:作用域插槽=====》带数据的插槽=》自定义内容
1. 内容由slot所在的组件提供，不由父组件提供，除了这个以上规则和普通插槽一致
2. 在slot上绑定自定义属性将数据传输到父组件上(实际上是绑定上下文)。父组件上的template上要绑定slot-scope用以接收子组件的数据。



> 问题
 1. [Vue warn]: Duplicate presence of slot "default" found in the same render tree - this will likely cause render errors.
   * 解决办法：传递props或者使用深度复制


> 示例代码在vue-slot-practice中

> 参考
 1. https://github.com/cunzaizhuyi/vue-slot-demo
 2. https://cnodejs.org/topic/58c0ad17d282728c0ec4029a



