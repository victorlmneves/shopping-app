import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserDetail } from '../../../containers/App/actions'

import LinkButton from '../../LinkButton'

import oauth from '../../../utils/oauth'

import { cleanUploadCoupon } from '../../../pages/UploadCoupon/actions'

const nextButton = {
  label: 'Start Game',
  link: '/play',
}

const message = `The credits corresponding to the amount declared on the invoice are already available in the game. Shall we put them to the test?`

const UploadSuccess = () => {
  const dispatch = useDispatch()

  function clean() {
    dispatch(cleanUploadCoupon())
  }

  useEffect(() => {
    if (oauth.getToken()) {
      dispatch(getUserDetail())
    }
  }, [])

  const { attachedCoupon } = useSelector((state) => state.uploadCoupon)

  return (
    <>
      <div className="forms__image">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="117.032"
          height="81.479"
          viewBox="0 0 117.032 81.479"
          className="forms__svg"
        >
          <g transform="translate(-57.578 -454.768)">
            <circle
              cx="23.149"
              cy="23.149"
              r="23.149"
              transform="translate(128.312 455.124)"
            />
            <path
              d="M111.695,501.217l-26.71-46.262a.374.374,0,0,0-.648,0L57.629,501.217a.374.374,0,0,0,.324.561h53.419A.374.374,0,0,0,111.695,501.217Z"
              transform="translate(0)"
            />
            <path
              d="M147.639,598.2a57.466,57.466,0,0,0,33.243-10.557.373.373,0,0,0,.107-.492l-7.8-13.513a.374.374,0,0,0-.533-.123,45.066,45.066,0,0,1-50.03,0,.374.374,0,0,0-.533.123l-7.8,13.512a.375.375,0,0,0,.107.492A57.47,57.47,0,0,0,147.639,598.2Z"
              transform="translate(-29.579 -61.957)"
            />
          </g>
        </svg>
      </div>
      <h1 className="forms__subtitle">
        {`Congratulations, you had accumulated ${attachedCoupon.value} credits.`}
      </h1>
      <p className="forms__text forms__text--center">{message}</p>
      <div className="forms__wrap-button" onClick={() => clean()}>
        <LinkButton cssExtra="link--inverted" hasArrow linkData={nextButton} />
      </div>
    </>
  )
}

export default UploadSuccess
