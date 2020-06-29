import React from 'react'

function FormsSection({ title, subtitle, LinkComponent, children, cssExtra }) {
  return (
    <section className="section section--forms">
      <div className="section__inner">
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
