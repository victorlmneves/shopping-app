import React from 'react'

import './Hero.scss'

function HeroApp({ title, text, LinkComponent }) {
  const heroBanner = (
    <div className="hero">
      <h1 className="hero__title">{title}</h1>
      <p className="hero__text">{text}</p>
      {LinkComponent && <LinkComponent />}
    </div>
  )

  return <>{heroBanner}</>
}

export default HeroApp
