import React, { useEffect } from 'react'
import Cookies from 'js-cookie'

import './Disclaimer.scss'

function Disclaimer() {
  function closeDisclaimer() {
    document.body.classList.remove('no-scroll')
    document.getElementById('disclaimer').classList.remove('is-visible')
  }

  function handleButtonClick() {
    Cookies.set('acceptedCookie', 1)
    closeDisclaimer()
  }

  function readCookie() {
    const hasAccepted = Cookies.get('acceptedCookie')

    if (!hasAccepted) {
      document.body.classList.add('no-scroll')
      document.getElementById('disclaimer').classList.add('is-visible')
    }
  }

  useEffect(() => {
    readCookie()
  }, [])

  return (
    <div id="disclaimer" className="disclaimer">
      <div className="disclaimer__inner">
        <p className="disclaimer__description disclaimer__description--white">
          This page uses cookies that make it easier to navigate and create an
          optimized experience for our reality, as it improves your ability to
          provide us with information about the use of our products and services
          and helps the development and promotion of company initiatives.
        </p>
        <button
          type="button"
          className="button"
          onClick={() => handleButtonClick()}
        >
          I Agree
        </button>
      </div>
    </div>
  )
}

export default Disclaimer
