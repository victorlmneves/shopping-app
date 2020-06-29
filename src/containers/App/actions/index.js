import {
  GET_USER_PRINCIPAL,
  SET_USER_PRINCIPAL,
  GET_USER_DETAIL,
  SET_USER_DETAIL,
  GET_USER_CREDITS,
  SET_USER_CREDITS,
} from './appTypes'

export const getUserPrincipal = () => {
  return { type: GET_USER_PRINCIPAL }
}

export const setUserPrincipal = (data) => {
  return { type: SET_USER_PRINCIPAL, data }
}

export const getUserDetail = () => {
  return { type: GET_USER_DETAIL }
}

export const setUserDetail = (data) => {
  return { type: SET_USER_DETAIL, data }
}

export const getUserCredits = () => {
  return { type: GET_USER_CREDITS }
}

export const setUserCredits = (data) => {
  return { type: SET_USER_CREDITS, data }
}
