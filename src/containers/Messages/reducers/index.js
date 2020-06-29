import {
  ACTIVE_SUCCESS,
  ACTIVE_WARNING,
  ACTIVE_ERROR,
  HIDE_SUCCESS,
  HIDE_WARNING,
  HIDE_ERROR,
} from '../actions'

const initialState = {
  activeSuccess: false,
  successMessage: '',
  activeWarning: false,
  warningMessage: '',
  activeError: false,
  errorMessage: '',
}

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_SUCCESS:
      return { ...state, activeSuccess: true, successMessage: action.message }
    case ACTIVE_WARNING:
      return { ...state, activeWarning: true, warningMessage: action.message }
    case ACTIVE_ERROR:
      return { ...state, activeError: true, errorMessage: action.message }
    case HIDE_SUCCESS:
      return { ...state, activeSuccess: false }
    case HIDE_WARNING:
      return { ...state, activeWarning: false }
    case HIDE_ERROR:
      return { ...state, activeError: false }
    default:
      return state
  }
}
