import { combineReducers } from 'redux'

import { appReducer } from '../../containers/App/reducers'
import { loginReducer } from '../../pages/Login/reducers'
import { rankingReducer } from '../../pages/Ranking/reducers'
import { uploadCouponReducer } from '../../pages/UploadCoupon/reducers'
import { registerReducer } from '../../pages/Register/reducers'
import { forgotPasswordReducer } from '../../pages/ForgotPassword/reducers'
import { accountReducer } from '../../pages/Account/reducers'
import { messagesReducer } from '../../containers/Messages/reducers'
import { changePasswordReducer } from '../../pages/ChangePassword/reducers'

function lastAction(state = null, action) {
  return action
}

const rootReducer = combineReducers({
  appReducer,
  login: loginReducer,
  register: registerReducer,
  ranking: rankingReducer,
  uploadCoupon: uploadCouponReducer,
  forgotPassword: forgotPasswordReducer,
  accountReducer,
  messagesReducer,
  lastAction,
  changePassword: changePasswordReducer,
})

export default rootReducer
