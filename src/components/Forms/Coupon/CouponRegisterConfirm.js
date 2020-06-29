import React from 'react'

import Button from '../../Button'

import '../Forms.scss'

const message = `If any irregularity, fraud or any incorrect data is detected, you may lose the prize that results from this participation.`

const seeCouponButton = {
  label: 'See Receipt',
  link: '/',
}

const nextButton = {
  label: 'Next',
  link: '/',
}

const prevButton = {
  label: 'Previous',
  link: '/',
}

const CouponRegisterConfirm = () => {
  return (
    <>
      <h1 className="forms__title">My Purchase Details</h1>
      <div className="forms__box">
        <p className="forms__text forms__text--label">Purchase Total</p>
        <p className="forms__text">20.99€</p>
        <p className="forms__text forms__text--label">Store</p>
        <p className="forms__text">Zara</p>
        <p className="forms__text forms__text--label">Shopping</p>
        <p className="forms__text">Shopping #3</p>
      </div>
      <h1 className="forms__title forms__title--no-margin">My Receipt</h1>
      <div className="forms__wrap-button">
        <Button
          label={seeCouponButton.label}
          hasEye
          action=""
          cssExtra="button--see-coupon"
        />
      </div>
      <p className="forms__text forms__text--center forms__text--warning-coupon">
        {message}
      </p>
      <div className="forms__wrap-button">
        <Button
          label={prevButton.label}
          hasPrevArrow
          action=""
          cssExtra="button--prev"
        />
        <Button label={nextButton.label} hasArrow action="" />
      </div>
    </>
  )
}

export default CouponRegisterConfirm
