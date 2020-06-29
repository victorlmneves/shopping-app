import {
  REQUEST_RECOVER_PASSWORD,
  SET_RECOVER_PASSWORD,
} from '../actions/forgotPasswordTypes'

const initialState = {
  isLoadingForgotPassword: false,
  successForgotPassword: false,
  message: '',
}

export const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_RECOVER_PASSWORD:
      return { ...state, isLoadingForgotPassword: true }
    case SET_RECOVER_PASSWORD:
      return {
        ...state,
        isLoadingForgotPassword: false,
        successForgotPassword: action.success,
        message: action.message,
      }
    default:
      return state
  }
}
