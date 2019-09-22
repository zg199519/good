<template>
    <div>
        <ul>
            <li v-for="(item) in users" @click="itemClick(item)" :key="item.name">
              <span>{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Mine",
        data(){
            return{
                users:[
                    {name:'商品搜藏'},
                    {name:'我的足迹'},
                    {name:'店铺搜藏'},
                    {name:'我的订单'},
                    {name:'退出',type:'exit'}
                ]
            }
        },
        methods:{
            itemClick(item){
                if(item.type == 'exit'){
                    //退出
                    this.$store.commit('settoken','')
                    localStorage.removeItem('token')
                    this.$router.push({path:'/login'})
                }
            }
        }
    }
</script>

<style scoped>
    ul{

    }
    li{
        font-size: 18px;
        line-height: 46px;
        text-align: left;
        padding-left: 30px;
        background: #f8f8f8;
        border-bottom: 1px solid #fff;
    }

</style>