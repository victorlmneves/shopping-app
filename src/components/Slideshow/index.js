import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Slideshow.scss'

const Slideshow = () => {
  const { userDetail } = useSelector((state) => state.appReducer)
  const { shoppingId } = userDetail

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrow: false,
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      <div>
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet={require('../../assets/images/home-slider-01-mobile.png')}
          />
          {shoppingId && (
            <img
              srcSet={require(`../../assets/images/slideshow01-${shoppingId}.png`)}
              alt="…"
            />
          )}
        </picture>
      </div>
      <div>
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet={require('../../assets/images/home-slider-02-game-moblie.png')}
          />
          <img
            srcSet={require('../../assets/images/home-slider-02-game.png')}
            alt="…"
          />
        </picture>
      </div>
      <div>
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet={require('../../assets/images/home-slider-03-rankings-mobile.png')}
          />
          <img
            srcSet={require('../../assets/images/home-slider-03-rankings.png')}
            alt="…"
          />
        </picture>
      </div>
    </Slider>
  )
}

export default Slideshow
