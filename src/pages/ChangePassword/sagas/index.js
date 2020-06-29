import http from '../../../utils/config/http'
import { reject } from 'q'
import { put } from 'redux-saga/effects'

import { setChangePassword } from '../actions'
import {
  activeSuccess,
  activeError,
} from '../../../containers/Messages/actions'

export function* requestChangePassword({ data }) {
  const { token } = data
  let resp = null

  try {
    if (token) {
      resp = yield http.post(
        `/api/open/recovery/change-password/${token}`,
        data
      )
    } else {
      resp = yield http.post(`/api/customer/change-password `, data)
    }

    const _return = {
      success: true,
      message: resp.data,
    }
    yield put(setChangePassword(_return))
    yield put(activeSuccess('Password successfully changed.'))
  } catch (error) {
    const { response } = error
    const _return = {
      success: false,
      message: response.message,
    }
    yield put(setChangePassword(_return))
    reject(error)
    console.log(response.status)

    if (response.status === 412) {
      yield put(activeError('Wrong current password.'))
    } else {
      yield put(activeError('Error changing password.'))
    }
  }
}
