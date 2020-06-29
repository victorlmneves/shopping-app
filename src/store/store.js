import createSagaMiddleware from 'redux-saga'
import { root } from './sagas'
import appReducer from './reducers'
import { compose, applyMiddleware, createStore } from 'redux'

let lastAction

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  appReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
)

export function getLastAction() {
  return lastAction
}

store.subscribe(() => {
  lastAction = store.getState().lastAction
})

sagaMiddleware.run(root)

export default store
