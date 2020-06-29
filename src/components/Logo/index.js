import React from 'react'
import { Link } from 'react-router-dom'

import './Logo.scss'

function closeMobileMenu() {
  const isOpen = document.body.classList

  if (isOpen[0] && isOpen[0].includes('no-scroll')) {
    document.body.classList.remove('no-scroll')
    document.querySelector('.mobile-menu').classList.remove('open')
  }
}

function Logo() {
  return (
    <Link
      onClick={() => {
        closeMobileMenu()
      }}
      to={'/'}
    >
      <figure className="logo">
        <img
          src={require('../../assets/images/logo.svg')}
          alt="Alt Text"
        />
      </figure>
    </Link>
  )
}

export default Logo
