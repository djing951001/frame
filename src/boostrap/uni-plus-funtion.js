


// #ifdef H5
import jsBridge from '@/common/utils/jsbridge.js'
// #endif

// #ifdef MP-WEIXIN
const jsBridge = null
// #endif
import Loader from './loader';

/**
 * 调用原生方法
 * @param {*} name  原生方法标记 方法name
 * @param {*} parent 需要传递到原生的参数
 */
function useJsBridge(name, parent) {
    jsBridge&&jsBridge.call(name,parent);
}
/**
 * 获取当前环境
 * @author 董景
 * @returns {'wx'|'h5'} wx微信小程序 h5网页也就是被APP包裹的网页 可以使用jsbridge
 */
function useGetPlat(){
    const platform  = process.env.VUE_APP_NODE_TYPE.includes('wx')?'wx':'h5'
    return platform;
}

/**
 * @author 董景
 * @description 统一返回登录页处理
 */
function useToLoginView(){
    const plat = useGetPlat()
    const map = {
        wx:()=>{
            uni.navigateTo({
                url:Loader.wxAuthorization
            })
        },
        h5:()=>{
            jsBridge&&jsBridge.call('navigate.toLogin','');
        }
    }
    map[plat]&&map[plat]()
}


/**
 * @author 董景
 * @description 判断是否可以使用jsBridge，如果可以使用代表被原生嵌入
 * @returns {boolean}
 */
function useCanIUseJsBridge(){
    const plat = useGetPlat()
    if(plat =='wx') return false
    let systemInfo = jsBridge?.call('getSystemInfo','');
    return Boolean(systemInfo)
}


/**
 * @author 董景
 * @description 当需要判断环境做返回的地方，可以使用这个方法
 * @returns {boolean}
 */
function usePlusNavigateBack(object){
    const plat = this.useGetPlat()
    const canUse = this.useCanIUseJsBridge()
    const map = {
        wx:()=>{
            uni.navigateBack(object)
        },
        h5:()=>{
            // 判断是否可以使用jsBridge 可以ish
            if(canUse)canUse&&jsBridge.call('navigate.back',object)
            else uni.navigateBack(object)
        }
    }
    map[plat]&&map[plat]()
}
/**
 * 
 * @param {String} url 需要跳转地址
 * @param {String} prader  需要传递的参数 统一转成字符串传递
 */
function onAuthorization(url, prader) {
    if(uni.getStorageSync('loginToken') && new Date().getTime() < uni.getStorageSync('loginTime')) {
        // console.log('小程序已登陆', `${url}?${prader}`)
        uni.navigateTo({
            url: `${url}?${prader}`
        });        
    } else {
        console.log('小程序未登录')
        useToLoginView()
    }
}
/**
 * 当前登录状态
 * @returns 
 */
function isLogin() {
    if(uni.getStorageSync('loginToken') && new Date().getTime() < uni.getStorageSync('loginTime')) {
        return true
    } else {
        return false
    }
}
/**
    * 判断是否需要请求接口 
    * 用于小程序 进入一级页面时未登录状态 忽略请求某些接口
 */
function isWvLogin() {
    const plat = getPlat()
    if(plat == 'wx') {
        if(!uni.getStorageSync('loginToken')) {
            return false
        } else {
            return true
        }
    } else {
        if(!uni.getStorageSync('loginToken')) {
            toLoginView()
        } else {
            return true
        }
    }
}

export {
    useJsBridge,
    useGetPlat,
    useCanIUseJsBridge,
    useToLoginView,
    usePlusNavigateBack,
    onAuthorization,
    isLogin,
    isWvLogin
}