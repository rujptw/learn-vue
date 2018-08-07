<template>
  <div class="back" ref="myChart">   
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      // 实例化echarts对象
      let myChart = this.$echarts.init(this.$refs.myChart);

      // 绘制条形图
      myChart.setOption({
        title: {
          text: "Echarts 入门实例",
          top: 5,
          left: "center"
        },
        legend: {
          data: ["衣服", "帽子", "裤子", "鞋子"],
          top: 30
        },
        // X轴
        xAxis: {
          data: ["一月", "二月", "三月", "四月"]
        },
        // Y轴
        yAxis: {},
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
            data: [200, 120, 240, 330]
          },
          {
            name: "bar",
            type: "line",
            data: [120, 200, 240, 260, 300]
          },
          {
            name: "bar",
            type: "line",
            data: [120, 200, 300, 140, 260]
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
  height: 300px;
  margin: 20px auto;
  border: 1px solid #CCC;
}
</style>

