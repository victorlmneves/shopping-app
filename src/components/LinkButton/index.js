import React from 'react'
import { Link } from 'react-router-dom'

import './LinkButton.scss'

function LinkButton({ linkData, cssExtra }) {
  return (
    <Link
      className={`link link--button ${cssExtra ? cssExtra : ''}`}
      to={linkData.link}
    >
      {linkData.label}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21.001"
        height="14.824"
        viewBox="0 0 21.001 14.824"
        className="link__arrow"
      >
        <path
          d="M7.539,16.462,1.362,10.285a1.234,1.234,0,0,1,0-1.747L7.539,2.362A1.235,1.235,0,0,1,9.285,4.109L5.217,8.177H20.765a1.235,1.235,0,0,1,0,2.471H5.217l4.068,4.068a1.235,1.235,0,0,1-1.747,1.747Z"
          transform="translate(22 16.824) rotate(180)"
        />
      </svg>
    </Link>
  )
}

export default LinkButton
