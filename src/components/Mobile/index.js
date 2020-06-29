import React, { useState } from 'react'

import MobileHeader from '../MobileHeader'
import MobileMenu from '../MobileMenu'

const Mobile = ({ customer }) => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <>
      <MobileHeader
        customer={customer}
        setToggleMenu={setToggleMenu}
        toggleMenu={toggleMenu}
      />
      <MobileMenu
        setToggleMenu={setToggleMenu}
        toggleMenu={toggleMenu}
        customer={customer}
      />
    </>
  )
}

export default Mobile
