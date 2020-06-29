import React from 'react'
import { Link } from 'react-router-dom'

import './Cards.scss'

function Cards({ cards, cssExtraCards, hasArrow }) {
  const cardsList = cards.map((item) => (
    <article
      id={item.anchor}
      className={`cards ${cssExtraCards ? cssExtraCards : ''}`}
      key={item.id}
    >
      {item.img && (
        <picture className="cards__img">
          <source
            media="(max-width: 767px)"
            srcSet={require(`../../assets/images/${item.imgMobile}`)}
          />
          <img
            srcSet={require(`../../assets/images/${item.img}`)}
            alt={item.title}
          />
        </picture>
      )}
      {item.link && (
        <Link to={item.link}>
          <div className="cards__info">
            {item.position && (
              <h2 className="cards__position">{item.position}</h2>
            )}
            <h3 className="cards__title">{item.title}</h3>
            <p className="cards__text">{item.text}</p>
            {hasArrow && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.001"
                height="14.824"
                viewBox="0 0 21.001 14.824"
                className="cards__arrow"
              >
                <path
                  d="M7.539,16.462,1.362,10.285a1.234,1.234,0,0,1,0-1.747L7.539,2.362A1.235,1.235,0,0,1,9.285,4.109L5.217,8.177H20.765a1.235,1.235,0,0,1,0,2.471H5.217l4.068,4.068a1.235,1.235,0,0,1-1.747,1.747Z"
                  transform="translate(22 16.824) rotate(180)"
                />
              </svg>
            )}
          </div>
        </Link>
      )}
      {!item.link && (
        <div className="cards__info">
          {item.position && (
            <h2 className="cards__position">{item.position}</h2>
          )}
          <h3 className="cards__title">{item.title}</h3>
          <p className="cards__text">{item.text}</p>
          {hasArrow && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.001"
              height="14.824"
              viewBox="0 0 21.001 14.824"
              className="cards__arrow"
            >
              <path
                d="M7.539,16.462,1.362,10.285a1.234,1.234,0,0,1,0-1.747L7.539,2.362A1.235,1.235,0,0,1,9.285,4.109L5.217,8.177H20.765a1.235,1.235,0,0,1,0,2.471H5.217l4.068,4.068a1.235,1.235,0,0,1-1.747,1.747Z"
                transform="translate(22 16.824) rotate(180)"
              />
            </svg>
          )}
        </div>
      )}
    </article>
  ))

  return <>{cardsList}</>
}

export default Cards
