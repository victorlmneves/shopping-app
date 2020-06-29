import React from 'react'

import '../Modal/Modal.scss'

function ModalImgButton() {
  function closeModal() {
    document.body.classList.remove('no-scroll')
    document.querySelector('js-img-button').classList.remove('open')
  }

  const modalContent = (
    <div id="imgButton" className="modal modal--public">
      <div
        onClick={() => {
          closeModal()
        }}
        className="js-close-modal modal__close"
      >
        X
      </div>
      <img class="js-my-img" alt="my Invoice" />
    </div>
  )

  return <>{modalContent}</>
}

export default ModalImgButton
