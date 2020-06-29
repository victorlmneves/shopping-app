import React from 'react'

function ModalButton({ fileName, LinkComponent }) {
  const modalButton = <div>{LinkComponent && <LinkComponent />}</div>

  return <>{modalButton}</>
}

export default ModalButton
