import http from '../../../utils/config/http'
import { reject } from 'q'
import { put } from 'redux-saga/effects'

import { setRecoverPassword } from '../actions'

import {
  activeSuccess,
  activeError,
} from '../../../containers/Messages/actions'

export function* requestRecoverPassword({ data }) {
  try {
    const resp = yield http.post('/api/open/customer/recover-password', data)
    const _return = {
      success: resp.data,
      message: 'Password successfully recovered.',
    }
    yield put(setRecoverPassword(_return))

    if (resp.status === 200)
      yield put(
        activeSuccess(
          'A link to retrieve the password was sent to the email provided.'
        )
      )
    else
      yield put(activeError('Password recovery error. Please review the data.'))
  } catch (error) {
    const { response } = error
    const _return = {
      success: false,
      message: response.data.error,
    }
    yield put(setRecoverPassword(_return))
    reject(error)
    yield put(activeError('Password recovery error. Please review the data.'))
  }
}
