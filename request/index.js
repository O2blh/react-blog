import axios from 'axios'

const BASE_URL = 'https://baozou-9gomwm0c699bd223-1310355014.ap-shanghai.app.tcloudbase.com'

// 设置axios基础路径
export const service = axios.create({
  baseURL: BASE_URL,
})

service.interceptors.response.use((response) => {
  return response.data
})
