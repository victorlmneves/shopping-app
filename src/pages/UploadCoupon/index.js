import React from 'react'
import { useSelector } from 'react-redux'
import RegisterDetail from '../../components/Forms/Coupon/RegisterDetail'
import HeroForm from '../../components/Hero/HeroForm'
import AttachCoupon from '../../components/Forms/Coupon/AttachCoupon'
import FormsSection from '../../components/Section/FormsSection'
import UploadEnabled from '../../components/Forms/Coupon/UploadEnabled'
import UploadWaiting from '../../components/Forms/Coupon/UploadWaiting'

const UploadCouponForm = () => {
  const { userDetail } = useSelector((state) => state.appReducer)
  const { successUploadCoupon, attachedCoupon } = useSelector(
    (state) => state.uploadCoupon
  )
  const { successRegisterDetail } = useSelector((state) => state.register)

  const isUserRegisteredDetails = userDetail.detail || successRegisterDetail

  let title = isUserRegisteredDetails ? 'SHOP DATA' : 'UPLOAD INVOICES'
  let text = isUserRegisteredDetails
    ? 'Time to confirm that the data is correct. Check and finish.'
    : 'Everything ready to start? First, we need the data filled in.'

  const statusEnabled = attachedCoupon.status === 'ENABLED'
  const statusWaiting = attachedCoupon.status === 'WAITING'

  if (!isUserRegisteredDetails && !successUploadCoupon) {
    title = 'UPLOAD INVOICES'
    text = 'Ready to start? First, you need to fill the data.'
  }

  if (isUserRegisteredDetails && !successUploadCoupon) {
    title = 'SHOP DATA'
    text = 'Time to confirm that the data is correct. Check and finish.'
  }

  if (successUploadCoupon && statusEnabled) {
    title = 'HO HO YEAHHHHHH!'
    text = 'Upload finished with success.'
  }

  if (attachedCoupon && statusWaiting) {
    title = 'VALIDATION'
    text =
      'Thank you for the participation, the invoice arrived safe and sound. We just need to take a look.'
  }

  return (
    <main className="main">
      <div className="main__forms main__forms--coupon">
        <HeroForm title={title} text={text} cssExtra="hero--coupon" />
        <FormsSection>
          <div className="forms forms--coupon">
            <fieldset className="forms__fieldset">
              {!isUserRegisteredDetails && !successUploadCoupon && (
                <RegisterDetail />
              )}

              {isUserRegisteredDetails && !successUploadCoupon && (
                <AttachCoupon />
              )}
              {successUploadCoupon && statusEnabled && <UploadEnabled />}
              {attachedCoupon && statusWaiting && <UploadWaiting />}
            </fieldset>
          </div>
        </FormsSection>
      </div>
    </main>
  )
}

export default UploadCouponForm
