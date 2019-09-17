module.exports = {
    configureWebpack:{
        devServer:{
            host: 'localhost',//服务器ip地址
            port:9090,
            // open:true,
            //Mock数据
            before(app){

                //注册接口
                app.get('/api/register',(req,resp)=>{
                    let userpoor = [
                        {username:'xiaoguang',password:'123456'},
                        {username:'xiao',password:'123456'}
                    ]
                    const {username,password} = req.query
                    const userlength = userpoor.filter(v=>v.username==username).length
                    console.log(userlength);
                    if(userlength > 0){
                        resp.json({ success: false,message:'用户名已经存在' });
                    }else{
                        resp.json({ success: true,message:'注册成功' });
                    }
                })

                app.post('/api/test/post', (req, resp) => {
                    console.log(req);
                    resp.json({
                        "code": 123,
                        "msg": "post测试成功"
                    })
                })



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
