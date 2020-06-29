import {
  REQUEST_UPLOAD_COUPON,
  SUCCESS_UPLOAD_COUPON,
  FAIL_UPLOAD_COUPON,
  SET_ALL_STORES,
  CLEAN_UPLOAD_COUPON,
} from '../actions/uploadCouponTypes'

const initialState = {
  isLoadingUploadCoupon: false,
  successUploadCoupon: false,
  failUploadCoupon: false,
  messageUploadCoupon: '',
  stores: [],
  attachedCoupon: {
    status: null,
  },
}

export const uploadCouponReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_UPLOAD_COUPON:
      return {
        ...state,
        isLoadingUploadCoupon: true,
        messageUploadCoupon: '',
        failUploadCoupon: false,
        successUploadCoupon: false,
      }
    case SUCCESS_UPLOAD_COUPON:
      return {
        ...state,
        successUploadCoupon: true,
        attachedCoupon: action.attachedCoupon,
      }
    case FAIL_UPLOAD_COUPON:
      return {
        ...state,
        failUploadCoupon: true,
        attachedCoupon: initialState.attachedCoupon,
      }
    case CLEAN_UPLOAD_COUPON:
      return {
        ...state,
        failUploadCoupon: false,
        isLoadingUploadCoupon: false,
        successUploadCoupon: false,
        messageUploadCoupon: '',
        attachedCoupon: initialState.attachedCoupon,
      }
    case SET_ALL_STORES:
      return { ...state, stores: action.stores }
    default:
      return state
  }
}
