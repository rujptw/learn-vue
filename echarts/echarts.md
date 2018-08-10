##### 在vue使用echarts 
1. 基本配置

![常用](../images/echarts基本配置.png)

2. 各个组件在图表中的位置

![位置](../images/echarts入门实例.png)

3. 注意事项
 1. 一定要配置xAxis,yAxis,series这三个参数，如果是不想设置的话也要初始化可以将其设置为空JSON就可以了。
 2. 保证在echarts.init之前的对象是有宽高的。

4. 具体的可查看 echart-practice上的项目