import { request } from "../../../common/request/index";

/**
 * 请求实例
 * @param {*} querys 
 * @returns 
 */
export function selectList(querys) {
  return request({
    url: '/selectList',
    method: 'get',
    data: querys
  })
}