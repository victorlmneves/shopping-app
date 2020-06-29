import qs from 'qs'
import { reject } from 'q'
import { put } from 'redux-saga/effects'
import http from '../../../utils/config/http'
import oauth from '../../../utils/oauth'

import { successLogin, failLogin, setAllShoppings } from '../actions'

import { activeError } from '../../../containers/Messages/actions'

export function* requestLoginFake({ data }) {
  const last_request = new Date().getTime()
  const previous_request = null
  try {
    const resp = {
      access_token:
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NzM4MjcxNTAsInVzZXJfbmFtZSI6ImVtYWlsQGVtYWlsLmNvbSIsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4sIEFETUlOLCBVU0VSLCBVU0VSIl0sImp0aSI6IjY2ODRlMzY2LTE3ZDUtNDZmZS1hMWU2LWMxOGFmNWYxMDQxNSIsImNsaWVudF9pZCI6ImNsaWVudElkIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl19.JrYK0e7sbBSyoD0bhruQ2KJkbjrl4dz_dedLzhCI0vrMgXKQH-wKfTBqjZW08g9cfP3VJkyjYuxKRw8-77ncL8iqmESa8hfF9GkjXnwXBpy08JXCCRQlVjPhoxrQ_F9MwhbFLeZVkSaK-mMXMkvRGetA2QhAapBdEVtNGznsz6ZWT8inaYHtJv1j6peWCfmO_ZozPCrc0VkEYi4qmYrvYNeBAcXQDuwZnrbLrXGR-e7Bj96k3EJCwkwSfNb9chF3_up5lY2Q2Gvi2Za0zBmfR3n6bYQWWz4WEVrXoJteu5MZn4n4IT4xp9dP-uqtK9nYe1kxnYQDnGtcWQgVFeXPgA',
      expires_in: 300000,
      last_request: 1573826850250,
      previous_request: 1573826850250,
      refresh_token:
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJlbWFpbEBlbWFpbC5jb20iLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwiYXRpIjoiNjY4NGUzNjYtMTdkNS00NmZlLWExZTYtYzE4YWY1ZjEwNDE1IiwiZXhwIjoxNTc2NDE4ODUwLCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOLCBBRE1JTiwgVVNFUiwgVVNFUiJdLCJqdGkiOiJhMDc0MTI1MC1hM2NjLTRkZWYtOTYzOS1lOThlYTgyNWY0MGMiLCJjbGllbnRfaWQiOiJjbGllbnRJZCJ9.SjQqU-Z8cDhlZsp3M91ij3G6rWWNJ5AZGFzlRURdZ5laticINpytrrPoeP7VxX7ukPPvCqeiUpku6zypvuKVR__wC4PggDB3TlB3dpx2pCUQi_KCrAJLL00IaP02WxdTw20yBrxgGxoy9bQ-z9nXD7usFRBRyanPmfA0zkKg3L6dFiHB1ssUFSBUel0PcvpQOQhvVTTkBZGGHqmovsbzJ93nN9gI9kEX7G5WaqwqUrK1Z61JffseUkcqnLbXdkn_lY_yMgiob8cpfNPuPIRNE_QklLmzO_IQQP0NEtASGgC3AezuPsiipF3aSGJFG_9Xq7ywDJ4mMnhKekPkpz1b_Q',
    }
    yield put(successLogin())
    const { access_token, refresh_token, expires_in } = resp
    oauth.setToken(
      {
        access_token,
        refresh_token,
        expires_in,
        last_request,
        previous_request,
      },
      true
    )
  } catch (error) {
    yield put(failLogin('Username and/or password incorrect.'))
    reject(error)
  }
}

export function* requestLogin({ data }) {
  const last_request = new Date().getTime()
  const previous_request = null
  try {
    const resp = yield http.post('/oauth/token', qs.stringify(data))
    yield put(successLogin())
    const { access_token, refresh_token, expires_in } = resp.data
    oauth.setToken(
      {
        access_token,
        refresh_token,
        expires_in,
        last_request,
        previous_request,
      },
      false
    )
  } catch (error) {
    const errorMessage =
      error.response.status === 400
        ? 'Check if your email and/or password are correct'
        : error.response.data.error.toString()
    yield put(failLogin(errorMessage))
    reject(error)
    yield put(activeError(errorMessage))
  }
}

export function* allShoppings() {
  try {
    const resp = yield http.get('/api/open/shopping/get')
    yield put(setAllShoppings(resp.data))
  } catch (error) {
    reject(error)
  }
}
