import {
  REQUEST_UPLOAD_COUPON,
  SUCCESS_UPLOAD_COUPON,
  FAIL_UPLOAD_COUPON,
  GET_ALL_STORES,
  SET_ALL_STORES,
  CLEAN_UPLOAD_COUPON,
} from './uploadCouponTypes'

export const requestUploadCoupon = (payload) => {
  return {
    type: REQUEST_UPLOAD_COUPON,
    data: payload,
  }
}

export const successUploadCoupon = (attachedCoupon) => {
  return { type: SUCCESS_UPLOAD_COUPON, attachedCoupon }
}

export const failUploadCoupon = (message) => {
  return { type: FAIL_UPLOAD_COUPON, message }
}

export const cleanUploadCoupon = (message) => {
  return { type: CLEAN_UPLOAD_COUPON, message }
}

export const getAllStores = () => {
  return { type: GET_ALL_STORES }
}

export const setAllStores = (payload) => {
  return { type: SET_ALL_STORES, stores: payload }
}
