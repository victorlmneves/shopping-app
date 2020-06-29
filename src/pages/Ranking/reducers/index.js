import {
  GET_LIST,
  GET_CURRENT_RANKING,
  GET_RANKING,
  GET_RANKING_DONE,
  GET_RANKING_FAILED,
  SET_LIST,
  SET_CURRENT_RANKING,
  GET_LIST_FAILED,
  GET_CURRENT_RANKING_FAILED,
} from '../actions/rankingTypes'

const initialState = {
  listRanking: {
    shots: [],
  },
  currentRanking: {
    shots: [],
  },
  isLoadingCurrentRanking: false,
  isLoadingListRanking: false,
  isLoadingWeekRanking: false,
  weekRankingList: [],
}

export const rankingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST:
      return { ...state, isLoadingListRanking: true }
    case GET_RANKING:
      return { ...state, isLoadingWeekRanking: true, date: action.date }
    case GET_RANKING_DONE:
      return {
        ...state,
        isLoadingWeekRanking: false,
        weekRankingList: action.data,
      }
    case GET_RANKING_FAILED:
      return { ...state, isLoadingWeekRanking: false }
    case GET_CURRENT_RANKING:
      return { ...state, isLoadingCurrentRanking: true }
    case SET_LIST:
      return {
        ...state,
        listRanking: action.payload,
        isLoadingListRanking: false,
      }
    case SET_CURRENT_RANKING:
      return {
        ...state,
        currentRanking: action.payload,
        isLoadingCurrentRanking: false,
      }
    case GET_LIST_FAILED:
      return { ...state, isLoadingListRanking: false }
    case GET_CURRENT_RANKING_FAILED:
      return { ...state, isLoadingCurrentRanking: false }
    default:
      return state
  }
}
