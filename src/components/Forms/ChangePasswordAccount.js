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

const requiredField = '*Required'
const equalsField = '*Passwords do not match'

const ChangePassword = ({ token }) => {
  const dispatch = useDispatch()

  const [isOldPasswordVisible, setIsOldPasswordVisible] = useState(false)
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(
    false
  )
  const [Oldpassword, setOldPassword] = useState('')
  const [Newpassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordOldError, setPasswordOldError] = useState(null)
  const [passwordNewError, setPasswordNewError] = useState(null)
  const [confirmPasswordError, setConfirmPasswordError] = useState(null)

  const { successChangePassword } = useSelector((state) => state.changePassword)
  useEffect(() => {
    if (successChangePassword);
  }, [successChangePassword])

  const doChangePassword = () => {
    const payload = {
      customer: {
        password: Oldpassword,
      },

      newPassword: Newpassword,
    }

    if (!hasErrors()) {
      dispatch(requestChangePassword(payload))
    }
  }

  function hasErrors() {
    validateRequiredField(Oldpassword, setPasswordOldError)
    validateRequiredField(Newpassword, setPasswordNewError)
    validateEqualsField(Newpassword, confirmPassword, setConfirmPasswordError)

    return !(
      Oldpassword &&
      Newpassword &&
      confirmPassword &&
      Newpassword === confirmPassword
    )
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

  function toggleOldPassword() {
    setIsOldPasswordVisible(!isOldPasswordVisible)
  }

  function toggleNewPassword() {
    setIsNewPasswordVisible(!isNewPasswordVisible)
  }

  function toggleConfirmPassword() {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
  }

  const passwordOldInputType = isOldPasswordVisible ? 'text' : 'password'
  const passwordOldIcon = isOldPasswordVisible
    ? 'icon icon__hide icon__hide-profile'
    : 'icon icon__show icon__show-profile'

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
      <Button
        cssExtra="button--small  button--change-pass"
        label={confirmButton.label}
        onClick={() => doChangePassword()}
      />
      <div className="forms__field forms__field--password">
        <InputText
          type={passwordOldInputType}
          id="OldPassword"
          placeholder="Actual Password"
          value={Oldpassword}
          onChange={setOldPassword}
          errorMessage={passwordOldError}
        />
        <i onClick={toggleOldPassword} className={passwordOldIcon}></i>
      </div>
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
      <Messages />
    </>
  )
}

export default withRouter(ChangePassword)
