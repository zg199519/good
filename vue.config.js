module.exports = {
    configureWebpack:{
        devServer:{
            host: 'localhost',//服务器ip地址
            port:9090,
            // open:true,
            //Mock数据
            before(app){

                //登录接口
                app.get('/api/login',(req,resp)=>{
                    const {username,password} = req.query
                    if (username=="xiaoguang" && password=="123456" || username=="xiao" && password=="123456"){
                        resp.json({
                            code:0,
                            message:"登录成功",
                            token:username+'-'+(new Date().getTime()+60*60*1000)
                        })
                    }else{
                        resp.json({
                            code:1,
                            message:"账号或者密码错误"
                        })
                    }
                })

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

                //首页轮播图接口
                app.get('/api/banner',(req,resp)=>{
                    resp.json({
                        data:[
                            {
                                url: 'http://www.didichuxing.com/',
                                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
                            },
                            {
                                url: 'http://www.didichuxing.com/',
                                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
                            },
                            {
                                url: 'http://www.didichuxing.com/',
                                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
                            }
                        ]
                    });
                })

                //滚动分类接口
                app.get('/api/rollinglist',(req,res)=>{
                    res.json({
                        data:[
                            [
                                {
                                    url: 'http://www.didichuxing.com/',
                                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'http://www.didichuxing.com/',
                                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'http://www.didichuxing.com/',
                                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'http://www.didichuxing.com/',
                                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'http://www.didichuxing.com/',
                                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'http://www.didichuxing.com/',
                                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'http://www.didichuxing.com/',
                                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'http://www.didichuxing.com/',
                                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'http://www.didichuxing.com/',
                                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'http://www.didichuxing.com/',
                                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                                    label:'分类一'
                                }
                            ],
                            [
                                {
                                    url: 'http://www.didichuxing.com/',
                                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'http://www.didichuxing.com/',
                                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'http://www.didichuxing.com/',
                                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'http://www.didichuxing.com/',
                                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'http://www.didichuxing.com/',
                                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'http://www.didichuxing.com/',
                                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'http://www.didichuxing.com/',
                                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'http://www.didichuxing.com/',
                                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'http://www.didichuxing.com/',
                                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'http://www.didichuxing.com/',
                                    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                                    label:'分类一'
                                }
                            ]
                        ]
                    })
                })


                //滚动分类接口
                app.get('/api/classify',(req,res)=> {
                    switch (req.query.type) {
                        case '0':
                        res.json({
                            data:[
                                {
                                    image:'https://ww1.sinaimg.cn/bmiddle/6853040fly1g75vju2bl6j22402tchdt.jpg',
                                    label:'小米'
                                },
                                {
                                    image:'https://ww1.sinaimg.cn/bmiddle/6853040fly1g75vju2bl6j22402tchdt.jpg',
                                    label:'小米'
                                }
                            ]
                        })
                        break;
                        case '1':
                            res.json({
                                data:[
                                    {
                                        image:'https://ww1.sinaimg.cn/bmiddle/6853040fly1g75vju2bl6j22402tchdt.jpg',
                                        label:'小米1'
                                    },
                                    {
                                        image:'https://ww1.sinaimg.cn/bmiddle/6853040fly1g75vju2bl6j22402tchdt.jpg',
                                        label:'小米1'
                                    }
                                ]
                            })
                            break;
                    }

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
