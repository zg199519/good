import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
      token:'',
      cartarr:JSON.parse(localStorage.getItem('cartarry')) || [],//存储购物车商品的数组
  },
  mutations: {
      //设置vux的token
      settoken(state,token){
        state.token = token
      },
      //添加商品到购物车
      tocart(state,tag){
        let goods = state.cartarr.find(v=>v.title == tag.label)

          if(goods){
              goods.cartCount+=1;
          }else{
              state.cartarr.push({title:tag.label,cartCount:1})
          }
          console.log(state.cartarr);

      },
      cartadd(state,index){
          state.cartarr[index].cartCount++
      },
      cartremove(state,index){
          if (state.cartarr[index].cartCount > 1){
              state.cartarr[index].cartCount--
          }else{
              if(window.confirm("确定移除购物车吗？")){
                  state.cartarr.splice(index,1)
              }
          }
      },
      clearcart(state){
          state.cartarr = []
      }

  },
  actions: {

  },
    getters:{
      countsum:state => {
          let num = 0
          state.cartarr.forEach(v=>{
              num += v.cartCount
          })
          return num
      }

    }
})
//每次调用mutation 都会调用这个
store.subscribe((mutation,state)=>{
    localStorage.setItem('cartarry',JSON.stringify(state.cartarr))
})



export default store
