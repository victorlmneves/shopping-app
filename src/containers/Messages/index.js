import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { hideSuccess, hideWarning, hideError } from './actions'

import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
} from '@material/react-dialog'

const Messages = (props) => {
  const dispatch = useDispatch()

  const {
    activeSuccess,
    successMessage,
    activeWarning,
    warningMessage,
    activeError,
    errorMessage,
  } = useSelector((state) => state.messagesReducer)

  const handleOkSuccess = () => {
    dispatch(hideSuccess())

    if (props.afterHideSuccess) {
      props.afterHideSuccess()
    }
  }

  const handleOkWarning = () => {
    dispatch(hideWarning())

    if (props.afterHideWarning) {
      props.afterHideWarning()
    }
  }

  const handleOkError = () => {
    dispatch(hideError())

    if (props.afterHideError) {
      props.afterHideError()
    }
  }

  const handleContinuar = () => {
    dispatch(hideSuccess())
    props.afterContinue()
  }

  return (
    <>
      <Dialog open={activeSuccess}>
        <DialogTitle>SucCess</DialogTitle>
        <DialogContent>
          <p style={{ whiteSpace: 'pre-line' }}>{successMessage}</p>
        </DialogContent>
        <DialogFooter>
          <DialogButton onClick={() => handleOkSuccess()}>Ok</DialogButton>
        </DialogFooter>
      </Dialog>

      <Dialog open={activeWarning}>
        <DialogTitle>Alert</DialogTitle>
        <DialogContent>
          <p style={{ whiteSpace: 'pre-line' }}>{warningMessage}</p>
        </DialogContent>
        <DialogFooter>
          <DialogButton onClick={() => handleOkWarning()}>Ok</DialogButton>
        </DialogFooter>
      </Dialog>

      <Dialog open={activeError}>
        <DialogTitle>ErrorMessage</DialogTitle>
        <DialogContent>
          <p style={{ color: 'crimson', whiteSpace: 'pre-line' }}>
            {errorMessage}
          </p>
        </DialogContent>
        <DialogFooter>
          <DialogButton onClick={() => handleOkError()}>Ok</DialogButton>
        </DialogFooter>
      </Dialog>
    </>
  )
}

export default Messages
