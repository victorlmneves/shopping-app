import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, withRouter, useHistory } from 'react-router-dom'

import oauth from '../../utils/oauth'
import { requestLogin, requestAllShoppings } from '../../pages/Login/actions'
import { SCOPE, GRANT_TYPE_PASSWORD } from '../../utils/constants'

import InputText from '../Inputs/InputText'
import Select from '../Inputs/Select'
import InputCheckbox from '../Inputs/InputCheckbox'
import Button from '../Button'

import './Forms.scss'
import Messages from '../../containers/Messages'

const subtitle = `Shopping for xmas gives prizes. 🎁
Just fill in to start playing. You can already hear Santa’s reindeer…`

const rememberPassword = `Remember Password`

const recoverPassword = `Forgot password?`

const nextButton = {
  label: 'Next',
  link: '/',
}

const requiredField = '*Required'

const FormLogin = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [shopping, setShopping] = useState('')
  const [emailError, setEmailError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)
  const [shoppingError, setShoppingError] = useState(null)

  //isLoadingLogin,
  //messageLogin,
  const { shoppings, successLogin, messageLogin } = useSelector(
    (state) => state.login
  )

  useEffect(() => {
    if (oauth.getToken() !== null) {
      //TODO Check if the token is valid
      history.push('/home')
    }

    dispatch(requestAllShoppings())
  }, [])

  useEffect(() => {
    if (successLogin) {
      history.push('/home')
    }
  }, [successLogin])

  const doLogin = () => {
    if (!hasErrors()) {
      const payload = {
        username: email,
        password: password,
        scope: SCOPE,
        grant_type: GRANT_TYPE_PASSWORD,
        shoppingId: shopping,
      }
      dispatch(requestLogin(payload))
    }
  }

  function hasErrors() {
    validateRequiredField(email, setEmailError)
    validateRequiredField(password, setPasswordError)
    validateRequiredField(shopping, setShoppingError)

    return !email || !password || !shopping
  }

  function validateRequiredField(field, setFieldError) {
    if (!field) {
      setFieldError(requiredField)
    } else {
      setFieldError(null)
    }
  }

  function togglePassword() {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const passwordInputType = isPasswordVisible ? 'text' : 'password'
  const passwordIcon = isPasswordVisible ? 'icon icon__hide' : 'icon icon__show'

  return (
    <>
      <div className="forms__field">
        <p className="forms__text">{subtitle}</p>
        <InputText
          label="Email"
          type="text"
          id="email"
          placeholder="email@domain.com"
          value={email}
          onChange={setEmail}
          errorMessage={emailError}
        />
      </div>
      <div className="forms__field">
        <Select
          label="Choose Shopping"
          list={shoppings}
          value={shopping}
          onChange={setShopping}
          errorMessage={shoppingError}
        />
      </div>
      <div className="forms__field forms__field--password">
        <InputText
          label="Password"
          type={passwordInputType}
          id="password"
          placeholder="Password"
          value={password}
          onChange={setPassword}
          errorMessage={passwordError}
        />
        <i onClick={togglePassword} className={passwordIcon}></i>
      </div>
      <div className="forms__field">
        <InputCheckbox text={rememberPassword} name="rememberPassword" />
      </div>
      <div className="forms__wrap-button">
        <Button label={nextButton.label} hasArrow onClick={() => doLogin()} />
      </div>
      <p className="forms__text forms__text--center">
        <Link to="/recover-password" className="link">
          {recoverPassword}
        </Link>
      </p>

      <Messages />
    </>
  )
}

export default withRouter(FormLogin)
