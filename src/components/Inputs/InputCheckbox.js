import React from 'react'

function InputCheckbox({
  cssExtra,
  text,
  value,
  onChange,
  errorMessage,
  disabled,
}) {
  return (
    <>
      <label className={`forms__check ${cssExtra}`}>
        <input
          disabled={disabled}
          className={`forms__checkbox ${cssExtra}`}
          type="checkbox"
          checked={value}
          onChange={(e) => {
            const { checked } = e.target
            onChange(checked)
          }}
        />
        <span className="forms__checkbox-text">{text}</span>
      </label>
      {errorMessage && <p className="forms__error">{errorMessage}</p>}
    </>
  )
}

export default InputCheckbox
