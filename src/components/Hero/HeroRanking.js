import React from 'react'
import parseMs from 'parse-ms'
import useCountdown from 'react-use-countdown'

import './Hero.scss'

function HeroForm(props) {
  const {
    shopping,
    title,
    actualRanking,
    subtitle,
    yourRanking,
    timeLeft,
  } = props

  //timeLeft in milliseconds
  const countdown = timeLeft ? useCountdown(() => Date.now() + timeLeft) : 0
  const time = parseMs(countdown)

  const getTimeFormatted = (time) => (time < 10 ? `0${time}` : time)

  const heroBanner = (
    <div className="hero-ranking">
      <h3 className="hero-ranking__shopping">{shopping}</h3>
      <h1 className="hero-ranking__title">{title}</h1>
      <p className="hero-ranking__text">{actualRanking}</p>
      {timeLeft && (
        <div className="hero-ranking__box">
          <div className="hero-ranking__timer hero-ranking__timer--days">
            {getTimeFormatted(time.days)}
            <span>Dias</span>
          </div>
          <div className="hero-ranking__timer">:</div>
          <div className="hero-ranking__timer">
            {getTimeFormatted(time.hours)}
            <span>Hours</span>
          </div>
          <div className="hero-ranking__timer">:</div>
          <div className="hero-ranking__timer">
            {getTimeFormatted(time.minutes)}
            <span>Mins</span>
          </div>
          <div className="hero-ranking__timer">:</div>
          <div className="hero-ranking__timer hero-ranking__timer--seconds">
            {getTimeFormatted(time.seconds)}
            <span>Secs</span>
          </div>
        </div>
      )}

      {yourRanking.position && (
        <>
          <p className="hero-ranking__text">{subtitle}</p>
          <div className="hero-ranking__box">
            <p className="hero-ranking__position">
              {`${yourRanking.position}º com ${yourRanking.points} Points`}
            </p>
          </div>
        </>
      )}
    </div>
  )

  return <>{heroBanner}</>
}

export default HeroForm
