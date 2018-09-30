import instance from './instance';
import { convertRESTAPI } from '../util';

/**  模拟响应式，响应式接口无法使用Mock语法 */
function function_get(opts) {
  let url = `/function${opts}`
  return instance({
    method: 'get',
    url: url,
    opts: opts
  });
}

/** 月报表 */
function monthlyReport_get(opts) {
  
  return instance({
    method: 'get',
    url:  '/monthlyReport',
    opts: opts
  });
}

/** 城市维度数据 */
function statistics_policies_get(opts) {
  return instance({
    method: 'get',
    url:  '/statistics/policies',
    opts: opts
  });
}

/** 登录接口 */
function session_post(opts) {
  return instance({
    method: 'post',
    url:  '/session',
    opts: opts
  });
}

export {
  function_get,
  monthlyReport_get,
  statistics_policies_get,
  session_post
};
