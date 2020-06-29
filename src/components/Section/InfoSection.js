import React from 'react'

function InfoSection({ title, text }) {
  return (
    <section className="section section--info">
      <div className="section__inner">
        <div className="section__content">
          <article className="info">
            <div className="info__inner">
              <div className="info__content">
                <h1 className="info__title">{title}</h1>
                {/* <p className='info__text'>
                      {text.split('\n').map((i, key) => {
                          return <span key={key}>{i}<br/></span>
                      })}
                  </p> */}
                <div
                  dangerouslySetInnerHTML={{ __html: text }}
                  className="info__text"
                ></div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default InfoSection
