import {
  REQUEST_LOGIN,
  SUCCESS_LOGIN,
  FAIL_LOGIN,
  REQUEST_ALL_SHOPPINGS,
  SET_ALL_SHOPPINGS,
  LOGOUT,
} from './loginTypes'

export const requestLogin = (payload) => {
  return {
    type: REQUEST_LOGIN,
    data: payload,
  }
}

export const successLogin = () => {
  return { type: SUCCESS_LOGIN }
}

export const failLogin = (message) => {
  return { type: FAIL_LOGIN, message }
}

export const requestAllShoppings = () => {
  return { type: REQUEST_ALL_SHOPPINGS }
}

export const setAllShoppings = (payload) => {
  return { type: SET_ALL_SHOPPINGS, shoppings: payload }
}

export const logout = () => {
  return { type: LOGOUT }
}
