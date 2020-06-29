import React from 'react'
import uuid from 'uuid/v1'

import { isEmpty } from 'lodash'

import './Ranking.scss'

const RankingPersonal = ({ shots }) => (
  <section className="ranking">
    <div className="ranking__inner">
      <div
        className={`ranking__content ${
          isEmpty(shots)
            ? 'ranking__content--no-results'
            : 'ranking__content--individual'
        }`}
      >
        {isEmpty(shots) && (
          <p className="ranking__no-results">
            You haven't played this week yet
          </p>
        )}
        {!isEmpty(shots) &&
          shots.map((item) => (
            <div
              key={uuid()}
              className={`ranking__item ${item.my ? 'ranking__item--my' : ''}`}
            >
              <p className="ranking__order">
                <span>{item.position}</span>
              </p>
              <p className="ranking__name">{item.customer.detail.firstName}</p>
              <p className="ranking__points">{item.points}</p>
            </div>
          ))}
      </div>
    </div>
  </section>
)

export default RankingPersonal
