import {
  REQUEST_REGISTER,
  SUCCESS_REGISTER,
  FAIL_REGISTER,
  REQUEST_REGISTER_DETAIL,
  SUCCESS_REGISTER_DETAIL,
  FAIL_REGISTER_DETAIL,
  REQUEST_VALIDATION,
  TOGGLE_VALIDATION,
} from './registerTypes'

//Regular register
export const requestRegister = (payload) => {
  return {
    type: REQUEST_REGISTER,
    data: payload,
  }
}

export const successRegister = (message) => {
  return { type: SUCCESS_REGISTER, message }
}

export const failRegister = (message) => {
  return { type: FAIL_REGISTER, message }
}

//Detail register
export const requestRegisterDetail = (payload) => {
  return {
    type: REQUEST_REGISTER_DETAIL,
    data: payload,
  }
}

export const successRegisterDetail = (message) => {
  return { type: SUCCESS_REGISTER_DETAIL, message }
}

export const failRegisterDetail = (message) => {
  return { type: FAIL_REGISTER_DETAIL, message }
}

export const requestValidation = (payload) => {
  return {
    type: REQUEST_VALIDATION,
    data: payload,
  }
}

export const toggleValidation = (validation) => {
  return { type: TOGGLE_VALIDATION, validation }
}
