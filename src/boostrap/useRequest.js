/**
 * @description: 请求拦截器启动
 * @author 董景 on 2021-11-27
 * @param {config} config 
 * @param {*} middleware 
 * @returns {config}
 */
async function useRequestMiddleware(config, middleware) {
  let c = config;

  for (let fn of middleware) {
    const cs = await fn(c,middleware);
    if (!cs) return;
    c = cs;
  }
  return c;
}


/**
 * @description: 响应拦截器启动
 * @author 董景 on 2021-11-27
 * @param {*} res 
 * @param {*} middleware 
 * @param {*} resolve 
 * @param {*} reject 
 */
async function useResponceMiddleware(res, middleware,resolve,reject){
    let flag = true;
    let originRes = res
    for (let fn of middleware) {
        flag = await fn(originRes,(response)=>{
             // 可以调用callback返回一个新的返回体
            originRes = response
        },middleware);

        // 如果拦截器不通过，则展示错误内容，并抛出异常
        if(!flag) {
            uni.showToast({
              title: originRes,
              icon: 'none',
            })
            reject(originRes)
            break
        };
    }
    // 经过责任链的函数处理后，返回最终的结果
    flag&&resolve(originRes)
    
}


/**
 * 检查token是否过期
 * @param {} tokenTime 
 * @returns 
 */
function checkTokenIsExpire(tokenTime){
    const tTime = new Date(tokenTime).getTime()
    const now = new Date().getTime()
    return (now - tTime)>0
}
export { useRequestMiddleware,useResponceMiddleware,checkTokenIsExpire };
