
/**
 * 至简司机请求器
 * @author 董景 on 2021-11-27
 * @description: 
 */
import Loader from "../../boostrap/loader";
import { useRequestMiddleware,useResponceMiddleware } from "@/boostrap/useRequest";

let lastRequest = null;
let lastRequestUrl = null;

async function request({ url = "", method = "get", data, ContentType="application/json;charset=UTF-8",  ...option }) {
  if(uni.getStorageSync('loginToken')) {
    Loader.defaultHeader['Authorization'] = uni.getStorageSync('loginToken')
  }
  let config = {
    url:Loader.requestBaseUrl+url,
    method,
    data,
    header:{
        "Content-Type": ContentType,
        ...Loader.defaultHeader,
        // ...option.header??{}
    },
    ...option,
  };

  if (lastRequest && url == lastRequestUrl) {
    // 如果上一次请求还未完成，取消上一次请求
    lastRequest.abort();
  }
  if (!Loader.requestIgnore.includes(url)) {
    config = await useRequestMiddleware(config, Loader.middleware.request);
    if (!config)
      throw new Error(
        "请求参数对象错误，应该是个配置对象，但是却是个" + typeof config,
        "请检查中间件"
      );
  }
  lastRequestUrl = config.url;
  return new Promise((resolve, reject) => {
    uni.request({
      url: config.url,
      method: config.method, 
      data: config.data,
      header: config.header, // header
      timeout: 10000,
      ...config,

      success: (res) => useResponceMiddleware(res,Loader.middleware.response,resolve,reject),
      fail:(err)=>{
        reject(err)
      }
    });
  });
}

export { request };
