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
        name: "Register",
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
                            label:'注册'
                        }
                    ]
                }
            }
        },
        methods:{
            submitHandler(e){
                e.preventDefault();//阻止冒泡
                this.$http.get('/api/register',{params:this.model}).then((response) => {
                    console.log(response)
                }).catch(err=>{
                    console.error(err)
                })
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