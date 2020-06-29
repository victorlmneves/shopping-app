import React, { useState } from 'react'

import './Faqs.scss'

function Faqs({ content }) {
  const [activeItems, setActiveItems] = useState([])

  const handleItemClick = (id) => () => {
    let copyItemsList = [...activeItems]

    if (copyItemsList.find((_el) => _el === id)) {
      copyItemsList = copyItemsList.filter((_el) => _el !== id)
    } else {
      copyItemsList = [...copyItemsList, id]
    }

    setActiveItems(copyItemsList)
  }

  const collapseFaqs = (id) => {
    return activeItems.find((_el) => _el === id)
      ? 'faqs__header active'
      : 'faqs__header'
  }

  const faqsList = content.map((item) => (
    <div key={item.id} className="faqs">
      <div onClick={handleItemClick(item.id)} className={collapseFaqs(item.id)}>
        {item.title}
      </div>
      <div className="faqs__content">
        {/* <p className='faqs__text'>
            {item.text.split('\n').map((i, key) => {
                return <span key={key}>{i}<br/></span>
            })}
        </p> */}
        <div
          dangerouslySetInnerHTML={{ __html: item.text }}
          className="faqs__text"
        ></div>
      </div>
    </div>
  ))

  return (
    <>
      {faqsList}
      <div className="faqs__bottom-text">
        <p className="forms__text text-magenta text-center text-100">
          From the validation of receipts to the rules of the game, no doubt
          remains unanswered. To go beyond the frequently asked questions, send
          an email to{' '}
          <a className="forms__text-link" href="mailto:email@shopping.com">
            email@shopping.com
          </a>
          . We are on this side.
        </p>
      </div>
    </>
  )
}

export default Faqs
