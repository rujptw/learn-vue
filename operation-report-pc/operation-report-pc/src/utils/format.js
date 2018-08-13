/**
 * 格式化数字
 *  千分位补逗号
 *
 * @param num 数字
 * @returns {string}
 */
export function formatNumber(num) {
  if(!num){
    return 0
  }
  let t = parseInt(num), i, r;
  for (t = t.toString().replace(/^(\d*)$/, "$1."), t = (t + "00").replace(/(\d*\.\d\d)\d*/, "$1"), t = t.replace(".", ","), i = /(\d)(\d{3},)/; i.test(t);)
    t = t.replace(i, "$1,$2");
  return t = t.replace(/,(\d\d)$/, ".$1"), r = t.split("."), r[1] == "00" && (t = r[0]), t
}

/**
 * 格式化金额
 *  1. 保留指定小数位
 *  2. 千分位补逗号
 *
 * @param s 金额
 * @param n 保留小数点位数
 * @returns {string}
 */
export function formatMoney(s, n) {
  if(!s || !n){
    return 0
  }
  n = n > 0 && n <= 10 ? n : 2;
  s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
  let l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
  let t = "";
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
  }
  return t.split("").reverse().join("") + "." + r;
}
