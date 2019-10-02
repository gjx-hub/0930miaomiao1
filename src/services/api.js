import axios from 'axios'

const instance = axios.create({
    timeout: 1000,
    headers: {
        "Miaomiao-Token": 'token'
    }
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什
    // 错误处理
    const data = response.data;
    if (data.status !== 0) {
        alert(data.msg);
    }
    // 精简了返回内容
    return data;
}, function (error) {
    // 对响应错误做点什么
    // 对错误信息进行提示
    return Promise.reject(error);
});


//封装get方法，发送get请求都会通过第3行的实例去创建，实例中配置好了默认的参数
function get(url, config) {
    return instance.get(url, config);
}

function post(url, body, config) {
    return instance.post(url, body, config);
}

export default {
    get,
    post
}