

const app = {
    state: {
      header:{
        'App-Code': 'b87d049cbcda472f9326af0e8e759d81', //应用编码
        'Produce-Type': 'fms',
        'App-Type': 0,
        'App-Version': '1.0.0',
        'Produce-Code': '1c3646219beb4c7b978b4600965b2c9f',
        'Terminal-Type': 'web',
        'Terminal-OS': 'web',
        'Content-Type': 'application/json',
      },
    },
  
    mutations: {
      SET_HEADER:(state,data)=>{
          state.header = data
      },
    },
    getters: {
        header: (state)=> state.header,
    },
    actions: {
     
    },
  };
  
  export default app