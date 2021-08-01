import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: '', //http://152.136.185.210:7878/api/m5
    timeout: 5000
  })

  //2.axios的拦截器
  //请求拦截
  instance.interceptors.request.use(res =>{
  //  console.log(config)
   // res.headers.Authorizetion = window.sessionStorage.getItem('token')
    return res
  },err =>{
    console.log(err);
  });

  //响应拦截
  instance.interceptors.response.use(res =>{
    return res.data
  },err =>{
    console.log(err);
  })


  //3.发送真正网络请求
  return instance(config)
}
