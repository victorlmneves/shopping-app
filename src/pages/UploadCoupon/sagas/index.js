import http from '../../../utils/config/http'
import { reject } from 'q'
import { put } from 'redux-saga/effects'

import { successUploadCoupon, failUploadCoupon, setAllStores } from '../actions'
import { activeError } from '../../../containers/Messages/actions'

import { API_URL } from '../../../utils/constants'

export function* allStores() {
  try {
    const resp = yield http.get('/api/store/all')
    yield put(setAllStores(resp.data))
  } catch (error) {
    const { response } = error
    yield put(activeError(response.data.error))
    reject(error)
  }
}

export function* uploadCoupon({ data }) {
  const json = JSON.stringify(data.coupon)
  const blob = new Blob([json], {
    type: 'application/json',
  })

  const _data = new FormData()
  _data.append('file', data.file)
  _data.append('json', blob)

  try {
    const resp = yield http.post(`${API_URL}/api/coupon/register`, _data)
    yield put(successUploadCoupon(resp.data))
  } catch (error) {
    const { response } = error
    yield put(failUploadCoupon())
    yield put(activeError(response.data.error))
    reject(error)
  }
}
