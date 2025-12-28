import axios, { AxiosRequestConfig } from "axios";   // 导入模块

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

const request = <ResponseType = unknown>(  // 创建request
    url: string,                             // 上面如果给了baseURL，这里可以直接传入子路径
    options?: AxiosRequestConfig<unknown>,   // 其他参数，包括请求头、请求方法、请求参数，由后续导入。
): Promise<ResponseType> => {
    return new Promise((resolve, reject) => {
        axiosInstance({
            url,
            ...options,
        })
            .then(res => {
                resolve(res.data)              //这里的 resolve 函数会在后面定义具体功能
            })
            .catch(err => {
              console.error('请求失败:', err);
              reject(err);
            })       //reject 同样由后续定义
    })
}

export { axiosInstance, request }