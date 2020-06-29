import {
  REQUEST_REGISTER,
  SUCCESS_REGISTER,
  FAIL_REGISTER,
  REQUEST_REGISTER_DETAIL,
  SUCCESS_REGISTER_DETAIL,
  FAIL_REGISTER_DETAIL,
  REQUEST_VALIDATION,
  TOGGLE_VALIDATION,
} from '../actions/registerTypes'

const initialState = {
  isLoadingRegister: false,
  successfulRegister: false,
  messageRegister: '',
  isLoadingRegisterDetail: false,
  successRegisterDetail: false,
  messageRegisterDetail: '',
  validation: false,
}

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_REGISTER:
      return { ...state, isLoadingRegister: true }
    case SUCCESS_REGISTER:
      return {
        ...state,
        isLoadingRegister: false,
        successRegister: true,
        messageRegister: action.message,
      }
    case FAIL_REGISTER:
      return {
        ...state,
        isLoadingRegister: false,
        successRegister: false,
        messageRegister: action.message,
      }
    case REQUEST_REGISTER_DETAIL:
      return { ...state, isLoadingRegisterDetail: true }
    case SUCCESS_REGISTER_DETAIL:
      return {
        ...state,
        isLoadingRegisterDetail: false,
        successRegisterDetail: true,
        messageRegisterDetail: action.message,
      }
    case FAIL_REGISTER_DETAIL:
      return {
        ...state,
        isLoadingRegisterDetail: false,
        successRegisterDetail: false,
        messageRegisterDetail: action.message,
      }
    case REQUEST_VALIDATION:
      return { ...state }
    case TOGGLE_VALIDATION:
      return { ...state, validation: action.validation }
    default:
      return state
  }
}
