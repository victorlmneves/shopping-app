import React from 'react'

import AuthToken from '../../components/AuthToken'

const title = 'Email sent to'
const validationInstructions =
  "To validate your registration, check the inbox and click on the link we send .If you can't find our email, check out Spam (some elves like to hide there 👀)."

const RegisterEmailSent = (props) => {
  const { email } = props.match.params

  return (
    <AuthToken
      email={email}
      title={title}
      description={validationInstructions}
      link="/"
      linkText="Back"
    />
  )
}

export default RegisterEmailSent
