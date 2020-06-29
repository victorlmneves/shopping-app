export const ACTIVE_SUCCESS = 'ACTIVE_SUCCESS'
export const ACTIVE_WARNING = 'ACTIVE_WARNING'
export const ACTIVE_ERROR = 'ACTIVE_ERROR'
export const HIDE_SUCCESS = 'HIDE_SUCCESS'
export const HIDE_WARNING = 'HIDE_WARNING'
export const HIDE_ERROR = 'HIDE_ERROR'

export const activeSuccess = (message) => {
  return { type: ACTIVE_SUCCESS, message }
}

export const activeWarning = (message) => {
  return { type: ACTIVE_WARNING, message }
}

export const activeError = (message) => {
  return { type: ACTIVE_ERROR, message }
}

export const hideSuccess = () => {
  return { type: HIDE_SUCCESS }
}

export const hideWarning = () => {
  return { type: HIDE_WARNING }
}

export const hideError = () => {
  return { type: HIDE_ERROR }
}
