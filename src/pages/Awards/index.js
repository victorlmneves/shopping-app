import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HeroApp from '../../components/Hero/HeroApp'
import Cards from '../../components/Cards'
import LinkButton from '../../components/LinkButton'
import CardsSection from '../../components/Section/CardsSection'

import { getCurrentRanking } from '../Ranking/actions'

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

const menuCards = [
  {
    id: 1,
    title: 'First I want to see my ranking.',
    link: '/ranking#me',
  },
  {
    id: 2,
    title: 'Now is the time, I want to play!',
    link: '/play',
  },
]

const linkInfo = {
  label: 'Start Game',
  link: '/play',
}

function getDateFormatted(date) {
  return new Date(date).toLocaleDateString()
}

const Awards = () => {
  const dispatch = useDispatch()
  const { userDetail } = useSelector((state) => state.appReducer)
  const { shoppingId } = userDetail
  const { currentRanking } = useSelector((state) => state.ranking)
  const startAt = currentRanking.startAt
  const endAt = currentRanking.endAt
  const awardsFromShopping = shoppingId
    ? awardsCards.find((element) => element.id == shoppingId).awards
    : null

  useEffect(() => {
    dispatch(getCurrentRanking())
  }, [])

  return (
    <>
      <HeroApp
        title="Prizes"
        text="You can win any of these prizes, just play!"
        LinkComponent={() => <LinkButton linkData={linkInfo} />}
      />
      <main className="main">
        {awardsFromShopping ? (
          <CardsSection
            cssExtraTitle="section__title--no-margin-bottom"
            cssExtra="section__content--columns"
            title="Prizes of this week"
            subtitle={`Dear Santa, this is the list of gifts we have to give and unwrap during the day ${getDateFormatted(
              startAt
            )} to 
          ${getDateFormatted(endAt)}`}
            CardsComponent={() => (
              <Cards cards={awardsFromShopping} cssExtraCards="cards--full" />
            )}
          ></CardsSection>
        ) : (
          ''
        )}
        <CardsSection
          cssExtraTitle="section__title--no-margin-top"
          cssExtra="section__content--columns no-wrap"
          title="Ready to Start?"
          CardsComponent={() => (
            <Cards cards={menuCards} cssExtraCards="cards--menu" hasArrow />
          )}
        ></CardsSection>
      </main>
    </>
  )
}

export default Awards
