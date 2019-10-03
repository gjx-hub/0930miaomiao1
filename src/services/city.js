import http from './api'

function getCityList(){
    return new Promise((resolve,reject)=>{
        let cityListStr = localStorage.getItem('cityList')
        if(cityListStr){
            resolve(JSON.parse(cityList))
        }else{
            http.get('/api/cityList').then(res=>{
                localStorage.setItem('cityList',JSON.stringify(res))
                resolve(res)
            })
        }
    })
}
function getLocationCity(){
    return http.get('/api/getLocation')
}

export {
    getCityList,
    getLocationCity
}