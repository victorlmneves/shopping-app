import React from 'react'

import './Pagination.scss'

function Pagination({ isDisabled, pages, previousPage, nextPage }) {
  return (
    <div className="pagination">
      <i
        className={`pagination__prev ${isDisabled ? 'is-disabled' : ''}`}
        onClick={() => previousPage()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="pagination__arrow"
        >
          <path
            d="M8,0,6.545,1.455l5.506,5.506H0V9.039H12.052L6.545,14.545,8,16l8-8Z"
            transform="translate(16 16) rotate(180)"
          />
        </svg>
      </i>
      <p className="pagination__pages">{pages}</p>
      <i
        className={`pagination__next ${isDisabled ? 'is-disabled' : ''}`}
        onClick={() => nextPage()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="pagination__arrow"
        >
          <path
            d="M8,0,6.545,1.455l5.506,5.506H0V9.039H12.052L6.545,14.545,8,16l8-8Z"
            transform="translate(16 16) rotate(180)"
          />
        </svg>
      </i>
    </div>
  )
}

export default Pagination
