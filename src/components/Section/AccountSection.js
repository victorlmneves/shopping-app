import React from 'react'

function AccountSection({
  anchor,
  title,
  LinkComponent,
  children,
  cssExtra,
  cssExtraTitle,
}) {
  return (
    <section id={`${anchor ? anchor : ''}`} className="section">
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

export default AccountSection
