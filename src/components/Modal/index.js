import React from 'react'

import './Modal.scss'

function Modal({ title, content, LinkComponent }) {
  function closeModal() {
    document.body.classList.remove('no-scroll')
    document.querySelector('.js-game').classList.remove('open')
  }

  const modalContent = (
    <div className="modal">
      <div className="js-close-modal modal__close">X</div>
      <h3 className="modal__title">{title}</h3>
      <div className="modal__content">{content}</div>
      <div className="modal__actions">
        <button className="button button--modal"></button>
        <button className="button button--modal"></button>
      </div>
    </div>
  )

  return <>{modalContent}</>
}

export default Modal
