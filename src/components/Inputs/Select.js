import React from 'react'

const Select = (props) => {
  const {
    cssDivExtra,
    cssExtra,
    list,
    label,
    value,
    onChange = onChange ? onChange : () => {},
    errorMessage,
  } = props

  return (
    <>
      {label && <label className="forms__label">{label}</label>}
      <div className={`dropmenu ${cssDivExtra ? cssDivExtra : ''}`}>
        <select
          className={`dropmenu__select  ${cssExtra ? cssExtra : ''}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option>Select...</option>
          {list.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      {errorMessage && <p className="forms__error">{errorMessage}</p>}
    </>
  )
}

export default Select
