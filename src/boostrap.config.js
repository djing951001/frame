import { defineConfig } from "./boostrap/boostrap.js";
import {
  reqAuthCheck,
  reqTokenIsExpirCheck,
  reqWithHeader,
  res500,
  res401,
  resSuccess,
  resRealData,
} from "./common/request/middleWare";
import uniPlus from "./boostrap/uni-plus.js";
/**
 * @title boostrap.config.js 本框架项目配置文件
 * @description 前端框架配置入口
 * @author 董景 on 2022-11-27
 */
export default defineConfig({

  uniPlus, // uni扩展 ,可以在这里添加uni的扩展方法，添加后可通过uni.xxxx使用

  wxAuthorization:'/pages/login/index', // 授权页 微信配置此
  // 项目名称
  projeckName: "至简司机",
  // 框架请求配置
  request: {
    // 请求的基础地址
    baseUrl: process.env.VUE_APP_BASE_API_HOST,

    // 需要忽略拦截器的请求地址，配置后的路径不会经过请求中间件
    ignore: ['/zjsj/wx/mini/token'],
    // 请求中间件
    requestMiddleWare: [reqAuthCheck,reqTokenIsExpirCheck, reqWithHeader],
    // 响应中间件
    responseMiddleWare: [resRealData,res500,res401,resSuccess ],
    // 默认是header
    defaultHeader: {
      'App-Type':'1',
      'App-Version':'2.0',
      'App-Code':'6489184f76fa456d86529500ba94be9f',
      'Produce-Code':'2c3c8c43b487432b9d67934a6c4dcbbe',
      'Terminal-Type':'app'
    },
    // 请求code错误信息
    errCodeMsg: {
      401: "认证失败，无法访问系统资源",
      403: "当前操作没有权限",
      404: "服务器升级中，请稍后重试。",
      500: "提交参数错误，请稍后再试",
      default: "系统未知错误，请反馈给管理员",
    },
  },

  // 全局常量  命名使用$开头 通过 this.$global获取 不可修改

  global: {
    $color: ["red", "blue"],
  },
});
