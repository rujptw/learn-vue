/**
 * echarts按需引入 
 * */

//引入基本模版,使用require就不用写具体的路径了
let echarts = require('echarts/lib/echarts')
//引入需要的图表类型
require('echarts/lib/chart/line')
require('echarts/lib/chart/bar')
//引入需要的图表组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
require('echarts/lib/component/toolbox')
require('echarts/lib/component/dataZoom')

export default echarts
