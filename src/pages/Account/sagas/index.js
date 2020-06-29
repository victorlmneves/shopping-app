import qs from 'qs'
import { reject } from 'q'
import { put, all } from 'redux-saga/effects'
import http from '../../../utils/config/http'

import {
  successProfileCredits,
  failProfileCredits,
  fetchUserHistoricSuccess,
  fetchUserHistoricFail,
  fetchUser as fetchUserAction,
  fetchUserDone,
  fetchUserFail,
  updateUserMarketingDone,
  updateUserMarketingFail,
} from '../actions'

export function* requestProfileCredits({ data }) {
  try {
    //const resp = yield http.get('/api/coupon/get-lists?status=ENABLED', qs.stringify(data));
    const resp = yield http.get('/api/coupon/get-lists', qs.stringify(data))
    yield put(successProfileCredits(resp.data))
  } catch (error) {
    console.log('estou aqui: ', error)
    yield put(failProfileCredits(error.response.data.error.toString()))
    reject(error)
  }
}

export function* fetchUserHistoric() {
  try {
    const { data } = yield http.get('/api/customer/historic')
    yield put(fetchUserHistoricSuccess(data))
  } catch (error) {
    yield put(fetchUserHistoricFail(error))
    reject(error)
  }
}

export function* fetchUser() {
  try {
    const { data } = yield http.get('/api/customer/me')
    yield put(fetchUserDone(data))
  } catch (error) {
    yield put(fetchUserFail(error))
    reject(error)
  }
}

export function* updateUserMarketing({ payload }) {
  try {
    yield http.post('/api/customer/updating-marketing', { marketing: payload })
    yield all([put(updateUserMarketingDone()), put(fetchUserAction())])
  } catch (error) {
    yield put(updateUserMarketingFail(error))
    reject(error)
  }
}
