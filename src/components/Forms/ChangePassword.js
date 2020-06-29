import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, withRouter } from 'react-router-dom'

import InputText from '../Inputs/InputText'
import Button from '../Button'

import { requestChangePassword } from '../../pages/ChangePassword/actions'

import './Forms.scss'
import Messages from '../../containers/Messages'

const confirmButton = {
  label: 'Confirm',
  link: '/',
}

const cancelButton = {
  label: 'Cancel',
  link: '/',
}

const requiredField = '*Required'
const equalsField = '*Passwords do not match'

const ChangePassword = ({ token }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(
    false
  )
  const [Newpassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordNewError, setPasswordNewError] = useState(null)
  const [confirmPasswordError, setConfirmPasswordError] = useState(null)

  const { successChangePassword } = useSelector((state) => state.changePassword)
  useEffect(() => {
    //console.log('Success changing password', successChangePassword);
    if (successChangePassword) {
      history.push('/login')
    }
  }, [successChangePassword])

  const doChangePassword = () => {
    if (!hasErrors()) {
      const payload = {
        newPassword: Newpassword,
        token,
      }
      dispatch(requestChangePassword(payload))
    }
  }

  function hasErrors() {
    validateRequiredField(Newpassword, setPasswordNewError)
    validateEqualsField(Newpassword, confirmPassword, setConfirmPasswordError)

    return !(Newpassword && confirmPassword && Newpassword === confirmPassword)
  }

  function validateRequiredField(field, setFieldError) {
    if (!field) {
      setFieldError(requiredField)
    } else {
      setFieldError(null)
    }
  }

  function validateEqualsField(fieldOne, fieldTwo, setFieldError) {
    if (!fieldTwo) {
      setFieldError(requiredField)
    } else if (fieldOne !== fieldTwo) {
      setFieldError(equalsField)
    } else {
      setFieldError(null)
    }
  }

  function toggleNewPassword() {
    setIsNewPasswordVisible(!isNewPasswordVisible)
  }

  function toggleConfirmPassword() {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
  }

  const passwordNewInputType = isNewPasswordVisible ? 'text' : 'password'
  const passwordNewIcon = isNewPasswordVisible
    ? 'icon icon__hide icon__hide-profile'
    : 'icon icon__show icon__show-profile'

  const passwordConfirmInputType = isConfirmPasswordVisible
    ? 'text'
    : 'password'
  const passwordConfirmIcon = isConfirmPasswordVisible
    ? 'icon icon__hide icon__hide-profile'
    : 'icon icon__show icon__show-profile'

  return (
    <>
      <div className="forms__field forms__field--password">
        <InputText
          cssExtra="forms__input--pass"
          type={passwordNewInputType}
          id="NewPassword"
          placeholder="New Password"
          value={Newpassword}
          onChange={setNewPassword}
          errorMessage={passwordNewError}
        />
        <i onClick={toggleNewPassword} className={passwordNewIcon}></i>
      </div>
      <div className="forms__field forms__field--password">
        <InputText
          cssExtra="forms__input--pass"
          type={passwordConfirmInputType}
          id="ConfirmNewPassword"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          errorMessage={confirmPasswordError}
        />
        <i onClick={toggleConfirmPassword} className={passwordConfirmIcon}></i>
      </div>
      <div className="forms__wrap-button">
        <Button
          label={confirmButton.label}
          onClick={() => doChangePassword()}
        />
        <Button
          label={cancelButton.label}
          cssExtra="button--inverted"
          onClick={() => history.push('/')}
        />
      </div>
      <Messages />
    </>
  )
}

export default withRouter(ChangePassword)
