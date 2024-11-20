import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: '/api',
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
});

//添加请求拦截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    console.log(config, '-----config-----');

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//添加响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const responseData = response.data;
    const { code = 200 } = responseData;
    if (code == 200) {
      return responseData;
    }
    let message = '';
    //HTTP状态码
    switch (code) {
      case 400:
        message = '请求错误';
        break;
      case 401:
        message = '未授权，请登录';
        break;
      case 403:
        message = '拒绝访问';
        break;
      case 404:
        message = `请求地址出错: ${response?.config?.url}`;
        break;
      case 500:
        message = '服务器内部错误';
        break;
      default:
        message = '网络连接故障';
    }

    return Promise.reject(new Error(message));
  },
  (error: AxiosError) => {
    const { response } = error;
    //处理HTTP网络错误
    let message = '';
    //HTTP状态码
    switch (response?.status) {
      case 400:
        message = '请求错误';
        break;
      case 401:
        message = '未授权，请登录';
        break;
      case 403:
        message = '拒绝访问';
        break;
      case 404:
        message = `请求地址出错: ${response?.config?.url}`;
        break;
      case 500:
        message = '服务器内部错误';
        break;
      default:
        message = '网络连接故障';
    }
    console.log(message);
    return Promise.reject(new Error(message));
  }
);

// export function get<T>(
//   url:string,
//   params?:object,
//   config?:AxiosRequestConfig
// ): Promise<T>{
//   return instance.get(url,{params,...config});
// }

// export function post<T>(
//   url:string,
//   params?:object,
//   config?:AxiosRequestConfig
// ):Promise<T>{
//   return instance.post(url,params,config);
// }

// export function put<T>(
//   url:string,
//   params?:object,
//   config?:AxiosRequestConfig
// ):Promise<T>{
//   return instance.post(url,params,config);
// }

export default instance;
