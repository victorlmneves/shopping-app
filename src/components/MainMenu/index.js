import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, withRouter, useHistory } from 'react-router-dom'

import Button from '../Button'

import './MainMenu.scss'
import oauth from '../../utils/oauth'

import { logout } from '../../pages/Login/actions'
import { cleanUploadCoupon } from '../../pages/UploadCoupon/actions'

const MainMenu = ({ setToggleMenu, toggleMenu, customer }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  let { userCredits } = useSelector((state) => state.appReducer)

  useEffect(() => {
    dispatch(cleanUploadCoupon())
  }, [])

  function doLogout() {
    dispatch(logout())
    oauth.logout()
    document.body.classList.remove('no-scroll', 'mobile-menu-open')
    history.push('/')
  }

  function collapseMenu() {
    !toggleMenu
      ? document.body.classList.add('no-scroll', 'mobile-menu-open')
      : document.body.classList.remove('no-scroll', 'mobile-menu-open')
  }

  function isMobileMenu() {
    if (setToggleMenu) {
      setToggleMenu(false)
      collapseMenu()
    }
  }

  function clean() {
    dispatch(cleanUploadCoupon())
  }

  return (
    <nav className="main-menu">
      <ul className="main-menu__list  main-menu__list--top">
        <li className="main-menu__item main-menu__item--small">
          Shopping <span>{customer && customer.shoppingName}</span>
        </li>
        <li className="main-menu__item main-menu__item--small">
          Credits: <span>{userCredits.credits}</span>
        </li>
        <li className="main-menu__item main-menu__item--small">
          <Button label="Logout" onClick={() => doLogout()} />
        </li>
      </ul>
      <ul className="main-menu__list">
        <li className="main-menu__item">
          <NavLink
            to={'/home'}
            onClick={() => isMobileMenu()}
            activeClassName="main-menu__link--active"
            className="main-menu__link"
          >
            How to Participate
          </NavLink>
        </li>
        <li className="main-menu__item">
          <NavLink
            to={'/play'}
            onClick={() => isMobileMenu()}
            activeClassName="main-menu__link--active"
            className="main-menu__link"
          >
            Play
          </NavLink>
        </li>
        <li className="main-menu__item">
          <NavLink
            to={'/ranking'}
            onClick={() => isMobileMenu()}
            activeClassName="main-menu__link--active"
            className="main-menu__link"
          >
            Ranking
          </NavLink>
        </li>
        <li className="main-menu__item">
          <NavLink
            to={'/prizes'}
            onClick={() => isMobileMenu()}
            activeClassName="main-menu__link--active"
            className="main-menu__link"
          >
            Prizes
          </NavLink>
        </li>
        <li className="main-menu__item">
          <NavLink
            to={'/account'}
            onClick={() => isMobileMenu()}
            activeClassName="main-menu__link--active"
            className="main-menu__link"
          >
            Profile
          </NavLink>
        </li>
        <li className="main-menu__item">
          <NavLink
            to={'/faqs'}
            onClick={() => isMobileMenu()}
            activeClassName="main-menu__link--active"
            className="main-menu__link"
          >
            Faqs
          </NavLink>
        </li>
        <li className="main-menu__item main-menu__item--button">
          <NavLink
            to={'/register-coupon'}
            onClick={() => {
              isMobileMenu()
              clean()
            }}
            activeClassName="main-menu__link--button--active"
            className="main-menu__link main-menu__link--button"
          >
            Upload Receipt
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(MainMenu)
