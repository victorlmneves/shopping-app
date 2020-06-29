import React from 'react'

import Rules from '../../components/Rules'

import './Modal.scss'

function ModalRules() {
  function closeModal() {
    document.body.classList.remove('no-scroll')
    document.getElementById('ModalRules').classList.remove('open')
  }

  const modalContent = (
    <div id="ModalRules" className="modal modal--public">
      <div
        onClick={() => {
          closeModal()
        }}
        className="js-close-modal modal__close"
      >
        X
      </div>
      <div className="modal__content">
        <Rules />
      </div>
      <div className="modal__actions">
        <button className="button button--modal"></button>
        <button className="button button--modal"></button>
      </div>
    </div>
  )

  return <>{modalContent}</>
}

export default ModalRules
