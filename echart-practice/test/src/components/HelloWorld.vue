<template>
<div>
  <div class="back" ref="myChart">   
  </div>
  <hr>
  <div class="pie" ref="mypie" ></div>
  <hr>
  <div class="gauge" ref="mygauge" ></div>
</div>
</template>

<script>
export default {
  name: "HelloWorld",
  mounted() {
    this.draw();
    this.drawPie();
    this.drawGauge();
  },
  methods: {
    draw() {
      // 实例化echarts对象
      let myChart = this.$echarts.init(this.$refs.myChart);

      // 绘制条形图
      myChart.setOption({
        dataZoom: {
          //缩放
          type: "slider", //缩放类型
          start: 0, //数据窗口开始百分比
          end: 10, //数据窗口结束百分比
          xAxisIndex: 0, //控制哪一条轴
          filterMode: "filter" //过滤模式
        },
        tooltip: {
          //悬浮提示
          trigger: "axis", //触发方式，坐标轴触发（axis），主要在柱状图，折线图等会使用类目轴的图表中使用。，item触发适用于散点图，饼图等无类目轴
          axisPointer: {
            //axisPointer可以存在于多个组件中，比如tooltip和xAxis和全局中
            //坐标轴指示器:指示坐标轴当前刻度的工具。
            type: "cross",
            crossStyle: {
              color: "aqua"
            }
          }
          // formatter: "{b} :<br/> {a}: {c} :{e}"//格式化文本可以不要，因为ecahrts会自动帮我们处理
        },
        toolbox: {
          //工具箱
          feature: {
            dataView: {
              //数据视图
              show: true
            },
            restore: {
              //重置
              show: true
            },
            dataZoom: {
              //数据缩放视图
              show: true
            },
            saveAsImage: {
              //保存图片
              show: true
            },
            magicType: {
              //动态类型切换
              type: ["bar", "line"]
            }
          }
        },
        title: {
          //图标标题
          text: "Echarts 入门实例",
          left: "center"
        },
        legend: {
          //图标
          data: ["衣服", "帽子", "裤子", "鞋子", "价格"],
          top: 30
        },
        // X轴
        xAxis: {
          type: "category",
          data: ["一月", "二月", "三月", "四月"],
          name: "月份",
          axisPointer: {
            type: "shadow"
          }
        },
        // Y轴
        yAxis: [
          {
            type: "value",
            name: "销量(件)",
            axisLabel: {
              //坐标轴上的刻度
              formatter: "{value}",
              data: [50, 100, 150, 200, 250, 300, 350]
            },
            splitLine: {//grid分割线的样式
              lineStyle: {
                // 使用深浅的间隔色
                color:["red","blue"],
                type:"solid"
              }
            }
          },
          {
            type: "value",
            name: "价格(元)",
            axisLabel: {
              formatter: "{value}",
              data: [100, 200, 300, 400]
            }
          }
        ],
        // 数据
        series: [
          {
            name: "衣服",
            type: "bar",
            data: [120, 100, 440, 320]
          },
          {
            name: "帽子",
            type: "bar",
            data: [200, 120, 240, 330],
            markLine: {
              //辅助线
              data: [
                {
                  type: "average",
                  name: "平均值"
                }
              ]
            },
            markPoint: {
              //辅助点
              data: [
                { type: "min", name: "最小值" },
                { type: "max", name: "最大值" }
              ]
            }
          },
          {
            name: "裤子",
            type: "bar",
            data: [120, 200, 240, 260]
          },
          {
            name: "鞋子",
            type: "bar",
            //barGap控制不同系列的柱形图之间的距离,-100%为完全贴合(百分比是相对于柱子的宽度)，数字越大，间隔越大
            //在同一坐标系上，此属性会被多个 'bar' 系列共享。此属性应设置于此坐标系中最后一个 'bar' 系列上才会生效，并且是对此坐标系中所有 'bar' 系列生效。
            barGap: "-100%",
            data: [120, 200, 300, 140]
          },
          {
            name: "价格",
            type: "line",
            yAxisIndex: 1, //将数据映射到第二个y轴
            data: [50, 130, 150, 220]
          }
        ]
      });
    },
    drawPie() {
      var myPie = this.$echarts.init(this.$refs.mypie);
      myPie.setOption({
        title: {
          text: "某站点用户访问来源",
          subtext: "纯属虚构",
          x: "center"
        },
        tooltip: {
          trigger: "item", //饼图专用
          /**变量{a}, {b}, {c}, {d}在不同图表类型下代表数据含义为：
           * 折线（区域）图、柱状（条形）图、K线图 : {a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）
           *
           *散点图（气泡）图 : {a}（系列名称），{b}（数据名称），{c}（数值数组）, {d}（无）
           *
           *地图 : {a}（系列名称），{b}（区域名称），{c}（合并数值）, {d}（无）
           *
           *饼图、仪表盘、漏斗图: {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比
           */
          formatter: "{a} <br/>{b} : {c} ({d}%)" //格式化文本
        },
        legend: {
          orient: "vertical", //布局朝向
          left: "left", //距离左侧的距离
          //图例项的名称，应等于某系列的name值（如果是饼图，也可以是饼图单个数据的 name）。数组data中的每一项就代表name值
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["30%", "50%"], //饼图的半径，数组的第一项是内半径，第二项是外半径。
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" }, //name属性与legend下的data的每一项一一对应
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          }
        ]
      });
    },
    drawGauge() {
      var mygauge = this.$echarts.init(this.$refs.mygauge);
      mygauge.setOption({
        tooltip: {
          trigger: "item",
          data: ["速度", "油耗"],
          formatter: "{a} {b} : {c} "
        },
        series: [
          {
            type: "gauge",
            name: "速度统计",
            detail: {
              formatter: function(value) {
                return value + "码";
              }
            },
            data: [{ value: "55", name: "速度" }]
          }
        ]
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.back {
  width: 95%;
  height: 500px;
  margin: 20px auto;
  border: 1px solid #CCC;
}

.pie {
  width: 900px;
  height: 500px;
  margin: 20px auto;
  border: 1px solid #CCC;
}

.gauge {
  width: 900px;
  height: 500px;
  margin: 20px auto;
  border: 1px solid #CCC;
}
</style>

