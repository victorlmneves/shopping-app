import React from 'react'

import './ModalGame.scss'
import http from '../../utils/config/http'
import { useDispatch, useSelector } from 'react-redux'

import { API_URL } from '../../utils/constants'
import { setUserCredits, getUserCredits } from '../../containers/App/actions'

function Modal({ title, text, LinkComponent }) {
  let iframeRef
  const dispatch = useDispatch()
  const post = (msg) => iframeRef.contentWindow.postMessage(JSON.stringify(msg))
  const onIframeLoad = () => post({ foo: 'bar' })
  const getRef = (el) => (iframeRef = el)

  let { userCredits } = useSelector((state) => state.appReducer)

  function closeModal() {
    document.body.classList.remove('no-scroll')
    document.querySelector('.js-game').classList.remove('open')
    document.querySelector('.js-iframe-game').remove()

    const node = document.querySelector('.iframe-container')
    const newIFrame = document.createElement('iframe')
    newIFrame.classList.add('js-iframe-game')
    newIFrame.setAttribute('src', '#')
    node.append(newIFrame)

    dispatch(getUserCredits())
  }

  const modalContent = (
    <div className="js-game modal-game">
      <div
        onClick={() => {
          closeModal()
        }}
        className="modal__close"
      >
        X
      </div>
      <div className="modal__content">
        <div className="iframe-container">
          <iframe
            title="iframe"
            className="js-iframe-game"
            ref={getRef}
            src="#"
            onLoad={onIframeLoad}
          />
        </div>
      </div>
    </div>
  )

  return <>{modalContent}</>
}

export default Modal
