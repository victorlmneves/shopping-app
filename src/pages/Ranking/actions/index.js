import {
  GET_LIST,
  SET_LIST,
  GET_RANKING,
  GET_RANKING_DONE,
  GET_RANKING_FAILED,
  GET_CURRENT_RANKING,
  SET_CURRENT_RANKING,
  GET_LIST_FAILED,
  GET_CURRENT_RANKING_FAILED,
} from './rankingTypes'

export const getList = () => {
  return { type: GET_LIST }
}

export const setList = (payload) => {
  return {
    type: SET_LIST,
    payload,
  }
}

export const getRanking = (date) => {
  return {
    type: GET_RANKING,
    date,
  }
}

export const getRankingDone = (data) => {
  return {
    type: GET_RANKING_DONE,
    data,
  }
}

export const getRankingFailed = (error) => {
  return {
    type: GET_RANKING_FAILED,
    error,
  }
}

export const getCurrentRanking = () => {
  return { type: GET_CURRENT_RANKING }
}

export const setCurrentRanking = (payload) => {
  return {
    type: SET_CURRENT_RANKING,
    payload,
  }
}

export const currentRankingFailed = (payload) => {
  return {
    type: GET_CURRENT_RANKING_FAILED,
    payload,
  }
}

export const getListFailed = (payload) => {
  return {
    type: GET_LIST_FAILED,
    payload,
  }
}

export function getDateFormatted(date) {
  return new Date(date).toLocaleDateString()
}
