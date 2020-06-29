import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter, useHistory } from 'react-router-dom'

import { requestRegister } from '../../pages/Register/actions'
import { requestAllShoppings } from '../../pages/Login/actions'

import InputText from '../Inputs/InputText'
import Select from '../Inputs/Select'
import InputCheckbox from '../Inputs/InputCheckbox'
import Button from '../Button'
import Messages from '../../containers/Messages'

import './Forms.scss'

const legalInfo = `Your data is essential to participate in this promotion. The Company, while responsible for the processing of your personal data, will use your data for the purposes of pursuing this campaign. After the end of the campaign and/or delivery of the prizes, whichever comes first, your data will only be kept if you agree to be contacted for future promotional and marketing campaigns. As the data owner, you will be able to exercise your rights of access, rectification, opposition, portability and elimination at any time by communicating to the email@shopping.com. You can be contacted through electronic communications (email or sms).`

const campaignRulesCheckboxText = `I have read and accept the treatment of my personal data described above, having read the Campaign Regulation.`

const marketingCheckboxText = `I agree to be contacted for future promotional and marketing campaigns, i.e. the Company, the right of access, rectification, opposition, portability and elimination should be sent to the email@shopping.com`

const nextButton = {
  label: 'Next',
  link: '/',
}

const requiredField = '*Required'
const equalsField = '*Passwords needs to match'

const RegisterForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(
    false
  )

  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [shopping, setShopping] = useState('')

  const [marketing, setMarketing] = useState(false)
  const [campaignRules, setCampaignRules] = useState(false)

  const [emailError, setEmailError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)
  const [confirmPasswordError, setConfirmPasswordError] = useState(null)
  const [shoppingError, setShoppingError] = useState(null)
  const [campaignRulesError, setCampaignRulesError] = useState(null)

  const { shoppings } = useSelector((state) => state.login)
  const { isLoadingRegister, successRegister, messageRegister } = useSelector(
    (state) => state.register
  )

  useEffect(() => {
    dispatch(requestAllShoppings())
  }, [])

  const doRegister = () => {
    if (!hasErrors()) {
      const payload = {
        email,
        password,
        shoppingId: shopping,
        campaignRules,
        marketing,
      }
      dispatch(requestRegister(payload))
    }
  }

  function hasErrors() {
    validateRequiredField(email, setEmailError)
    validateRequiredField(password, setPasswordError)
    validateRequiredField(confirmPassword, setConfirmPasswordError)
    validateRequiredField(shopping, setShoppingError)
    validateRequiredField(campaignRules, setCampaignRulesError)
    validateEqualsField(password, confirmPassword, setConfirmPasswordError)

    return !email || !password || !shopping || !campaignRules
  }

  function validateRequiredField(field, setFieldError) {
    if (!field) {
      setFieldError(requiredField)
    } else {
      setFieldError(null)
    }
  }

  function validateEqualsField(fieldOne, fieldTwo, setFieldError) {
    if (fieldOne !== fieldTwo) {
      setFieldError(equalsField)
    } else {
      setFieldError(null)
    }
  }

  function togglePassword() {
    setIsPasswordVisible(!isPasswordVisible)
  }

  function toggleConfirmPassword() {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
  }

  const passwordInputType = isPasswordVisible ? 'text' : 'password'
  const passwordIcon = isPasswordVisible ? 'icon icon__hide' : 'icon icon__show'

  const passwordConfirmInputType = isConfirmPasswordVisible
    ? 'text'
    : 'password'
  const passwordConfirmIcon = isConfirmPasswordVisible
    ? 'icon icon__hide'
    : 'icon icon__show'

  useEffect(() => {
    if (successRegister) {
      history.push(`/signup-email-sent/${email}`)
    } else {
      if (messageRegister) {
        alert(messageRegister)
      }
    }
  }, [successRegister, messageRegister])

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
      <div className="forms__field forms__field--password">
        <InputText
          label="Confirm Password"
          type={passwordConfirmInputType}
          id="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          errorMessage={confirmPasswordError}
        />
        <i onClick={toggleConfirmPassword} className={passwordConfirmIcon}></i>
      </div>
      <p className="forms__text text-left">{legalInfo}</p>
      <div className="forms__field">
        <InputCheckbox
          text={campaignRulesCheckboxText}
          value={campaignRules}
          onChange={setCampaignRules}
          errorMessage={campaignRulesError}
        />
      </div>
      <div className="forms__field">
        <InputCheckbox
          text={marketingCheckboxText}
          value={marketing}
          onChange={setMarketing}
        />
      </div>
      <div className="forms__wrap-button">
        <Button
          label={nextButton.label}
          hasArrow
          onClick={() => doRegister()}
        />
      </div>

      <Messages afterHideSuccess={() => history.push('/login')} />
    </>
  )
}

export default withRouter(RegisterForm)
