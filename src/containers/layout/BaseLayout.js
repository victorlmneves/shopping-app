import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import { isPublicLayout } from '../../utils/config/theme'

import PublicLayout from './PublicLayout'
import PrivateLayout from './PrivateLayout'
import Loader from '../utils/Loader'

const BaseLayout = (props) => {
  const { children, location } = props
  const Container = isPublicLayout(location.pathname)
    ? PublicLayout
    : PrivateLayout

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 700)
  })

  return (
    <>
      <Loader spinning={loading} />
      <Container>{children}</Container>
    </>
  )
}

export default withRouter(BaseLayout)
