import {
  REQUEST_CHANGE_PASSWORD,
  SET_CHANGE_PASSWORD,
} from './changePasswordTypes'

export const requestChangePassword = (payload) => {
  return {
    type: REQUEST_CHANGE_PASSWORD,
    data: payload,
  }
}

export const setChangePassword = (payload) => {
  return { type: SET_CHANGE_PASSWORD, ...payload }
}
