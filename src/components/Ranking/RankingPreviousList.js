import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v1'

import { take } from 'lodash'

import RankingSection from '../../components/Section/RankingSection'
import './Ranking.scss'

const ITEMS_BY_PAGE = 10

const RankingPreviousList = ({ ranking, anchor, hasShots }) => {
  const { shots = [] } = ranking

  let [currentPage, setCurrentPage] = useState(1)
  let [firstIndexPage, setFirstIndexPage] = useState(1)
  let [lastIndexPage, setLastIndexPage] = useState(10)
  let [rankingPagination, setRankingPagination] = useState(firstPage())
  const totalPages = Math.ceil(shots.length / ITEMS_BY_PAGE)

  useEffect(() => {
    setRankingPagination(firstPage())
  }, [ranking])

  function firstPage() {
    return take(shots, ITEMS_BY_PAGE)
  }

  function previousPage() {
    if (currentPage > 1) {
      const _first = firstIndexPage - ITEMS_BY_PAGE
      const _last = lastIndexPage - ITEMS_BY_PAGE
      setFirstIndexPage(_first)
      setLastIndexPage(_last)
      setCurrentPage(currentPage - 1)
      setRankingPagination(shots.slice(_first - 1, _last))
    }
  }

  function nextPage() {
    if (currentPage < totalPages) {
      const _first = firstIndexPage + ITEMS_BY_PAGE
      const _last = lastIndexPage + ITEMS_BY_PAGE
      setFirstIndexPage(_first)
      setLastIndexPage(_last)
      setCurrentPage(currentPage + 1)
      setRankingPagination(shots.slice(_first - 1, _last))
    }
  }

  const showName = (details, param) => {
    return details && details[param] ? details[param] : ''
  }

  if (!hasShots) return null

  return (
    <>
      {!hasShots.length && <p>There is no ranking in this period.</p>}
      <RankingSection
        anchor="atual"
        cssExtraTitle="section__title--no-margin-bottom"
        hasPagination={shots.length > ITEMS_BY_PAGE}
        currentPage={currentPage}
        totalPages={Math.ceil(shots.length / ITEMS_BY_PAGE)}
        previousPage={previousPage}
        nextPage={nextPage}
      />

      <section id={`${anchor ? anchor : ''}`} className="ranking">
        <div className="ranking__inner">
          <div className="ranking__content">
            {rankingPagination.map((r, index) => (
              <div key={uuid()} className="ranking__item">
                <p className="ranking__order">
                  <span>{index + 1 + (currentPage - 1) * ITEMS_BY_PAGE}</span>
                </p>
                <p className="ranking__name">
                  {`${showName(r.customer.detail, 'firstName')}`}
                </p>
                <p className="ranking__points">{r.points}</p>
              </div>
            ))}
          </div>
          <div className="last-rank">
            <p>
              This ranking reflects the ratings obtained in the game in the week
              indicated above. Since all entries are subject to a final audit
              process for the tickets used, this ranking may not reflect the
              list of effective winners.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default RankingPreviousList
