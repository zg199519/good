<template>
    <div class="panelsbox">
        <cube-scroll class="leftpanels">
            <ul>
                <li v-for="(list,index) in taslabel" @click="selectlist(list.id)" :class="list.active?'active':''" :key="index">
                    {{list.label}}
                </li>
            </ul>
        </cube-scroll>
        <cube-scroll class="rightponels">
            <ul>
                <li v-for="(tag,index) in tags" :key="index">
                    <img :src="tag.image" alt="">
                    <p>{{tag.label}} <i class="cubeic-add" @click="addtocart($event,tag)"></i></p>
                </li>
            </ul>
        </cube-scroll>
    </div>
</template>

<script>
    export default {
        name: "List",
        data(){
            return{
                tags:[],
                taslabel:[
                    {
                        id:0,
                        label:"热门推荐",
                        active:true
                    },
                    {
                        id:1,
                        label:"手机",
                        active:false
                    }
                ]
            }
        },
        methods:{
            selectlist(index){

                this.taslabel.forEach((v,i)=>{
                    if(index == i){
                       v.active = true
                    }else{
                        v.active = false
                    }
                })

                this.getClassify(index)


            },
            async getClassify(index){
                const result = await this.$http.get('/api/classify',{params:{type:index}})
                console.log(result);
                this.tags = result.data
            },
            addtocart(e,tag){
                 this.$store.commit('tocart',tag)
            }
        },
        created() {
               this.getClassify(0)
        },
        mounted() {
            //设置滚动盒子的高度



        }
    }
</script>

<style scoped>
    .panelsbox{
        display: flex;
    }
    .leftpanels{
        width: 30%;
        height: calc(100vh - 58px);

    }
    .leftpanels li{
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #fff;
        color: #333;
        background: #f8f8f8;
        font-size: 14px;
    }
    .leftpanels li.active{
        background: #fff;
        color: #e93b3d;
    }
    .rightponels{
        width: 70%;
        height: calc(100vh - 58px);

    }
    .rightponels ul{
        display: flex;
        flex-wrap: wrap;
    }
    .rightponels ul li{
        width: 50%;
        justify-content: center;
        align-items: center;
        font-size: 15px;

    }
    .rightponels ul li img{
        width: 80px;
        height: 80px;
    }
</style>