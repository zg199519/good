<template>
    <div>
        <img class="imgheader" src="http://api.noahzhou.com//uploads/resource/20190125/1548423378.jpeg" alt="">
        <cube-form
                :model="model"
                :schema="schema"
                @submit="submitHandler"></cube-form>


    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                model:{
                    username:'',
                    password:''
                },
                schema:{
                    fields:[
                        //用户配置
                        {
                            type:'input',
                            modelKey:'username',
                            label:'用户名',
                            props:{
                                placeholder:'请输入用户名',
                            },
                            rules:{
                                //效验规则
                                required:true,
                                type:'string',
                                min:3,
                                max:15,

                            },
                            trigger:'blur',
                            messages:{
                                required:'用户名不能为空',
                                min:'用户名不能少于3个字',
                                max:'用户名不能大于15个字'
                            }
                        },
                        //密码配置
                        {
                            type:'input',
                            modelKey:'password',
                            label:'密码',
                            props:{
                                placeholder:'请输入密码',
                                type:'password',
                                eye:{
                                    open:false
                                }
                            },
                            rules:{
                                required:true
                            },
                            trigger:'blur'
                        },
                        {
                            type:'submit',
                            label:'登录'
                        }
                    ]
                }
            }
        },
        methods:{
            async submitHandler(e){
                e.preventDefault();//阻止冒泡
                try {
                    const result = await this.$http.get('/api/login',{params:this.model})
                    if(result.code == '0'){
                        this.$store.commit('settoken',result.token);
                        window.localStorage.setItem('token',result.token);

                        //判断路由是否带有参数 如果带返回参数地址
                        this.$router.replace({path:this.$route.query.redirect?this.$route.query.redirect:'/botnav/index'})


                    }else{
                        alert(result.message);
                    }
                }catch (err) {
                    console.error(err);
                }
            }
        }
    }
</script>

<style scoped>
    .imgheader{
        width: 100%;
        height: 100px;
    }

</style>