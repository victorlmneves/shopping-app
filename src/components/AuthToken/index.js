import React from 'react'
import { Link, withRouter, useHistory } from 'react-router-dom'

import Button from '../../components/Button'

import './AuthToken.scss'

function AuthToken({
  title,
  description,
  link,
  linkText,
  cssExtra,
  email = null,
  buttonLabel,
  buttonOnClick = () => {},
}) {
  const history = useHistory()

  return (
    <div className="token-container">
      <h1 className="token-container__title">{title}</h1>
      {email && <p className="token-container__email">{email}</p>}
      <p className="token-container__text">{description}</p>
      {buttonLabel && (
        <Button
          label={buttonLabel}
          onClick={buttonOnClick}
          cssExtra="action-button"
        />
      )}
      {link && (
        <p
          onClick={() => history.push(link)}
          className={`token-container__link ${cssExtra ? cssExtra : ''}`}
        >
          {linkText}
        </p>
      )}
    </div>
  )
}

export default AuthToken
