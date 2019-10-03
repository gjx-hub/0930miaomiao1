import {getLocationCity} from '@/services/city'
export default {
    setLocationCity(context){
        //调用等装好的异步操作
        getLocationCity().then(res=>{
            //拿到数据后设置当前城市
            context.commit('changeCity',{city:res.data})
        })
    }
}