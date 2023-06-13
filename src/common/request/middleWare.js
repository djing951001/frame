

import Store from '@/store'
import Loader from '@/boostrap/loader.js'
import { checkTokenIsExpire } from '@/boostrap/useRequest'
/**
 * 请求拦截器、检查是否有token，无token千万跳转页
 * 封装  登录/未登录方法
 * 微信 根据所在页面判定是否切换小程序授权登录页面
 * app 跳转 原生登录页面
 * @param {*} config 
 * @returns 
 */
function reqAuthCheck(config){
    const token = uni.getStorageSync('loginToken')
    if(!token) {
        uni.useToLoginView()
        return false
    }
    return config
}
/**
 * 请求拦截器 - 检查token是否过期
 * @param {*} config 
 * @returns 
 */
function reqTokenIsExpirCheck(config){
    const time = uni.getStorageSync('loginTime')
    if(checkTokenIsExpire(time)){
        uni.showToast({
            title: '登录过期，请重新登录',
            icon: 'none'
        });
        setTimeout(()=>{
            uni.useToLoginView()
        },500)
        return false
    }
    return config
}
/**
 * 请求拦截器 ，添加header
 * @param {*} config 
 * @returns 
 */
function reqWithHeader(config){
    config.header = {...Store.state.app.header,...config.header,}
    return config
}
/**
 * 响应拦截器示例,返回响应体中的data字段
 * @param {*} res 
 * @param {*} callback 
 * @returns 
 */
function resRealData(res,callback){
    callback(res.data)
    return true
}
/**
 * 响应500处理
 * 通过callback可以改变响应体的内容
 * @param {*} res 
 * @param {*} callback 
 * @returns 
 */
 function res500(res,callback,){
    if(res.code===500){
        const msg = Loader.errCodeMsg[500]?Loader.errCodeMsg[500]:Loader.errCodeMsg['default']
        callback(msg) // 接口错误
        return false
    }
    return true
}
/**
 * 响应401处理
 * @param {*} res 
 * @param {*} callback 
 * @returns 
 */
function res401(res,callback){
    if(res.code === 401){
        const msg = res.msg?res.msg:Loader.errCodeMsg[401]
        callback(msg)
        uni.useToLoginView() // 返回登录页
        return false
    }
    return  true
}
/**
 * 响应404处理
 * @param {*} res 
 * @param {*} callback 
 * @returns 
 */
function res404(res,callback){
    if(res.code === 404){
        const msg = res.msg?res.msg:Loader.errCodeMsg[404]
        callback(msg)
        uni.useToLoginView()
        return false
    }
    return  true
}

/**
 * 响应成功
 * @param {*} res 
 * @param {*} callback 
 * @returns 
 */
function resSuccess(res,callback){
    if(res.code === 200){
        callback(res)
        return true
    }
    return false
}
export {
    reqAuthCheck,
    reqTokenIsExpirCheck,
    reqWithHeader,
    resRealData,
    res500,
    res401,
    res404,
    resSuccess
}