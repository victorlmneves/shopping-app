import { takeLatest, all } from 'redux-saga/effects'

import {
  GET_USER_PRINCIPAL,
  GET_USER_DETAIL,
  GET_USER_CREDITS,
} from '../../containers/App/actions/appTypes'
import {
  getUserPrincipal,
  getUserDetail,
  getUseCredits,
} from '../../containers/App/sagas'

import {
  REQUEST_LOGIN,
  REQUEST_ALL_SHOPPINGS,
} from '../../pages/Login/actions/loginTypes'
import { requestLogin, allShoppings } from '../../pages/Login/sagas'

import {
  REQUEST_REGISTER,
  REQUEST_REGISTER_DETAIL,
  REQUEST_VALIDATION,
} from '../../pages/Register/actions/registerTypes'
import {
  requestRegister,
  requestRegisterDetail,
  requestValidation,
} from '../../pages/Register/sagas'

import {
  GET_CURRENT_RANKING,
  GET_LIST,
  GET_RANKING,
} from '../../pages/Ranking/actions/rankingTypes'
import {
  getCurrentRanking,
  getList,
  getRanking,
} from '../../pages/Ranking/sagas'

import {
  REQUEST_UPLOAD_COUPON,
  GET_ALL_STORES,
} from '../../pages/UploadCoupon/actions/uploadCouponTypes'
import { uploadCoupon, allStores } from '../../pages/UploadCoupon/sagas'

import { REQUEST_RECOVER_PASSWORD } from '../../pages/ForgotPassword/actions/forgotPasswordTypes'
import { requestRecoverPassword } from '../../pages/ForgotPassword/sagas'

import { REQUEST_CHANGE_PASSWORD } from '../../pages/ChangePassword/actions/changePasswordTypes'
import { requestChangePassword } from '../../pages/ChangePassword/sagas'

import {
  FETCH_PROFILE_REQUEST,
  FETCH_USER_HISTORIC,
  FETCH_USER,
  UPDATE_USER_MARKETING,
} from '../../pages/Account/actions/types'
import {
  requestProfileCredits,
  fetchUserHistoric,
  fetchUser,
  updateUserMarketing,
} from '../../pages/Account/sagas'

export function* root() {
  yield all([
    takeLatest(GET_USER_PRINCIPAL, getUserPrincipal),
    takeLatest(GET_USER_DETAIL, getUserDetail),
    takeLatest(GET_USER_CREDITS, getUseCredits),

    takeLatest(REQUEST_LOGIN, requestLogin),
    takeLatest(REQUEST_ALL_SHOPPINGS, allShoppings),

    takeLatest(REQUEST_REGISTER, requestRegister),
    takeLatest(REQUEST_REGISTER_DETAIL, requestRegisterDetail),
    takeLatest(REQUEST_VALIDATION, requestValidation),

    takeLatest(GET_LIST, getList),
    takeLatest(GET_RANKING, getRanking),
    takeLatest(GET_CURRENT_RANKING, getCurrentRanking),

    takeLatest(REQUEST_UPLOAD_COUPON, uploadCoupon),
    takeLatest(GET_ALL_STORES, allStores),

    takeLatest(REQUEST_RECOVER_PASSWORD, requestRecoverPassword),

    takeLatest(REQUEST_CHANGE_PASSWORD, requestChangePassword),

    takeLatest(FETCH_PROFILE_REQUEST, requestProfileCredits),
    takeLatest(FETCH_USER_HISTORIC, fetchUserHistoric),
    takeLatest(FETCH_USER, fetchUser),
    takeLatest(UPDATE_USER_MARKETING, updateUserMarketing),
  ])
}
