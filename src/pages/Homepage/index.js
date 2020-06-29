import React from 'react'
import { useSelector } from 'react-redux'

import Slideshow from '../../components/Slideshow'
import Cards from '../../components/Cards'
import LinkButton from '../../components/LinkButton'
import CardsSection from '../../components/Section/CardsSection'

const howToParticipateCards = [
  {
    id: 1,
    title: '1. SHOP 10€',
    text:
      'The first step is to make at least € 10 in purchases at stores at the Shopping.',
    img: 'Icon-1-home.png',
    imgMobile: 'Icon-1-home-mobile.png',
    anchor: '',
  },
  {
    id: 2,
    title: '2. UPLOAD INVOICES',
    text:
      'Then, enter the website and submit the receipts to get game credits. € 10 = 10 Credits',
    img: 'Icon-2-home.png',
    imgMobile: 'Icon-2-home-mobile.png',
    anchor: '',
  },
  {
    id: 3,
    title: '3. PLAY AND WIN',
    text: "With prizes every week, it's playing (and training) that's the win!",
    img: 'Icon-3-home.png',
    imgMobile: 'Icon-3-home-mobile.png',
    anchor: '',
  },
]

const funGameCards = [
  {
    id: 1,
    title: 'START PLAYING',
    text: "Let's help Santa Claus to stack as many gifts?",
    img: 'start-playing.png',
    imgMobile: 'start-playing-mobile.png',
    link: '/play',
    anchor: 'play',
  },
  {
    id: 2,
    title: 'TRAINING',
    text: 'How about practicing some moves before using the credits? ',
    img: 'training.png',
    imgMobile: 'training-mobile.png',
    link: '/play',
    anchor: 'play',
  },
  {
    id: 3,
    title: "FAQ's",
    text: 'Questions about the Challenge? All the answers come through here.',
    img: 'faqs.png',
    imgMobile: 'faqs-mobile.png',
    link: '/faqs',
    anchor: 'faqs',
  },
]

