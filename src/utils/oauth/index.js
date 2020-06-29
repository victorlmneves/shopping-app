import { isEmpty } from 'lodash'
import { TOKEN_KEY, USER_INFO } from '../constants'

const parse = JSON.parse
const stringify = JSON.stringify

const oauth = {
  /**
   * Remove an item from the used storage
   * @param  {String} key [description]
   */
  clear(key) {
    if (localStorage && localStorage.getItem(key)) {
      return localStorage.removeItem(key)
    }

    if (sessionStorage && sessionStorage.getItem(key)) {
      return sessionStorage.removeItem(key)
    }

    return null
  },

  /**
   * Clear all app storage
   */
  clearAppStorage() {
    if (localStorage) {
      localStorage.clear()
    }

    if (sessionStorage) {
      sessionStorage.clear()
    }
  },

  clearToken(tokenKey = TOKEN_KEY) {
    return oauth.clear(tokenKey)
  },

  clearUserInfo(userInfo = USER_INFO) {
    return oauth.clear(userInfo)
  },

  /**
   * Returns data from storage
   * @param  {String} key // Item to get from the storage
   * @return {String|Object} // Data from the storage
   */
  get(key) {
    if (localStorage && localStorage.getItem(key)) {
      return parse(localStorage.getItem(key)) || null
    }

    if (sessionStorage && sessionStorage.getItem(key)) {
      return parse(sessionStorage.getItem(key)) || null
    }

    return null
  },

  getAccessToken(tokenKey = TOKEN_KEY) {
    return oauth.get(tokenKey).access_token
  },

  getToken(tokenKey = TOKEN_KEY) {
    return oauth.get(tokenKey)
  },

  getUserInfo(userInfo = USER_INFO) {
    return oauth.get(userInfo)
  },

  /**
   * Set data in storage
   * @param {String|Object} value // The data to store
   * @param {String} key
   * @param {Boolean} isLocalStorage // Defines if we need to store in localStorage or sessionStorage
   */
  set(value, key, isLocalStorage) {
    if (isEmpty(value)) {
      return null
    }

    if (isLocalStorage && localStorage) {
      return localStorage.setItem(key, stringify(value))
    }

    if (sessionStorage) {
      return sessionStorage.setItem(key, stringify(value))
    }

    return null
  },

  setToken(value = '', isLocalStorage = false, tokenKey = TOKEN_KEY) {
    return oauth.set(value, tokenKey, (isLocalStorage = false))
  },

  setUserInfo(value = '', isLocalStorage = false, userInfo = USER_INFO) {
    return oauth.set(value, userInfo, (isLocalStorage = false))
  },

  logout() {
    oauth.clearAppStorage()
  },
}

export default oauth
