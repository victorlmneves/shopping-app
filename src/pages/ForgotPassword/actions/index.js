import {
  REQUEST_RECOVER_PASSWORD,
  SET_RECOVER_PASSWORD,
} from './forgotPasswordTypes'

export const requestRecoverPassword = (payload) => {
  return {
    type: REQUEST_RECOVER_PASSWORD,
    data: payload,
  }
}

export const setRecoverPassword = (message) => {
  return { type: SET_RECOVER_PASSWORD, message }
}
