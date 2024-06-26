import axios from 'axios'
import { i18nInstance } from '@/local'

const http = axios.create()

http.interceptors.request.use(config => {
  config.headers['Accept-Language'] = i18nInstance.language
  return config
})
export default http
