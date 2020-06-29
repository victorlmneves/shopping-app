import React from 'react'
import { useDispatch } from 'react-redux'
import { withRouter, useHistory } from 'react-router-dom'

import Button from '../../Button'

import { cleanUploadCoupon } from '../../../pages/UploadCoupon/actions/index'

import '../Forms.scss'

const subtitle = `This upload has been selected for verification.`

const message = `
Nothing to fear: it is a random process. As soon as we confirm that everything is fine with the receipt, within 48 working hours at the most, the credits will be available. We advise by email.

Until then, a suggestion to pass the time:`

const nextButton = {
  label: "Let's Practice",
  link: '/',
}

const UploadWaiting = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  function clean() {
    dispatch(cleanUploadCoupon())
    history.push('/play')
  }

  return (
    <>
      <div className="forms__image">
        <img srcSet={require('../../../assets/images/audit.png')} alt="audit" />
      </div>
      <h1 className="forms__subtitle">{subtitle}</h1>
      <p className="forms__text forms__text--center">{message}</p>
      <div className="forms__wrap-button">
        <Button label={nextButton.label} hasArrow onClick={() => clean()} />
      </div>
    </>
  )
}

export default withRouter(UploadWaiting)
