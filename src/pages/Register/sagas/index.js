import { reject } from 'q'
import { put } from 'redux-saga/effects'
import http from '../../../utils/config/http'
import { fetchUser } from '../../Account/actions'

import {
  successRegister,
  failRegister,
  successRegisterDetail,
  failRegisterDetail,
  toggleValidation,
} from '../actions'

import { activeError } from '../../../containers/Messages/actions'

export function* requestRegister({ data }) {
  try {
    yield http.post('/api/open/customer/register', data)
    yield put(successRegister())
  } catch (error) {
    yield put(failRegister())
    yield put(activeError(error.response.data.error.toString()))
    reject(error)
  }
}

export function* requestRegisterDetail({ data }) {
  try {
    yield http.post('/api/customer/detail', data)
    yield put(successRegisterDetail())
    yield put(fetchUser())
  } catch (error) {
    yield put(failRegisterDetail())
    yield put(activeError(error.response.data.error.toString()))
    reject(error)
  }
}

export function* requestValidation({ data }) {
  try {
    const resp = yield http.get(`api/open/validation/activate/${data.token}`)

    if (resp.status === 200) {
      yield put(toggleValidation(true))
    } else {
      yield put(toggleValidation(false))
    }
  } catch (error) {
    yield put(toggleValidation(false))
    reject(error)
  }
}
