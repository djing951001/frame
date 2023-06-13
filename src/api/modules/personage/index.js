
import { request } from "../../../common/request/index";
/**
 * 登录
 * @param {*} querys 
 * @returns 
 */
export function detail(querys) {
  return request({
    url: '/system/user/detail',
    method: 'get',
    data: querys
  })
}