import React from 'react'

import HeroApp from '../../components/Hero/HeroApp'
import Cards from '../../components/Cards'
import Button from '../../components/Button'
import CardsSection from '../../components/Section/CardsSection'
import ModalGame from '../../components/ModalGame'

const gameInstructionsCards = [
  {
    id: 1,
    title: 'TITLE 1',
    text:
      'Lacus sed viverra tellus in hac habitasse platea. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Sed sed risus pretium quam.',
    img: 'Icon-1-game.png',
    imgMobile: 'Icon-1-game-mobile.png',
  },
  {
    id: 2,
    title: 'TITLE 2',
    text:
      'Lacus sed viverra tellus in hac habitasse platea. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Sed sed risus pretium quam.',
    img: 'Icon-2-game.png',
    imgMobile: 'Icon-2-game-mobile.png',
  },
  {
    id: 3,
    title: 'TITLE 3',
    text:
      'Lacus sed viverra tellus in hac habitasse platea. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Sed sed risus pretium quam.',
    img: 'Icon-3-game.png',
    imgMobile: 'Icon-3-game-mobile.png',
  },
]

const readyToPlayCards = [
  {
    id: 1,
    title: 'Title #1',
    text:
      'Lacus sed viverra tellus in hac habitasse platea. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Sed sed risus pretium quam.',
    img: 'start-playing.png',
    imgMobile: 'start-playing-mobile.png',
    link: '/play#root',
    anchor: 'play',
  },
  {
    id: 2,
    title: 'Title #2',
    text:
      'Lacus sed viverra tellus in hac habitasse platea. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Sed sed risus pretium quam.',
    img: 'training.png',
    imgMobile: 'training-mobile.png',
    link: '/ranking',
    anchor: '',
  },
  {
    id: 3,
    title: 'Title #3',
    text:
      'Lacus sed viverra tellus in hac habitasse platea. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Sed sed risus pretium quam.',
    img: 'faqs.png',
    imgMobile: 'faqs-mobile.png',
    link: '/faqs',
    anchor: '',
  },
]

const buttonInfo = {
  label: 'Go!',
  link: '/play',
}

const linkInfo = {
  label: 'Play Now',
}

const Play = (props) => {
  function openModal() {
    document.body.classList.add('no-scroll')
    document.querySelector('.js-game').classList.add('open')

    /* const node = document.querySelector(".iframe-container");
    const newIFrame = document.createElement("iframe");
    newIFrame.classList.add("js-iframe-game");
    newIFrame.setAttribute("src", "https://alegroxmaschallenge.pt/static/game/");
    node.append(newIFrame); */
  }

  return (
    <>
      <main className="main">
        <HeroApp
          title="TITLE #1"
          text="Lacus sed viverra tellus in hac habitasse platea. Cursus turpis massa tincidunt dui ut ornare lectus sit amet"
          LinkComponent={() => (
            <Button
              onClick={() => {
                openModal()
              }}
              label={buttonInfo.label}
            />
          )}
        />
        <CardsSection
          anchor="instructions"
          title="TITLE #2"
          cssExtra="section__content--play"
          cssExtraTitle="section__title--no-margin-bottom"
          subtitle="Lacus sed viverra tellus in hac habitasse platea. Cursus turpis massa tincidunt dui ut ornare lectus sit amet"
          CardsComponent={() => <Cards cards={gameInstructionsCards} />}
          LinkComponent={() => (
            <Button
              onClick={() => {
                openModal()
              }}
              label={linkInfo.label}
              hasArrow
              anchor="game"
            />
          )}
        ></CardsSection>
        <CardsSection
          cssExtra="section__content--columns section__content--play"
          title="TITLE #3"
          cssExtraTitle="section__title--no-margin-bottom"
          subtitle="Lacus sed viverra tellus in hac habitasse platea. Cursus turpis massa tincidunt dui ut ornare lectus sit amet"
          CardsComponent={() => (
            <Cards
              cards={readyToPlayCards}
              cssExtraCards="cards--games cards--games-smaller"
              hasArrow
            />
          )}
        ></CardsSection>
      </main>
      <ModalGame />
    </>
  )
}

export default Play
