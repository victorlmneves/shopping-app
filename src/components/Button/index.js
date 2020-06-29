import React from 'react'

import './Button.scss'

function Button({
  anchor,
  label,
  cssExtra,
  hasArrow,
  hasPrevArrow,
  hasEye,
  onClick,
  disabled,
}) {
  onClick = onClick ? onClick : () => {}

  return (
    <button
      id={anchor}
      type="button"
      className={`button ${cssExtra ? cssExtra : ''}`}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {hasPrevArrow && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="button__arrow"
        >
          <path
            d="M8,0,6.545,1.455l5.506,5.506H0V9.039H12.052L6.545,14.545,8,16l8-8Z"
            transform="translate(16 16) rotate(180)"
          />
        </svg>
      )}
      {label}
      {hasArrow && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21.001"
          height="14.824"
          viewBox="0 0 21.001 14.824"
          className="button__arrow"
        >
          <path
            d="M7.539,16.462,1.362,10.285a1.234,1.234,0,0,1,0-1.747L7.539,2.362A1.235,1.235,0,0,1,9.285,4.109L5.217,8.177H20.765a1.235,1.235,0,0,1,0,2.471H5.217l4.068,4.068a1.235,1.235,0,0,1-1.747,1.747Z"
            transform="translate(22 16.824) rotate(180)"
          />
        </svg>
      )}
      {hasEye && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21.001"
          height="14.824"
          viewBox="0 0 21.001 14.824"
          className="button__arrow"
        >
          <path
            className="a"
            d="M9.05,3A10.137,10.137,0,0,0,0,8.656a10.068,10.068,0,0,0,18.1,0A10.137,10.137,0,0,0,9.05,3Zm4.463,3a8.615,8.615,0,0,1,2.641,2.656,8.591,8.591,0,0,1-2.641,2.656,8.291,8.291,0,0,1-8.924,0A8.615,8.615,0,0,1,1.947,8.656,8.591,8.591,0,0,1,4.588,6c.069-.044.139-.087.209-.129a4.525,4.525,0,1,0,8.5,0c.07.042.14.085.209.129h0Z"
            transform="translate(0 -3)"
          />
        </svg>
      )}
    </button>
  )
}

export default Button
