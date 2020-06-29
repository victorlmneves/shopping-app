import React from 'react'

import HeaderPublic from '../../components/Header/HeaderPublic'
import FooterPublic from '../../components/Footer/FooterPublic'

export default ({ children }) => {
  document.getElementById('root').classList.remove('private-pages')
  document.getElementById('root').classList.add('public-pages')
  document.getElementById('root').classList.remove('private-pages')

  return (
    <div className="container">
      <HeaderPublic cssExtra="header--public" />
      {children}
      <FooterPublic />
    </div>
  )
}
