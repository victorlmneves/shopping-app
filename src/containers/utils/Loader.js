import React from 'react'

import './Loader.scss'

const Loader = ({ spinning = true, fullScreen, transparent }) => (
  <div className={`loader-container ${spinning ? 'show' : 'hidden'}`}>
    <div className="loader-5 loader-center">
      <span></span>
    </div>
  </div>
)

export default Loader
