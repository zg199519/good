import axios from 'axios'
import store from "./store"
import router from "./router"

//http全局拦截
//token要放在我们请求的header上带回去给后端

export default function setAxios() {
    //请求拦截
    axios.interceptors.request.use(
        config=>{
            if (store.state.token){
                config.headers.token = store.state.token
            }
            return config
        }
    )
    //响应拦截
    axios.interceptors.response.use(
        response=>{
            if (response.status==200){
                const data=response.data

                if(data.code == -1){
                    //登录过期 重新登录 清空vuex的token 和localStorage的token
                    store.commit('settoken','')
                    localStorage.removeItem('token')
                    //跳转到登录页面 并禁止返回
                    router.replace({path:'/login'})
                }
                return data
            }
            return response
        }
    )



}