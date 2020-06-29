import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { findIndex } from 'lodash'

import { getList, getCurrentRanking } from './actions'

import HeroRanking from '../../components/Hero/HeroRanking'
import RankingSection from '../../components/Section/RankingSection'
import RankingList from '../../components/Ranking/RankingList'
import RankingPersonal from '../../components/Ranking/RankingPersonal'
import RankingPrevious from '../../components/Ranking/RankingPrevious'

const Ranking = () => {
  const dispatch = useDispatch()
  const { userDetail } = useSelector((state) => state.appReducer)
  const { listRanking, currentRanking } = useSelector((state) => state.ranking)

  useEffect(() => {
    dispatch(getList())
    dispatch(getCurrentRanking())
  }, [])

  function getDateFormatted(dateString) {
    if (dateString) {
      //Workaround to fixing bug in Safari browser
      const dataStringReplaced = dateString.replace('+0000', '')
      const date = new Date(dataStringReplaced)

      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }

    return dateString
  }

  function getTimeLeft() {
    let date = undefined

    if (currentRanking.endAt) {
      const dataStringReplaced = currentRanking.endAt.replace('+0000', '')
      date = new Date(dataStringReplaced)

      let finalCampaign = date.setHours(23)
      finalCampaign = new Date(finalCampaign).setMinutes(59)
      finalCampaign = new Date(finalCampaign).setSeconds(59)

      return finalCampaign - Date.now() //milliseconds
    } else {
      return null
    }
  }

  function getYourRanking() {
    let yourRanking = {
      position: null,
      points: null,
    }
    currentRanking.shots.forEach((s, index) => {
      if (s.customer.id === userDetail.customerId) {
        yourRanking.position = index + 1
        yourRanking.points = s.points
      }
    })

    return yourRanking
  }

  function getRankingPersonal() {
    let personalRanking = []
    let { shots } = currentRanking

    if (shots.length > 0 && userDetail.customerId) {
      const index = findIndex(
        shots,
        (cr) => cr.customer.id === userDetail.customerId
      )

      if (index !== -1) {
        if (shots[index - 1]) {
          let shot = shots[index - 1]
          shot.position = index
          personalRanking.push(shot)
        }

        let shot = shots[index]
        shot.position = index + 1
        shot.my = true
        personalRanking.push(shot)

        if (shots[index + 1]) {
          let shot = shots[index + 1]
          shot.position = index + 2
          personalRanking.push(shot)
        }
      }
    }

    return personalRanking
  }

  const startAt = currentRanking.startAt
  const endAt = currentRanking.endAt
  const yourRanking = getYourRanking()
  const rankingPersonal = getRankingPersonal()

  return (
    <main className="main">
      <HeroRanking
        shopping={`Shopping ${userDetail.shoppingName}`}
        title="Actual Ranking"
        actualRanking={`Actual Ranking goes from ${getDateFormatted(
          startAt
        )} to ${getDateFormatted(endAt)}`}
        subtitle="Your position"
        yourRanking={yourRanking}
        timeLeft={getTimeLeft()}
      />

      <RankingList ranking={currentRanking} />

      <RankingSection
        anchor="me"
        title="My position"
        cssExtraTitle="section__title--my-position"
      />

      <hr className="section__hr" />

      <RankingPersonal shots={rankingPersonal} />

      <RankingSection
        anchor="previous"
        title="Previous Rankings"
        cssExtraTitle="section__title--previous"
      />
      <RankingPrevious />
    </main>
  )
}

export default Ranking
