import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Logo from '../Logo'
import Button from '../Button'
import MainMenu from '../MainMenu'
import './MobileMenu.scss'

import { logout } from '../../pages/Login/actions'

import oauth from '../../utils/oauth'

const MobileMenu = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  let { userCredits } = useSelector((state) => state.appReducer)

  function doLogout() {
    dispatch(logout())
    oauth.logout()
    history.push('/')
    document.body.classList.remove('no-scroll', 'mobile-menu-open')
  }

  const firstName = props.customer.detail ? props.customer.detail.firstName : ''
  const lastName = props.customer.detail ? props.customer.detail.lastName : ''

  return (
    <div className={`mobile-menu ${props.toggleMenu ? 'open' : ''}`}>
      <Logo />
      <div className="mobile-menu__head">
        <p className="mobile-menu__user">{`${firstName} ${lastName}`}</p>
        <p className="mobile-menu__shopping">{props.customer.shoppingName}</p>
        <p className="mobile-menu__credits">
          <strong>{userCredits.credits}</strong> Credits
        </p>
        <Button label="Logout" onClick={() => doLogout()} />
      </div>
      <MainMenu
        setToggleMenu={props.setToggleMenu}
        toggleMenu={props.toggleMenu}
        customer={props.customer}
      />
    </div>
  )
}

export default MobileMenu
