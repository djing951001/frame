
/**
 * @title zjsj框架加载器
 * @description: 用于加载框架的核心文件
 * @version 1.0.0
 * @author 董景 on 2021-11-27
 */
class Loader {
  constructor({ ctx, request, global, components,uniPlus ,wxAuthorization}) {
    this.ctx = ctx || window;
    this.requestConfig = request;
    this.globalConfig = global;
    this.components = components;
    this.uniPlus = uniPlus
    this.wxAuthorization = wxAuthorization
    this.loadProperties(ctx, global);
    this.loadRequest(request);
    this.loadUniPlusEnter(uniPlus)
    this.loadStatic({wxAuthorization})
    // this.loadComponents(ctx, components);
  }
  // 请求地址
  static requestBaseUrl = ""; 
  // 不需要拦截的请求地址
  static requestIgnore = []; 
  // 默认请求头
  static defaultHeader = {
    'App-Type':'1',
    'App-Version':'2.0',
    'App-Code':'6489184f76fa456d86529500ba94be9f',
    'Produce-Code':'2c3c8c43b487432b9d67934a6c4dcbbe',
    'Terminal-Type':'app',
  };
  // 错误码对应的错误信息
  static errCodeMsg = {};
  // 授权页
  static wxAuthorization = '/pages/login/index';

  /**
   * 中间件
   */
  static middleware = {
    request: [], // req middlewares
    response: [], // res middlewares
  };

  /**
   * 加载全局常量配置
   * @param {*} ctx
   * @param {*} global
   */
  loadProperties(ctx, global = {}) {
    ctx.prototype.$global = global;
  } 

  /**
   * 挂载静态数据
   * @param {*} param0 
   */
  loadStatic({wxAuthorization}){
    Loader.wxAuthorization = wxAuthorization
  }

  /**
   * 加载请求器配置
   * @param {*} request
   */
  loadRequest(request) {
    const reqMiddleWare = request.requestMiddleWare.filter(
      (fn) => typeof fn === "function"
    );
    const resMiddleWare = request.responseMiddleWare.filter(
      (fn) => typeof fn === "function"
    );

    Loader.middleware.request = reqMiddleWare;
    Loader.middleware.response = resMiddleWare;
    Loader.requestBaseUrl = request.baseUrl || "";
    Loader.requestIgnore = request.ignore || [];
    Loader.defaultHeader = request.defaultHeader || {};
    Loader.errCodeMsg = request.errCodeMsg || {};
  }

  loadComponents(ctx, components) {
    components.forEach((component) => ctx.component(component.name, component));
  }


  /**
   * 加载uniPlus扩展配置
   * @param {*} plusList 
   */
  loadUniPlusEnter(plusList){
    for(let plus of plusList){{
      if(!plus.name||!plus.get){
        console.warn('uniPlus配置错误，存在name或get为空的配置项')
        continue
      }
      if(typeof plus.get ==='function'){
        uni[plus.name] = plus.get.bind(uni)
      }else{
        uni[plus.name] = plus.get
      }
    }
  }
  }
}

export default Loader;
