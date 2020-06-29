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
} from '../actions/types'

const initialState = {
  isLoadingCoupon: false,
  mainList: [],
  error: null,
  historic: [],
  historicError: null,
  isLoadingHistoric: false,
  user: {
    profile: null,
    isFetchingProfile: false,
    isUpdatingMarketing: false,
  },
}

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_REQUEST: {
      return { ...state, isLoadingCoupon: true }
    }

    case FETCH_PROFILE_SUCCESS: {
      return { ...state, isLoadingCoupon: false, mainList: action.payload }
    }

    case FETCH_PROFILE_ERROR: {
      return { ...state, isLoadingCoupon: false, error: {} }
    }

    case FETCH_USER_HISTORIC: {
      return { ...state, isLoadingHistoric: true }
    }

    case FETCH_USER_HISTORIC_SUCCESS: {
      return { ...state, isLoadingHistoric: false, historic: action.payload }
    }

    case FETCH_USER_HISTORIC_FAIL: {
      return {
        ...state,
        isLoadingHistoric: false,
        historicError: action.payload,
      }
    }

    case FETCH_USER: {
      return {
        ...state,
        user: {
          ...state.user,
          isFetchingProfile: true,
        },
      }
    }

    case FETCH_USER_DONE: {
      return {
        ...state,
        user: {
          ...state.user,
          profile: action.payload,
          isFetchingProfile: false,
        },
      }
    }

    case FETCH_USER_FAIL: {
      return {
        ...state,
        user: {
          ...state.user,
          isFetchingProfile: false,
        },
      }
    }

    case UPDATE_USER_MARKETING: {
      return {
        ...state,
        user: {
          ...state.user,
          isUpdatingMarketing: true,
        },
      }
    }

    case UPDATE_USER_MARKETING_DONE: {
      return {
        ...state,
        user: {
          ...state.user,
          isUpdatingMarketing: false,
        },
      }
    }

    case UPDATE_USER_MARKETING_FAIL: {
      return {
        ...state,
        user: {
          ...state.user,
          isUpdatingMarketing: false,
        },
      }
    }

    default:
      return state
  }
}
