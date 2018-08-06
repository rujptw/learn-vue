/**
 * 需要手动引入比较麻烦 
 * */
// import echarts from 'echarts/lib/echarts.js'
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/component/legend'
// import 'echarts/lib/component/title'
// import 'echarts/lib/chart/line'
/** 
 * 使用webpack*/
import { equire } from "babel-plugin-equire";
const echarts = equire([
    'line',
    'bar',
    'lengend',
    'title'
  ])
export default echarts
