import { put } from 'redux-saga/effects'
import { reject } from 'q'

import http from '../../../utils/config/http'

import { setUserPrincipal, setUserDetail, setUserCredits } from '../actions'

export function* getUserPrincipal() {
  try {
    const resp = yield http.get('/api/customer/me')
    yield put(setUserPrincipal(resp.data))
  } catch (error) {
    reject(error)
  }
}

export function* getUserDetail() {
  try {
    const resp = yield http.get('/api/customer/me/detail')
    yield put(setUserDetail(resp.data))
  } catch (error) {
    reject(error)
  }
}

export function* getUseCredits() {
  try {
    const resp = yield http.get('/api/credit/')
    yield put(setUserCredits(resp.data))
  } catch (error) {
    reject(error)
  }
}
