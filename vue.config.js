module.exports = {
    configureWebpack:{
        devServer:{
            port:9090,
            open:true,
            //Mock数据
            before(app){

            }
        }
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    }
}
