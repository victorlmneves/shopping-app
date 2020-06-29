import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, withRouter } from 'react-router-dom'

import { requestRegisterDetail } from '../../../pages/Register/actions'

import InputText from '../../Inputs/InputText'
import Button from '../../Button'
import Messages from '../../../containers/Messages'

import '../Forms.scss'
import '../../Modal/Modal.scss'

const nextButton = {
  label: 'Next',
}

const prevButton = {
  label: 'Previous',
}

const requiredField = '*Requires'
const required9Digits = '*Invalid Format.'
const requiredAge18 = '*You must be at least 18 years old to participate!'
const onlyAlphabet = '*The field can only contain letters and spaces.'

const RegisterDetails = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobilePhoneNumber, setMobilePhoneNumber] = useState('')
  const [nif, setNif] = useState('')
  const [localidade, setLocalidade] = useState('')
  const [birthday, setBirthday] = useState('')

  const [firstNameError, setFirstNameError] = useState(null)
  const [lastNameError, setLastNameError] = useState(null)
  const [mobilePhoneNumberError, setMobilePhoneNumberError] = useState(null)
  const [nifError, setNifError] = useState(null)
  const [localidadeError, setLocalidadeError] = useState(null)
  const [birthdayError, setBirthdayError] = useState(null)

  const doRegisterDetail = () => {
    if (!hasErrors()) {
      const payload = {
        firstName,
        lastName,
        birthday,
        vat,
        mobilePhoneNumber,
        townName,
      }
      dispatch(requestRegisterDetail(payload))
      closeModal()
    }
  }

  const isUnder18 = (date) =>
    new Date(
      date.getFullYear() + 18,
      date.getMonth() + 1 - 1,
      date.getDate()
    ) <= new Date()

  function hasErrors() {
    validateRequiredField(firstName, setFirstNameError)
    validateRequiredField(lastName, setLastNameError)
    validateRequiredField(birthday, setBirthdayError)
    validateRequiredField(nif, setNifError)
    validateRequiredField(mobilePhoneNumber, setMobilePhoneNumberError)
    validateRequiredField(townName, setTownNameError)
    validateNumberOfDigits(nif, setNifError)
    validateNumberOfDigits(mobilePhoneNumber, setMobilePhoneNumberError)
    validateAge(birthday, setBirthdayError)
    validateInput(firstName, setFirstNameError)
    validateInput(lastName, setLastNameError)
    validateInput(townName, setTownNameError)

    return (
      !firstName ||
      !lastName ||
      !birthday ||
      !nif ||
      !mobilePhoneNumber ||
      !localidade ||
      !isUnder18(new Date(birthday))
    )
  }

  function validateRequiredField(field, setFieldError) {
    if (!field) {
      setFieldError(requiredField)
    } else {
      setFieldError(null)
    }
  }

  function validateNumberOfDigits(field, setFieldError) {
    if (!field) {
      setFieldError(requiredField)
    } else if (field.length < 9) {
      setFieldError(required9Digits)
    } else {
      setFieldError(null)
    }
  }

  function validateAge(field, setFieldError) {
    let bDay = new Date(field)
    const isValidAge = isUnder18(bDay)

    if (!field) {
      setFieldError(requiredField)
    } else if (!isValidAge) {
      setFieldError(requiredAge18)
    } else {
      setFieldError(null)
    }
  }

  function validateInput(field, setFieldError) {
    const letters = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/

    if (!field) {
      setFieldError(requiredField)
    } else if (!field.match(letters)) {
      setFieldError(onlyAlphabet)
    } else {
      setFieldError(null)
    }
  }

  function openModal() {
    if (!hasErrors()) {
      document.body.classList.add('no-scroll-profile')
      document.querySelector('.js-profile-modal').classList.add('open')
    }
  }

  function closeModal() {
    document.body.classList.remove('no-scroll-profile')
    document.querySelector('.js-profile-modal').classList.remove('open')
  }

  function openInfoModal() {
    document.body.classList.add('no-scroll-profile')
    document.querySelector('.js-nif-modal').classList.add('open')
  }

  function closeInfoModal() {
    document.body.classList.remove('no-scroll-profile')
    document.querySelector('.js-nif-modal').classList.remove('open')
  }

  return (
    <>
      <div className="forms__field">
        <InputText
          label="First Name"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={setFirstName}
          errorMessage={firstNameError}
        />
      </div>
      <div className="forms__field">
        <InputText
          label="Last Name"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={setLastName}
          errorMessage={lastNameError}
        />
      </div>
      <div className="forms__field">
        <InputText
          label="Phone Number"
          type="number"
          placeholder="Phone Number"
          value={mobilePhoneNumber}
          maxChars={9}
          onChange={setMobilePhoneNumber}
          errorMessage={mobilePhoneNumberError}
        />
      </div>
      <div className="forms__field forms__field--icon">
        <InputText
          label="VAT"
          type="number"
          placeholder="VAT"
          value={nif}
          maxChars={9}
          onChange={setVat}
          errorMessage={nifError}
        />
        <i
          onClick={() => {
            openInfoModal()
          }}
          className="js-nif-info icon icon--info icon--info-nif"
        ></i>
      </div>
      <div className="forms__field">
        <InputText
          label="Town"
          type="text"
          placeholder="Town"
          value={town}
          onChange={setTownName}
          errorMessage={townNameError}
        />
      </div>
      <div className="forms__field">
        <InputText
          label="Birthday"
          type="date"
          placeholder="Birthday"
          value={birthday}
          onChange={setBirthday}
          errorMessage={birthdayError}
        />
      </div>
      <p className="forms__text forms__text--center">
        <i className="icon icon--info"></i>You must be at least 18 years old to
        participate
      </p>
      <div className="forms__wrap-button">
        <Button
          label={nextButton.label}
          hasArrow
          onClick={() => {
            openModal()
          }}
        />
      </div>

      <Messages />

      <div className="overlay-profile"></div>

      <div className="js-profile-modal modal-profile">
        <div
          onClick={() => {
            closeModal()
          }}
          className="js-close-modal modal__close"
        >
          X
        </div>
        <div className="modal__content">
          <img
            className="modal__icon"
            src={require('../../../assets/images/icon-info-large.png')}
            alt="Attention"
          />
          <p>
            <span>First Name: </span>
            {firstName}
          </p>
          <p>
            <span>Last Name: </span>
            {lastName}
          </p>
          <p>
            <span>Phone Number: </span>
            {mobilePhoneNumber}
          </p>
          <p>
            <span>VAT: </span>
            {vat}
          </p>
          <p>
            <span>Town: </span>
            {town}
          </p>
          <p className="last-data">
            <span>Birthday: </span>
            {birthday}
          </p>
          <p>
            Everythinh ok? 🔎
            <br />
            Check everything before clicking Next.
          </p>
          <br />
          <p className="text-magenta">
            It is not allowed to edit personal data again.
          </p>
        </div>
        <div className="modal__actions">
          <Button
            label={prevButton.label}
            hasPrevArrow
            cssExtra="button--inverted button--prev"
            onClick={() => {
              closeModal()
            }}
          />
          <Button
            label={nextButton.label}
            hasArrow
            onClick={() => doRegisterDetail()}
          />
        </div>
      </div>

      <div className="js-nif-modal modal-profile">
        <div
          onClick={() => {
            closeInfoModal()
          }}
          className="js-close-modal modal__close"
        >
          X
        </div>
        <div className="modal__content">
          <img
            className="modal__icon"
            src={require('../../../assets/images/icon-info-large.png')}
            alt="Attention"
          />
          <p>
            The VAT is the <span>unique indicator</span> of our database that
            allows us to verify the identity of the winners when it comes to
            awarding and delivering prizes.
          </p>
        </div>
      </div>
    </>
  )
}

export default withRouter(RegisterDetails)
