
// 实例化API核心类
const amapFile = require('@/common/utils/amap-wx.130')
const myAmapFun = new amapFile.AMapWX({
	key:  process.env.VUE_APP_BASE_KEY_WXMAP
}); //创建一个实例化对象


/**
 * 千分位 封装
 * @param {Number} value 
 * @returns 
 */
 export function numberToCurrencyNo(value) {
  if (!value) return 0
  // 获取整数部分
  const intPart = Math.trunc(value)
  // 整数部分处理，增加,
  const intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  // 预定义小数部分
  let floatPart = ''
  // 将数值截取为小数部分和整数部分
  const valueArray = value.toString().split('.')
  if (valueArray.length === 2) { // 有小数部分
    floatPart = valueArray[1].toString() // 取得小数部分
    return intPartFormat + '.' + floatPart
  }
  return intPartFormat + floatPart
}

/**
 * 时间格式化
 * @param {String} time  时间
 * @param {String} pattern 需要转换格式
 * @returns 
 */
export function parseTime(time, pattern) {
  if (arguments.length === 0 || !time) {
    return null;
  }
  time = new Date(time);
  const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time);
    } else if (typeof time === 'string') {
      time = time.replace(new RegExp(/-/gm), '/');
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value];
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }
    return value || 0;
  });
  return time_str;
}

/**
 * 数组内对象去重
 * @param {*} arr 数组
 * @param {*} id 对什么字段进行去重 字符串
 */
 export function objReduce(arr, id) {
  const obj = {};
  return arr.reduce((cur, next) => {
    obj[next[id]] ? '' : obj[next[id]] = true && cur.push(next);
    return cur;
  }, []); // 设置cur默认类型为数组，并且初始值为空的数组
}



// 经纬度 转换所有中文详情信息
//地址详细信息 （中文 省市区）
/**
 * 
 * @param {Object} coordinate  
 * {
*    latitude
*    longitude
 * }
 */
export function wxGetAddress(coordinate) {
  //根据传递进来经纬度进行反解析，调用的是高德给的方法
return new Promise((resolve, reject) => {
  myAmapFun.getRegeo({
    location: `${coordinate.longitude},${coordinate.latitude}`,
    success: (res) => {
      resolve(res)
    },
    fail: (err) => {
      console.log( `${coordinate.longitude},${coordinate.latitude}`)
      resolve(err)
    }
  })
})
}