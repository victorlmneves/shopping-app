import React from 'react'
import { Link } from 'react-router-dom'

import './MobileHeader.scss'

const MobileHeader = (props) => {
  function collapseMenu() {
    !props.toggleMenu
      ? document.body.classList.add('no-scroll', 'mobile-menu-open')
      : document.body.classList.remove('no-scroll', 'mobile-menu-open')
  }

  return (
    <div className="mobile-header">
      <svg
        onClick={() => {
          props.setToggleMenu(!props.toggleMenu)
          collapseMenu()
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="mobile-header__menu"
      >
        <g transform="translate(0 0.131)">
          <rect width="16" height="16" transform="translate(0 -0.131)" />
          <path
            className="mobile-header__icon"
            d="M0,14V12H8v2ZM0,8V6H16V8ZM0,2V0H16V2Z"
            transform="translate(0 0.869)"
          />
        </g>
      </svg>
      <p className="mobile-header__shopping">
        Shopping {props.customer && props.customer.shoppingName}
      </p>
      <Link to="/conta">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="mobile-header__menu"
        >
          <g>
            <path
              className="mobile-header__icon"
              d="M0,370v-2c0-2.2,3.6-4,8-4s8,1.8,8,4v2Zm4-12a4,4,0,1,1,4,4A4,4,0,0,1,4,358Z"
              transform="translate(0 -354)"
            />
          </g>
        </svg>
      </Link>
    </div>
  )
}

export default MobileHeader