const awardsCards = [
  {
    id: 1,
    awards: [
      {
        id: 1,
        title: 'iPhone 11',
        text: '1º Place',
        img: '1o-prize.png',
        imgMobile: '1o-prize-mobile.png',
        link: '/prizes#1o-prize',
        anchor: '1o-prize',
      },
      {
        id: 2,
        title: 'Card with 100€',
        text: '2º Place',
        img: '2o-prize.png',
        imgMobile: '2o-prize-mobile.png',
        link: '/prizes#2o-prize',
        anchor: '2o-prize',
      },
      {
        id: 3,
        title: 'Card with 50€',
        text: '3º Place',
        img: '3o-prize.png',
        imgMobile: '3o-prize-mobile.png',
        link: '/prizes#3o-prize',
        anchor: '3o-prize',
      },
      {
        id: 4,
        title: 'Card with 20€',
        text: 'Prize from 4º to 10º Places',
        img: '4o-prize.png',
        imgMobile: '4o-prize-mobile.png',
        link: '/prizes#4o-prize',
        anchor: '4o-prize',
      },
      {
        id: 5,
        title: 'Card with 10€',
        text: 'Prize from 11º to 60º Places',
        img: '5o-prize.png',
        imgMobile: '5o-prize-mobile.png',
        link: '/prizes#5o-prize',
        anchor: '5o-prize',
      },
    ],
  },
  {
    id: 2,
    awards: [
      {
        id: 1,
        title: 'iPhone 11',
        text: '1º Place',
        img: '1o-prize.png',
        imgMobile: '1o-prize-mobile.png',
        link: '/prizes#1o-prize',
        anchor: '1o-prize',
      },
      {
        id: 2,
        title: 'Cards with 100€',
        text: 'Prize from 2º ato5º Places',
        img: '2o-prize.png',
        imgMobile: '2o-prize-mobile.png',
        link: '/prizes#2o-prize',
        anchor: '2o-prize',
      },
      {
        id: 3,
        title: 'Cards with 50€',
        text: 'Prize from 6º to 10º Places',
        img: '3o-prize.png',
        imgMobile: '3o-prize-mobile.png',
        link: '/prizes#3o-prize',
        anchor: '3o-prize',
      },
      {
        id: 4,
        title: 'Card with 20€',
        text: 'Prize from 11º to 50º Places',
        img: '4o-prize.png',
        imgMobile: '4o-prize-mobile.png',
        link: '/prizes#4o-prize',
        anchor: '4o-prize',
      },
      {
        id: 5,
        title: 'Card with 10€',
        text: 'Prize from 51º to 130º Places',
        img: '5o-prize.png',
        imgMobile: '5o-prize-mobile.png',
        link: '/prizes#5o-prize',
        anchor: '5o-prize',
      },
    ],
  },
  {
    id: 3,
    awards: [
      {
        id: 1,
        title: 'iPhone 11',
        text: '1º Place',
        img: '1o-prize.png',
        imgMobile: '1o-prize-mobile.png',
        link: '/prizes#1o-prize',
        anchor: '1o-prize',
      },
      {
        id: 2,
        title: 'Card with 100€',
        text: 'Prize from 2º to 3º Places',
        img: '2o-prize.png',
        imgMobile: '2o-prize-mobile.png',
        link: '/prizes#2o-prize',
        anchor: '2o-prize',
      },
      {
        id: 3,
        title: 'Card with 50€',
        text: 'Prize from 4º to 5º Places',
        img: '3o-prize.png',
        imgMobile: '3o-prize-mobile.png',
        link: '/prizes#3o-prize',
        anchor: '3o-prize',
      },
      {
        id: 4,
        title: 'Card with 20€',
        text: 'Prize from 6º to 15º Places',
        img: '4o-prize.png',
        imgMobile: '4o-prize-mobile.png',
        link: '/prizes#4o-prize',
        anchor: '4o-prize',
      },
      {
        id: 5,
        title: 'Card with 10€',
        text: 'Prize from 16º to 70º Places',
        img: '5o-prize.png',
        imgMobile: '5o-prize-mobile.png',
        link: '/prizes#5o-prize',
        anchor: '5o-prize',
      },
    ],
  },
  {
    id: 4,
    awards: [
      {
        id: 1,
        title: 'iPhone 11',
        text: '1º Place',
        img: '1o-prize.png',
        imgMobile: '1o-prize-mobile.png',
        link: '/prizes#1o-prize',
        anchor: '1o-prize',
      },
      {
        id: 2,
        title: 'Card with 100€',
        text: 'Prize from 2º to 5º Places',
        img: '2o-prize.png',
        imgMobile: '2o-prize-mobile.png',
        link: '/prizes#2o-prize',
        anchor: '2o-prize',
      },
      {
        id: 3,
        title: 'Card with 50€',
        text: 'Prize from 6º to 10º Places',
        img: '3o-prize.png',
        imgMobile: '3o-prize-mobile.png',
        link: '/prizes#3o-prize',
        anchor: '3o-prize',
      },
      {
        id: 4,
        title: 'Card with 20€',
        text: 'Prize from 11º to 50º Places',
        img: '4o-prize.png',
        imgMobile: '4o-prize-mobile.png',
        link: '/prizes#4o-prize',
        anchor: '4o-prize',
      },
      {
        id: 5,
        title: 'Card with 10€',
        text: 'Prize from 51º to 115º Places',
        img: '5o-prize.png',
        imgMobile: '5o-prize-mobile.png',
        link: '/prizes#5o-prize',
        anchor: '5o-prize',
      },
    ],
  },
  {
    id: 5,
    awards: [
      {
        id: 1,
        title: 'iPhone 11',
        text: '1º Place',
        img: '1o-prize.png',
        imgMobile: '1o-prize-mobile.png',
        link: '/prizes#1o-prize',
        anchor: '1o-prize',
      },
      {
        id: 2,
        title: 'Card 100€',
        text: 'Prize from 2º to 5º Places',
        img: '2o-prize.png',
        imgMobile: '2o-prize-mobile.png',
        link: '/prizes#2o-prize',
        anchor: '2o-prize',
      },
      {
        id: 3,
        title: 'Card 50€',
        text: 'Prize from 6º to 10º Places',
        img: '3o-prize.png',
        imgMobile: '3o-prize-mobile.png',
        link: '/prizes#3o-prize',
        anchor: '3o-prize',
      },
      {
        id: 4,
        title: 'Card 20€',
        text: 'Prize from 11º to 50º Places',
        img: '4o-prize.png',
        imgMobile: '4o-prize-mobile.png',
        link: '/prizes#4o-prize',
        anchor: '4o-prize',
      },
      {
        id: 5,
        title: 'Card 10€',
        text: 'Prize from 51º to 115º Places',
        img: '5o-prize.png',
        imgMobile: '5o-prize-mobile.png',
        link: '/prizes#5o-prize',
        anchor: '5o-prize',
      },
    ],
  },
]

const howToParticipateButton = {
  label: 'Play Now',
  link: '/play',
}

const awardsButton = {
  label: 'More Info',
  link: '/prizes',
}

const Homepage = () => {
  const { userDetail } = useSelector((state) => state.appReducer)
  const { shoppingId } = userDetail

  const awardsFromShopping = shoppingId
    ? awardsCards.find((element) => element.id == shoppingId).awards
    : null

  return (
    <main className="main">
      <Slideshow />
      <CardsSection
        title="
HOW TO PARTICIPATE"
        CardsComponent={() => <Cards cards={howToParticipateCards} />}
        LinkComponent={() => <LinkButton linkData={howToParticipateButton} />}
      ></CardsSection>
      <CardsSection
        cssExtra="section__content--columns"
        title="A SPECIAL MISSION FOR THE HELP OF SANTA'S"
        CardsComponent={() => (
          <Cards cards={funGameCards} cssExtraCards="cards--games" hasArrow />
        )}
      ></CardsSection>

      {awardsFromShopping ? (
        <CardsSection
          cssExtra="section__content--columns"
          title="HUNDREDS OF PRIZES IN THE SHOE"
          subtitle="The tree is already lit, the fireplace is already decorated. 🧦 There are only enough presents to unwrap every week."
          CardsComponent={() => (
            <Cards
              cards={awardsFromShopping}
              cssExtraCards="cards--awards"
              hasArrow
              hasOverlay
            />
          )}
          LinkComponent={() => <LinkButton linkData={awardsButton} />}
        ></CardsSection>
      ) : (
        ''
      )}
    </main>
  )
}

export default Homepage
