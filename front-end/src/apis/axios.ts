import axios, { AxiosRequestConfig, AxiosResponse } from "axios";   // 导入模块

const axiosInstance = axios.create({        //创建实例
    baseURL:"",
    timeout: 10000,
})


// 请求拦截器，自动添加JWT Token
axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器，处理通用错误
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error('API请求错误:', error);
    if (error.response?.status === 401) {
      // 如果是认证错误，跳转到登录页面
      localStorage.removeItem('token');
      localStorage.removeItem('userType');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

const request = <T = unknown>(
    url: string,
    options?: AxiosRequestConfig,
): Promise<T> => {
    return new Promise((resolve, reject) => {
        axiosInstance({
            url,
            ...options,
        })
            .then((res: AxiosResponse) => {
                resolve(res.data);
            })
            .catch(err => reject(err))       //reject 同样由后续定义
    })
}

export { axiosInstance, request }