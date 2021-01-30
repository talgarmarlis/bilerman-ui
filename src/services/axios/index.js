import axios from 'axios'
import store from 'store'
import { notification } from 'antd'

const host = 'http://localhost:8080'

const apiClient = axios.create({
  baseURL: `${host}/api`,
  // timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
})

apiClient.interceptors.request.use(request => {
  const auth = store.get('auth')
  if (auth) {
    request.headers.Authorization = `${auth.tokenType} ${auth.accessToken}`
    request.headers.AccessToken = auth.accessToken
  }
  return request
})

apiClient.interceptors.response.use(undefined, error => {
  // Errors handling
  const { response } = error
  const { data } = response
  if (data) {
    notification.warning({
      message: data.message,
    })
    return Promise.reject(data)
  }
  return Promise.reject(response)
})

export default apiClient
