import React from 'react'

function InputButton({ cssExtra, name, value }) {
  return (
    <input
      className={`forms__button ${cssExtra ? cssExtra : ''}`}
      type="button"
      name={name}
      value={value}
    />
  )
}

export default InputButton
