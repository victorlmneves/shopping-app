import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { requestValidation } from '../Register/actions'

import AuthToken from '../../components/AuthToken'

const ActivateAccount = (props) => {
  const token = props.match.params

  const dispatch = useDispatch()

  const { validation } = useSelector((state) => state.register)

  useEffect(() => {
    dispatch(requestValidation(token))
  }, [])

  const { email } = props.match.params

  const values = {
    valid: {
      title: 'GREAT! YOUR EMAIL HAS BEEN VALIDATED',
      description:
        'You can now start helping Santa Claus distribute gifts. 🎅 Log in to the Shopping Challenge and get ready to play.',
      link: '/login',
      linkText: 'Login',
      cssExtra: 'token-container__link--button',
    },
    invalid: {
      title: 'OOOOPS, EXPIRED EMAIL VALIDATION TIME.',
      description:
        'To validate your registration, enter your email. We will send a fresh validation link to the inbox.',
      label: 'SEND NEW EMAIL',
      link: '/signup',
    },
  }

  const { title, description, link, linkText, cssExtra, label } = values[
    validation ? 'valid' : 'invalid'
  ]

  return (
    <AuthToken
      email={email}
      title={title}
      description={description}
      buttonLabel={label}
      link={link}
      linkText={linkText}
      cssExtra={cssExtra}
    />
  )
}

export default withRouter(ActivateAccount)
