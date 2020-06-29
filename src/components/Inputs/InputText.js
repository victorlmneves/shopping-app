import React from 'react'

function InputText({
  cssExtra,
  label,
  type,
  value,
  id,
  placeholder,
  minValue,
  maxChars,
  errorMessage,
  onChange,
}) {
  onChange = onChange ? onChange : () => {}

  const minValueProps = minValue ? { min: minValue } : {}
  const maxCharsProps = maxChars ? { maxLength: maxChars } : {}

  return (
    <>
      {label && (
        <label htmlFor={id} className="forms__label">
          {label}
        </label>
      )}
      <input
        className={`forms__input ${cssExtra ? cssExtra : ''}`}
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          const value = maxChars
            ? e.target.value.substring(0, maxChars)
            : e.target.value
          onChange(value)
        }}
        {...minValueProps}
        {...maxCharsProps}
      />
      {errorMessage && <p className="forms__error">{errorMessage}</p>}
    </>
  )
}

export default InputText
