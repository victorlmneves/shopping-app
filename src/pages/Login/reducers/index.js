import {
  REQUEST_LOGIN,
  SUCCESS_LOGIN,
  FAIL_LOGIN,
  REQUEST_ALL_SHOPPINGS,
  SET_ALL_SHOPPINGS,
  LOGOUT,
} from '../actions/loginTypes'

const initialState = {
  isLoadingLogin: false,
  successLogin: false,
  messageLogin: '',
  shoppings: [],
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return { ...state, isLoadingLogin: true, messageLogin: '' }
    case SUCCESS_LOGIN:
      return { ...state, successLogin: true, isLoadingLogin: false }
    case FAIL_LOGIN:
      return {
        ...state,
        successLogin: false,
        isLoadingLogin: false,
        messageLogin: action.message,
      }
    case REQUEST_ALL_SHOPPINGS:
      return { ...state }
    case SET_ALL_SHOPPINGS:
      return { ...state, shoppings: action.shoppings }
    case LOGOUT:
      return { ...state, successLogin: false }
    default:
      return state
  }
}
