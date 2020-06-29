import axios from 'axios'
import qs from 'qs'
import store, { getLastAction } from '../../store/store'

import {
  API_URL,
  AUTHORIZATION,
  USERNAME,
  PASSWORD,
  AUTH_HEADER,
  JSON_HEADER,
  GRANT_TYPE_REFRESH_TOKEN,
} from '../constants'

import oauth from '../oauth'

const http = axios.create({
  baseURL: API_URL,
})

/**
 * Interceptor for all requests
 */
http.interceptors.request.use(
  (config) => {
    const jwtToken = oauth.getToken()

    if (jwtToken == null && config.url.includes('oauth')) {
      config.headers = AUTH_HEADER
      config.auth = {
        username: USERNAME,
        password: PASSWORD,
      }

      return config
    } else if (jwtToken == null || config.url.includes('open')) {
      config.headers = JSON_HEADER

      return config
    } else {
      config.headers = JSON_HEADER
      config.headers.Authorization = `Bearer ${jwtToken.access_token}`
      jwtToken.previous_request = jwtToken.last_request
      jwtToken.last_request = new Date().getTime()
      oauth.setToken(jwtToken, false)
    }
    
    return config
  },
  (error) => {
    /**
     * Add your error handlers here
     */
    return Promise.reject(error)
  }
)

/**
 * Interceptor for all responses
 */
http.interceptors.response.use(null, (error) => {
  const {
    config,
    response: { status },
  } = error

  if (config && status === 401) {
    return validateJWTSession()
  }

  return Promise.reject(error)
})

function validateJWTSession() {
  const previous_request = oauth.getToken().previous_request
  const last_request = oauth.getToken().last_request
  const expires_in = oauth.getToken().expires_in

  if (
    (new Date(last_request) - new Date(previous_request)) / 1000 <=
    expires_in
  ) {
    refreshToken()
  } else {
    oauth.logout() //TODO check if need to set successLogin to false
  }
}

function refreshToken() {
  axios({
    auth: AUTHORIZATION,
    headers: AUTH_HEADER,
    method: 'post',
    url: `${API_URL}/oauth/token`,
    data: qs.stringify({
      grant_type: GRANT_TYPE_REFRESH_TOKEN,
      refresh_token: oauth.getToken().refresh_token,
    }),
  }).then((resp) => {
    const { access_token, refresh_token, expires_in } = resp.data
    const last_request = new Date().getTime()
    const previous_request = null
    oauth.setToken(
      {
        access_token,
        refresh_token,
        expires_in,
        last_request,
        previous_request,
      },
      true
    )
    store.dispatch(getLastAction())
  })
}

export default http
