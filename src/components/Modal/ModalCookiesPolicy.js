import React from 'react'

import CookiesPolicy from '../../components/CookiesPolicy'

import './Modal.scss'

function ModalCookies() {
  function closeModal() {
    document.body.classList.remove('no-scroll')
    document.getElementById('ModalCookies').classList.remove('open')
  }

  const modalContent = (
    <div id="ModalCookies" className="modal modal--public">
      <div
        onClick={() => {
          closeModal()
        }}
        className="js-close-modal modal__close"
      >
        X
      </div>
      <div className="modal__content">
        <CookiesPolicy />
      </div>
      <div className="modal__actions">
        <button className="button button--modal"></button>
        <button className="button button--modal"></button>
      </div>
    </div>
  )

  return <>{modalContent}</>
}

export default ModalCookies
