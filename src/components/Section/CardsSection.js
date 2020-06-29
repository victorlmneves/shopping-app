import React from 'react'

function CardsSection({
  title,
  subtitle,
  LinkComponent,
  CardsComponent,
  cssExtra,
  cssExtraTitle,
  anchor,
}) {
  return (
    <section id={`${anchor ? anchor : ''}`} className="section">
      <div className="section__inner">
        <h1 className={`section__title ${cssExtraTitle ? cssExtraTitle : ''}`}>
          {title}
        </h1>
        {subtitle && <h3 className="section__subtitle">{subtitle}</h3>}
        <div className={`section__content ${cssExtra ? cssExtra : ''}`}>
          <CardsComponent />
        </div>
      </div>
      {LinkComponent && (
        <div className="section__wrap-buttons">
          <LinkComponent />
        </div>
      )}
    </section>
  )
}

export default CardsSection
