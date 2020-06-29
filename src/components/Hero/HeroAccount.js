import React from 'react'
import { useSelector } from 'react-redux'

import LinkButton from '../../components/LinkButton'

import './Hero.scss'

function HeroAccount({ title, text, secondText, cssExtra }) {
  let { userCredits } = useSelector((state) => state.appReducer)

  const linkInfo = {
    label: 'Start Game',
    link: '/play',
  }

  const heroBanner = (
    <div className={`hero ${cssExtra ? cssExtra : ''}`}>
      <div className="hero__credits">
        <p className="hero__credits-number">
          {userCredits.credits}
          <span>Total Credits</span>
        </p>
      </div>
      <div className="hero__content">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__text">{text}</p>
        <p className="hero__text">{secondText}</p>
        <LinkButton linkData={linkInfo} />
      </div>
    </div>
  )

  return <>{heroBanner}</>
}

export default HeroAccount
