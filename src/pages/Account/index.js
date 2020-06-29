import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import HeroAccount from '../../components/Hero/HeroAccount'
import AccountSection from '../../components/Section/AccountSection'
import User from '../../components/Account/UserAccount'
import UploadedCredits from '../../components/Account/UploadedCredits'
import UsedCredits from '../../components/Account/UsedCredits'
import { getAllStores } from '../../pages/UploadCoupon/actions'

const Account = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllStores())
  }, [])

  return (
    <main className="main">
      <HeroAccount
        title="CREDITS WHAT DO I WANT YOU FOR?"
        text="Santa needs helpers. Prizes need winners. Use the credits to play and move up the ranking."
        secondText="10€ = 10 Credits"
        credits="0"
        cssExtra="hero--account"
      />
      <AccountSection
        title="MY DATA"
        cssExtraTitle="section__title--smaller"
        anchor="mydata"
      >
        <User />
      </AccountSection>
      <AccountSection
        title="LOADING CREDITS"
        cssExtraTitle="section__title--smaller"
        anchor="loading"
      >
        <UploadedCredits />
      </AccountSection>
      <AccountSection
        title="USE OF CREDITS"
        cssExtraTitle="section__title--smaller"
        anchor="usedcredits"
      >
        <UsedCredits />
      </AccountSection>
    </main>
  )
}

export default Account
