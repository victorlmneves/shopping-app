import {
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_ERROR,
  FETCH_USER_HISTORIC,
  FETCH_USER_HISTORIC_SUCCESS,
  FETCH_USER_HISTORIC_FAIL,
  FETCH_USER,
  FETCH_USER_DONE,
  FETCH_USER_FAIL,
  UPDATE_USER_MARKETING,
  UPDATE_USER_MARKETING_DONE,
  UPDATE_USER_MARKETING_FAIL,
} from './types'

export const requestProfileCredits = (payload) => {
  return {
    type: FETCH_PROFILE_REQUEST,
    data: payload,
  }
}

export const successProfileCredits = (payload) => {
  return { type: FETCH_PROFILE_SUCCESS, payload }
}

export const failProfileCredits = (message) => {
  return { type: FETCH_PROFILE_ERROR, message }
}

export const fetchUserHistoric = () => ({
  type: FETCH_USER_HISTORIC,
})

export const fetchUserHistoricSuccess = (data) => ({
  type: FETCH_USER_HISTORIC_SUCCESS,
  payload: data,
})

export const fetchUserHistoricFail = (error) => ({
  type: FETCH_USER_HISTORIC_FAIL,
  payload: error,
})

export const fetchUser = () => ({
  type: FETCH_USER,
})

export const fetchUserDone = (data) => ({
  type: FETCH_USER_DONE,
  payload: data,
})

export const fetchUserFail = (error) => ({
  type: FETCH_USER_FAIL,
  payload: error,
})

export const updateUserMarketing = (data) => ({
  type: UPDATE_USER_MARKETING,
  payload: data,
})

export const updateUserMarketingDone = () => ({
  type: UPDATE_USER_MARKETING_DONE,
})

export const updateUserMarketingFail = (error) => ({
  type: UPDATE_USER_MARKETING_FAIL,
  payload: error,
})
