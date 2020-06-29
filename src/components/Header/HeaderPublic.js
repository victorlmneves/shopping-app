import React from 'react'
import { withRouter } from 'react-router-dom'

import Logo from '../Logo'
import LinkButton from '../LinkButton'

import './Header.scss'

const loginButton = {
  label: 'Login',
  link: '/login',
}

const registerButton = {
  label: 'Signup',
  link: '/signup',
}

const Header = (props) => {
  const currentLocation = props.location.pathname

  return (
    <div className="header header--public">
      <Logo />
      {currentLocation === '/registo' && (
        <div className="header__wrap-buttons">
          <span>TAlready have an account?</span>
          <LinkButton linkData={loginButton} />
        </div>
      )}
      {currentLocation === '/login' && (
        <div className="header__wrap-buttons">
          <span>?</span>
          <LinkButton linkData={registerButton} />
        </div>
      )}
      {currentLocation.includes('/signup-details') && (
        <div className="header__wrap-buttons">
          <span>Not yet registered?</span>
          <LinkButton linkData={registerButton} />
        </div>
      )}
    </div>
  )
}

export default withRouter(Header)
