import React from 'react'

import Faqs from '../Faqs'

function FaqsSection({ title, textBottom, cssExtra, cssExtraTitle }) {
  const faqsContent = [
    {
      id: 1,
      title: '1. Question',
      text: `<p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>`,
    },
    {
      id: 2,
      title: '2. Question',
      text: `<p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>`,
    },
    {
      id: 3,
      title: '3. Question',
      text: `<p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>`,
    },
    {
      id: 4,
      title: '4. Question',
      text: `<p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>`,
    },
    {
      id: 5,
      title: '5. Question',
      text: `<p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>`,
    },
  ]

  return (
    <section className="section section--info">
      <div className="section__inner">
        <div className="section__content">
          <article className="info">
            <div className="info__inner">
              <div className="info__content">
                <h1 className="info__title">{title}</h1>
                <Faqs content={faqsContent} />
                {textBottom && <p className="info__bottom">{textBottom}</p>}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default FaqsSection
