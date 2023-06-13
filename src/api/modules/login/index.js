
import { request } from "../../../common/request/index";
/**
 * 登录
 * @param {*} querys 
 * @returns 
 */
export function loginToken(querys) {
  return request({
    url: '/zjsj/wx/mini/token',
    method: 'post',
    data: querys
  })
}