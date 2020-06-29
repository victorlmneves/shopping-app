import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchUserHistoric } from '../../pages/Account/actions'
import LinkButton from '../../components/LinkButton'

import './used-credits.scss'

function UserAccount({ label, text, cssExtra }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserHistoric())
  }, [])

  function invertOrderDate(arr) {
    return arr.sort((a, b) => b.creditId - a.creditId)
  }

  const userHistoric = invertOrderDate(
    useSelector((state) => state.accountReducer.historic)
  )

  const renderItem = (item, index) => {
    const { creditId, creditUsed, points, rankingWeek, createdAt } = item

    const debitId = creditId
    const debit = `${creditUsed} Credits`
    const dateAndHour = createdAt
    const week = `${rankingWeek}ª`

    const oddOrEven = index & 1 ? 'odd' : 'even'

    return (
      <Fragment key={index}>
        <tr className={oddOrEven}>
          <td data-th="Debit (ID)">{debitId}</td>
          <td data-th="Date/Hour">{dateAndHour}</td>
          <td data-th="Debit">{debit}</td>
          <td data-th="Week">{week}</td>
          <td data-th="Game Result">{`${points} Points`}</td>
        </tr>
        <tr className="used-credits__empty-row">
          <td className="used-credits__empty-row" colSpan="6"></td>
        </tr>
      </Fragment>
    )
  }

  return (
    <article className="used-credits">
      <table className="used-credits__table">
        <thead>
          <tr>
            <th>Debit (ID)</th>
            <th>Date/Hour</th>
            <th>Debit</th>
            <th>Week</th>
            <th>Game Result</th>
          </tr>
        </thead>
        <tbody>
          {userHistoric &&
            userHistoric.map((item, index) => renderItem(item, index))}
        </tbody>
      </table>
      <div className="section__wrap-buttons">
        <LinkButton linkData={{ label: 'Start Game', link: '/play' }} />
      </div>
    </article>
  )
}

export default UserAccount
