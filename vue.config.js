


module.exports ={
    publicPath:'./',
    devServer:{
        port:9999,
        proxy:{
            [process.env.VUE_APP_BASE_API_HOST]:{
                target:process.env.VUE_APP_BASE_API_PROXY,
            }
        }
    },
    
}