import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import oauth from '../../utils/oauth'

import Button from '../../components/Button'
import LinkButton from '../../components/LinkButton'
import { requestProfileCredits } from '../../pages/Account/actions'
import ModalButton from '../../components/ModalButton/ModalButton'
import parseCredits from '../../utils/parseCredits'

import './uploaded-credits.scss'

const seeCouponButton = {
  label: 'See Receipt',
  link: '/',
}

function openModalImg(fileName, url) {
  document.body.classList.add('no-scroll')
  document.querySelector('js-my-img').src = url
  document.querySelector('js-img-button').classList.add('open')
}

const isOddOrEven = (x) => {
  return x & 1 ? 'odd' : 'even'
}

const UserAccount = () => {
  const userAccessToken = `Bearer ${oauth.getAccessToken()}`

  const [expandedContent, setExpandedContent] = useState([])

  const expandContent = (id) => () => {
    let copyExtended = [...expandedContent]

    if (copyExtended.find((el) => el === id)) {
      copyExtended = [...copyExtended].filter((el) => el !== id)
    } else {
      copyExtended.push(id)
    }

    setExpandedContent(copyExtended)
  }

  const hasExtended = (id) => {
    if (expandedContent.find((el) => el === id)) {
      return true
    }

    return false
  }

  const dispatch = useDispatch()
  const {
    accountReducer,
    uploadCoupon: { stores },
  } = useSelector((state) => ({
    accountReducer: state.accountReducer,
    uploadCoupon: state.uploadCoupon,
  }))

  function invertOrderDate(arr) {
    return arr.sort((a, b) => b.id - a.id)
  }

  const mainList = invertOrderDate(
    useSelector((state) => state.accountReducer.mainList)
  )

  useEffect(() => {
    dispatch(requestProfileCredits())
  }, [])

  const getStoreName = (storeId) => {
    const store = stores && stores.find((item) => item.id === storeId)

    return (store && store.name) || ''
  }

  const renderItem = (item, index) => {
    const {
      id,
      storeId,
      value,
      credits,
      url,
      fileName,
      status,
      createdAt,
      couponStatusMotive,
    } = item
    const expandIndex = index + 1
    const oddOrEven = isOddOrEven(index)
    const mappedStatus = ''
    const updatedAt = createdAt
    const dateAndHour = createdAt
    const totalCredits = `${parseCredits(credits)} Credits`
    const uploadedCredits = `${value} Credits`
    const purchaseValue = `${value}€`
    const storeName = getStoreName(storeId)
    const invalidMotive =
      (couponStatusMotive &&
        couponStatusMotive.length &&
        couponStatusMotive[couponStatusMotive.length - 1].description) ||
      ''

    const Status = () => {
      const values = {
        ENABLED: {
          cssClass: 'checked',
          text: 'Validated',
        },
        ENABLED_ADMINISTRATIVE: {
          cssClass: 'checked',
          text: 'Validated',
        },
        VALIDATED: {
          cssClass: 'checked',
          text: 'Validated',
        },
        DISABLED: {
          cssClass: 'cross',
          text: 'Invalid',
        },
        BANNED: {
          cssClass: 'cross',
          text: 'Invalid',
        },
        WAITING: {
          cssClass: 'wait',
          text: 'In Audit',
        },
        UNKNOWN: {
          cssClass: '',
          text: 'N/A',
        },
      }

      /* const states = Object.keys(values);
        if (!states.find(key => key === status)) {
            console.log('Unknown Status', status);
        } */

      const { cssClass, text } = values[status] || values.UNKNOWN

      return (
        <>
          <i className={`icon icon--status-${cssClass}`}></i> {text}
        </>
      )
    }

    return (
      <Fragment key={index}>
        <tr
          className={
            hasExtended(expandIndex) ? `${oddOrEven} clicked` : oddOrEven
          }
          onClick={expandContent(expandIndex)}
        >
          <td data-th="Descriptive">Talão de Compra</td>
          <td data-th="Updated at">{updatedAt}</td>
          <td data-th="Credits">{uploadedCredits}</td>
          <td data-th="Status">
            <Status />
          </td>
        </tr>
        <tr className={hasExtended(expandIndex) ? 'active' : 'active hide'}>
          <td colSpan="4">
            <div className="uploaded-credits__wrap-details">
              <div className="uploaded-credits__details">
                <h3 className="uploaded-credits__topic">
                  Participation Details
                </h3>
                <div className="uploaded-credits__item">
                  Purchase Price
                  <span>{purchaseValue}</span>
                </div>
                <div className="uploaded-credits__item">
                  Shop
                  <span>{storeName}</span>
                </div>
                <div className="uploaded-credits__item">
                  Date/Hour
                  <span>{dateAndHour}</span>
                </div>
                <div className="uploaded-credits__item">
                  Number(ID)
                  <span>{id}</span>
                </div>
              </div>
              <div className="uploaded__details">
                {invalidMotive && status === 'DISABLED' && (
                  <>
                    <h3 className="uploaded-credits__topic">
                      Reason for Invalidity
                    </h3>
                    <div className="uploaded-credits__item">
                      {invalidMotive}
                    </div>
                  </>
                )}
              </div>
              <div className="uploaded-credits__details">
                <h3 className="uploaded-credits__topic">
                  File Details
                </h3>
                <div className="uploaded-credits__box">
                  <div>
                    <ModalButton
                      LinkComponent={() => (
                        <Button
                          hasEye
                          label={seeCouponButton.label}
                          onClick={() => {
                            openModalImg(fileName, url)
                          }}
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr className="uploaded-credits__empty-row">
          <td className="uploaded-credits__empty-row" colSpan="4"></td>
        </tr>
      </Fragment>
    )
  }

  return (
    <article className="uploaded-credits">
      <table className="uploaded-credits__table">
        <thead>
          <tr>
            <th>Descriptive</th>
            <th>Updated at</th>
            <th>Credits</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {mainList && mainList.map((item, index) => renderItem(item, index))}
        </tbody>
      </table>
      <div className="section__wrap-buttons">
        <LinkButton
          linkData={{ label: 'Upload Receipts', link: '/register-coupon' }}
        />
      </div>
    </article>
  )
}

export default UserAccount
