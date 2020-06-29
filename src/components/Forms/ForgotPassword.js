import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { requestRecoverPassword } from '../../pages/ForgotPassword/actions'
import { requestAllShoppings } from '../../pages/Login/actions'

import InputText from '../Inputs/InputText'
import Select from '../Inputs/Select'
import Button from '../Button'

import './Forms.scss'
import Messages from '../../containers/Messages'

const shoppingList = [
  {
    id: 0,
    value: '',
    name: 'Choose the Shopping',
  },
  {
    id: 1,
    value: 1,
    name: 'Shopping #1',
  },
  {
    id: 2,
    value: 2,
    name: 'Shopping #2',
  },
  {
    id: 3,
    value: 3,
    name: 'Shopping #3',
  },
  {
    id: 4,
    value: 4,
    name: 'Shopping #4',
  },
  {
    id: 5,
    value: 5,
    name: 'Shopping #5',
  },
]

const info = `Forgot password?\nIt happens. Enter your registration email and we will send you a message with instructions to recover your password.`

const confirmButton = {
  label: 'Confirm',
  link: '/',
}

const cancelButton = {
  label: 'Cancel',
  link: '/',
}

const requiredField = '*Required'

const ForgotPassword = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [shopping, setShopping] = useState('')

  const [emailError, setEmailError] = useState(null)
  const [shoppingError, setShoppingError] = useState(null)

  const { shoppings } = useSelector((state) => state.login)

  useEffect(() => {
    dispatch(requestAllShoppings())
  }, [])

  const doRequestRecoverPassword = () => {
    if (!hasErrors()) {
      const payload = {
        email: email,
        shoppingId: shopping,
      }
      dispatch(requestRecoverPassword(payload))
    }
  }

  function hasErrors() {
    validateRequiredField(email, setEmailError)
    validateRequiredField(shopping, setShoppingError)

    return !email || !shopping
  }

  function validateRequiredField(field, setFieldError) {
    if (!field) {
      setFieldError(requiredField)
    } else {
      setFieldError(null)
    }
  }

  function goToLogin() {
    history.push('/')
  }

  return (
    <>
      <div className="forms__field">
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
          label="Choose the Shopping"
          list={shoppings}
          value={shopping}
          onChange={setShopping}
          errorMessage={shoppingError}
        />
      </div>
      <p className="forms__text">
        {info.split('\n').map((i, key) => {
          return (
            <span key={key}>
              {i}
              <br />
            </span>
          )
        })}
      </p>
      <div className="forms__wrap-button">
        <Button
          label={confirmButton.label}
          onClick={() => doRequestRecoverPassword()}
        />
        <Button
          label={cancelButton.label}
          cssExtra="button--inverted"
          onClick={() => goToLogin()}
        />
      </div>

      <Messages />
    </>
  )
}

export default ForgotPassword
