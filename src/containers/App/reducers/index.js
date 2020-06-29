import {
  GET_USER_PRINCIPAL,
  SET_USER_PRINCIPAL,
  GET_USER_DETAIL,
  SET_USER_DETAIL,
  GET_USER_CREDITS,
  SET_USER_CREDITS,
} from '../actions/appTypes'

const initialState = {
  userPrincipal: {
    detail: {},
  },
  userDetail: {
    detail: {},
  },
  userCredits: {},
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PRINCIPAL:
      return { ...state }
    case SET_USER_PRINCIPAL:
      return { ...state, userPrincipal: action.data }
    case GET_USER_DETAIL:
      return { ...state }
    case SET_USER_DETAIL:
      return { ...state, userDetail: action.data }
    case GET_USER_CREDITS:
      return { ...state }
    case SET_USER_CREDITS:
      return { ...state, userCredits: action.data }
    default:
      return state
  }
}
