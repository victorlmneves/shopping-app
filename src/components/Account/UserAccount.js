import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Button from '../../components/Button'
import ChangePassword from '../../components/Forms/ChangePasswordAccount'
import InputCheckbox from '../../components/Inputs/InputCheckbox'
import { fetchUser, updateUserMarketing } from '../../pages/Account/actions'

import './user.scss'

const marketingInputText =
  'I agree to be contacted for future promotional and marketing campaigns'

const UserAccount = ({ label, text, cssExtra }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  const [visibleUserData, setVisibleUserData] = useState(false)
  // const { userDetail } = useSelector(state => state.appReducer);
  const { user } = useSelector((state) => state.accountReducer)
  const userProfile = user.profile
  const { isUpdatingMarketing } = user

  function toggleUserData() {
    setVisibleUserData(!visibleUserData)
  }

  const userDetail = userProfile || {}

  const firstName = userDetail.detail ? userDetail.detail.firstName : ''
  const lastName = userDetail.detail ? userDetail.detail.lastName : ''
  const birthday = userDetail.detail ? userDetail.detail.birthday : ''
  const nif = userDetail.detail ? userDetail.detail.nif : ''
  const townName = userDetail.detail ? userDetail.detail.townName : ''
  const mobilePhoneNumber = userDetail.detail
    ? userDetail.detail.mobilePhoneNumber
    : ''
  const email = user.profile ? user.profile.email : ''

  const userMarketing = (userProfile && userProfile.marketing) || false
  const [marketingValue, setMarketingValue] = useState(null)

  const isMarketingSubmitEnabled =
    !isUpdatingMarketing &&
    typeof marketingValue === 'boolean' &&
    marketingValue !== userMarketing
  const submitMarketingButtonLabel = isUpdatingMarketing
    ? 'Updating...'
    : 'Updating'
  const submitMarketing = () => {
    if (!isMarketingSubmitEnabled) {
      return
    }

    dispatch(updateUserMarketing(marketingValue))
  }

  return (
    <div className="box box--account">
      <div className="box__content box__content--row">
        <p className="box__text">
          Here you can change your conditions and password.
        </p>
        <Button label="See data" onClick={() => toggleUserData()} />
      </div>
      <div
        className="box__content"
        style={{ display: `${visibleUserData ? 'block' : 'none'}` }}
      >
        <div className="user">
          <div className="user__title">
            <h3>Personal Data</h3>
          </div>
          <div className="user__wrap-details">
            <div className="user__item">
              <span className="user__label">First Name:</span>
              <span className="user__label-value">{firstName}</span>
            </div>
            <div className="user__item">
              <span className="user__label">Last Name:</span>
              <span className="user__label-value">{lastName}</span>
            </div>
            <div className="user__item">
              <span className="user__label">Birthday:</span>
              <span className="user__label-value">{birthday}</span>
            </div>
            <div className="user__item">
              <span className="user__label">VAT:</span>
              <span className="user__label-value">{nif}</span>
            </div>
            <div className="user__item">
              <span className="user__label">Town:</span>
              <span className="user__label-value">{townName}</span>
            </div>
          </div>
          <div className="user__title">
            <h3>Contact Info</h3>
          </div>
          <div className="user__wrap-details">
            <div className="user__item">
              <span className="user__label">Email:</span>
              <span className="user__label-value">{email}</span>
            </div>
            <div className="user__item">
              <span className="user__label">Mobile:</span>
              <span className="user__label-value">{mobilePhoneNumber}</span>
            </div>
          </div>
        </div>
        <div className="user">
          <div className="user__title">
            <h3>Conditions</h3>
          </div>
          <div className="user__item user__item--large">
            <InputCheckbox
              value={
                typeof marketingValue !== 'boolean'
                  ? userMarketing
                  : marketingValue
              }
              text={marketingInputText}
              onChange={setMarketingValue}
            />
            <Button
              cssExtra="button--small"
              label={submitMarketingButtonLabel}
              onClick={submitMarketing}
              disabled={!isMarketingSubmitEnabled}
            />
          </div>
        </div>
        <div className="user">
          <div className="user__title">
            <h3>Password</h3>
          </div>
          <div className="user__wrap-details">
            <form className="forms forms--change-pass">
              <ChangePassword />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserAccount
