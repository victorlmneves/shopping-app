import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

import oauth from '../../utils/oauth'
import { getUserDetail, getUserCredits } from '../App/actions'

import HeaderPrivate from '../../components/Header/HeaderPrivate'
import Mobile from '../../components/Mobile'
import FooterPrivate from '../../components/Footer/FooterPrivate'
import SocialNetworks from '../../components/SocialNetworks'
import Copyright from '../../components/Copyright'

const PrivateLayout = ({ children, customer }) => {
  const dispatch = useDispatch()
  let { userDetail, userCredits } = useSelector((state) => state.appReducer)
  let customerHeader = {
    credits: userCredits && userCredits.credits ? userCredits.credits : -1,
    shoppingName:
      userDetail && userDetail.shoppingName ? userDetail.shoppingName : '',
  }

  useEffect(() => {
    if (oauth.getToken()) {
      dispatch(getUserDetail())
      dispatch(getUserCredits())
    }
  }, [])

  useEffect(() => {
    if (oauth.getToken()) {
      dispatch(getUserCredits())
    }
  }, [userDetail])

  document.getElementById('root').classList.remove('public-pages')
  document.getElementById('root').classList.add('private-pages')
  document.getElementById('root').classList.remove('public-pages')

  return (
    <div className="container">
      <HeaderPrivate customer={customerHeader} />
      <Mobile customer={userDetail} />
      {children}
      <FooterPrivate />
      <SocialNetworks customer={customer} />
      <Copyright />
    </div>
  )
}

export default withRouter(PrivateLayout)
