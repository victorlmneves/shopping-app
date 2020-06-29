import React from 'react'

import Pagination from '../../components/Pagination'

function RankingSection({
  anchor,
  title,
  subtitle,
  cssExtra,
  cssExtraTitle,
  hasPagination,
  currentPage,
  totalPages,
  previousPage,
  nextPage,
}) {
  return (
    <section id={`${anchor ? anchor : ''}`} className="section">
      <div className="section__inner">
        <h1 className={`section__title ${cssExtraTitle ? cssExtraTitle : ''}`}>
          {title}
        </h1>
        {subtitle && (
          <h3 className="section__subtitle section__subtitle--ranking">
            {subtitle}
          </h3>
        )}
        {hasPagination && (
          <div className={`section__content ${cssExtra ? cssExtra : ''}`}>
            <Pagination
              pages={`${currentPage} / ${totalPages}`}
              previousPage={previousPage}
              nextPage={nextPage}
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default RankingSection
