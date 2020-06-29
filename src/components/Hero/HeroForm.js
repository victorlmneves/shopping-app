import React from 'react'

import './Hero.scss'

function HeroForm({ title, text, cssExtra, LinkComponent }) {
  const heroBanner = (
    <div className={`hero ${cssExtra ? cssExtra : ''}`}>
      <h1 className="hero__title">{title}</h1>
      <p className="hero__text">{text}</p>
      {LinkComponent && <LinkComponent />}
    </div>
  )

  return <>{heroBanner}</>
}

export default HeroForm
