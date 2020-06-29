import { reject } from 'q'
import qs from 'qs'
import { put } from 'redux-saga/effects'
import http from '../../../utils/config/http'

import {
  setList,
  setCurrentRanking,
  currentRankingFailed,
  getListFailed,
  getRankingFailed,
  getRankingDone,
} from '../actions'

export function* getList() {
  try {
    const resp = yield http.get('/api/ranking/get-list')
    yield put(setList(resp.data))
  } catch (error) {
    yield put(getListFailed(error))
    reject(error)
  }
}

export function* getRanking({ date }) {
  try {
    const resp = yield http.get(`/api/ranking/get-list?date=${date}`)
    yield put(getRankingDone(resp.data))
  } catch (error) {
    yield put(getRankingFailed(error))
    reject(error)
  }
}

export function* getCurrentRanking() {
  try {
    const resp = yield http.get('/api/ranking/get-current')
    yield put(setCurrentRanking(resp.data))
  } catch (error) {
    yield put(currentRankingFailed(error))
    reject(error)
  }
}
