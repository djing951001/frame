import { useToLoginView,useGetPlat,useCanIUseJsBridge,usePlusNavigateBack, onAuthorization,isLogin, isWvLogin, useJsBridge } from './uni-plus-funtion'

/**
 * uni-plus扩展集合
 * @author 董景
 * @import 所有uni-plus扩展方法命名采用use开头以区分uni与uniplus  useXXXXXX
 * @property {function} useGetPlat 获取当前环境
 * @property {function} useCanIUseJsBridge 是否可以使用jsBridge
 * @property {function} useToLoginView 统一跳转登录页
 * @property {function} usePlusNavigateBack 动态判断环境做返回页面。如果你需要根据环境做不同的返回逻辑，可以直接使用这个方法
 * @example
 * uni.useGetPlat()
 * uni.useCanIUseJsBridge()
 * uni.useToLoginView()
 * uni.usePlusNavigateBack()
 */
export default [
    {
        //调用原生方法
        name: 'useJsBridge',
        get: useJsBridge,
    },
    {
        /**
         * 获取当前环境
         * @returns {'wx'|'h5'} wx微信小程序 h5网页也就是被APP包裹的网页 可以使用jsbridge
         */
        name:'useGetPlat',
        get:useGetPlat,
    },
    {
        /**
         * 是否可以使用jsBridge
         * @returns {boolean} 
         */
        name:'useCanIUseJsBridge',
        get:useCanIUseJsBridge,
    },
    {
        /**
         * 统一跳转登录页
         * @author 董景
         */
        name: 'useToLoginView',
        get: useToLoginView,
    },
    {
        /**
         * 动态判断环境做返回页面。如果你需要根据环境做不同的返回逻辑，可以直接使用这个方法
         * @author 董景
         * @param {object} backObject uni.navigateBack返回的参数
         */
        name: 'usePlusNavigateBack',
        get: usePlusNavigateBack,
    },
    {
        /**
         * 点击功能模块 跳转页面 判断是否已经登录 如果未登录则跳转到微信授权页面
         */
        name: 'onAuthorization',
        get: onAuthorization
    },
    {
        name: 'isLogin',
        get: isLogin
    },
    {
        /**
         * 判断是否需要请求接口 
         * 用于小程序 进入一级页面时未登录状态 忽略请求某些接口
         */
        name: 'isWvLogin',
        get: isWvLogin
    }
]
