import React from 'react'

import Logo from '../Logo'
import MainMenu from '../MainMenu'

import './Header.scss'

const HeaderPrivate = ({ customer }) => (
  <div className="header">
    <Logo />
    <MainMenu customer={customer} />
  </div>
)

export default HeaderPrivate
