import {
  REQUEST_CHANGE_PASSWORD,
  SET_CHANGE_PASSWORD,
} from '../actions/changePasswordTypes'

const initialState = {
  isLoadingChangePassword: false,
  successChangePassword: false,
  message: '',
}

export const changePasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CHANGE_PASSWORD:
      return { ...state, isLoadingChangePassword: true }
    case SET_CHANGE_PASSWORD:
      return {
        ...state,
        isLoadingChangePassword: false,
        successChangePassword: action.success,
        message: action.message,
      }
    default:
      return state
  }
}
