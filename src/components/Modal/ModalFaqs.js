import React from 'react'

import Faqs from '../../components/Faqs'

import './Modal.scss'

function ModalFaqs() {
  function closeModal() {
    document.body.classList.remove('no-scroll')
    document.getElementById('ModalFaqs').classList.remove('open')
  }

  const faqsContent = [
    {
      id: 1,
      title: '1. Question',
      text: `<p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>`,
    },
    {
      id: 2,
      title: '2. Question',
      text: `<p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>`,
    },
    {
      id: 3,
      title: '3. Question',
      text: `<p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>`,
    },
    {
      id: 4,
      title: '4. Question',
      text: `<p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>`,
    },
    {
      id: 5,
      title: '5. Question',
      text: `<p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>`,
    }
  ]

  const modalContent = (
    <div id="ModalFaqs" className="modal modal--public">
      <div
        onClick={() => {
          closeModal()
        }}
        className="js-close-modal modal__close"
      >
        X
      </div>
      <h3 className="modal__title">Faqs</h3>
      <div className="modal__content">
        <Faqs content={faqsContent} />
      </div>
      <div className="modal__actions">
        <button className="button button--modal"></button>
        <button className="button button--modal"></button>
      </div>
    </div>
  )

  return <>{modalContent}</>
}

export default ModalFaqs
