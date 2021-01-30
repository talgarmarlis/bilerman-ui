import apiClient from 'services/axios'
import store from 'store'

export const authService = {
  signUp,
  sendToken,
  confirmToken,
  requestPasswordResetLink,
  confirmPasswordResetToken,
  resetPassword,
}

export async function login(email, password) {
  return apiClient
    .post('/auth/signin', {
      email,
      password,
    })
    .then(response => {
      if (response) {
        store.set('auth', response.data)
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}

export async function register(email, password, name) {
  return apiClient
    .post('/auth/register', {
      email,
      password,
      name,
    })
    .then(response => {
      if (response) {
        const { accessToken } = response.data
        if (accessToken) {
          store.set('accessToken', accessToken)
        }
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}

export async function currentAccount() {
  return apiClient
    .get('/users/me')
    .then(response => {
      if (response) {
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}

export async function logout() {
  return apiClient
    .get('/users/me')
    .then(() => {
      store.remove('auth')
      return true
    })
    .catch(err => console.log(err))
}

function signUp(user) {
  return apiClient.post('/auth/signup', user)
}

function sendToken(user) {
  return apiClient.post(`/auth/sendRegistrationToken/${user.id}`, user)
}

function confirmToken(token) {
  return apiClient.post(`/auth/confirm?token=${token}`)
}

function requestPasswordResetLink(email) {
  return apiClient.post(`/auth/requestPasswordResetLink?email=${email}`)
}

function confirmPasswordResetToken(token) {
  return apiClient.post(`/auth/passwordResetToken?token=${token}`)
}

function resetPassword(user) {
  return apiClient.post(`/auth/resetPassword/user/${user.id}`, user)
}
