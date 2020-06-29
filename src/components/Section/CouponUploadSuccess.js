import React from 'react'

function FormsSection({ title, subtitle, LinkComponent, children, cssExtra }) {
  return (
    <section className="section section--forms">
      <div className="section__inner">
        <h1 className={`section__title ${cssExtraTitle ? cssExtraTitle : ''}`}>
          {title}
        </h1>
        <div className={`section__content ${cssExtra ? cssExtra : ''}`}>
          {children}
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

export default FormsSection
