import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'amfe-flexible'
import setaxios from "./setaxios"
setaxios()

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

//路由守卫
router.beforeEach((to,from,next)=>{
  //无论是刷新还是跳转第一个都是进入这里你可以进行拦截
  store.commit('settoken',localStorage.getItem('token'))
  if(to.meta.requireAuth){
    if (store.state.token){
      next()
    }else{
      next({
        path:'/login',
        query:{redirect:to.fullPath}
      })
    }
  }else{
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
