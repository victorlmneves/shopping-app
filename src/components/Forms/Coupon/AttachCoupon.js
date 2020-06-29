import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import InputText from '../../Inputs/InputText'
import Select from '../../Inputs/Select'
import FileUpload from '../../Inputs/FileUpload'
import Button from '../../Button'
import Messages from '../../../containers/Messages'
import '../Forms.scss'
import {
  getAllStores,
  requestUploadCoupon,
  cleanUploadCoupon,
} from '../../../pages/UploadCoupon/actions'
import { activeWarning } from '../../../containers/Messages/actions'

const fileUploadMessage = `Upload an image of your purchase receipt. Only files of up to 10MB and in pdf, jpeg, jpg or png format are considered.`

const nextButton = {
  label: 'Next',
  link: '/',
}

const prevButton = {
  label: 'Previous',
  link: '/',
}

const AttachCoupon = () => {
  const dispatch = useDispatch()

  const [value, setValue] = useState('')
  const [store, setStore] = useState('')
  const [file, setFile] = useState()

  const { userDetail } = useSelector((state) => state.appReducer)

  const { stores, successUploadCoupon } = useSelector(
    (state) => state.uploadCoupon
  )

  function ordenateStores(stores) {
    stores.sort(function (currentStore, nextStore) {
      currentStore.name = currentStore.name.toUpperCase()
      nextStore.name = nextStore.name.toUpperCase()

      if (currentStore.name < nextStore.name) {
        return -1
      }

      if (currentStore.name > nextStore.name) {
        return 1
      }

      return 0
    })
  }

  ordenateStores(stores)

  useEffect(() => {
    document.getElementById('my-shop-data').style.display = 'none'
    dispatch(getAllStores())
    dispatch(cleanUploadCoupon())
  }, [])

  useEffect(() => {
    dispatch(getAllStores())
    dispatch(cleanUploadCoupon())
  }, [successUploadCoupon])

  function onChangeValue(value) {
    if (value < 0) {
      value = 0
    }

    /* only it's possible digits on input */
    value = value.replace(/\D/g, '')
    value = value.replace('.', '')
    value = value.replace(',', '')

    setValue(value)
  }

  function onChangeStore(value) {
    setStore(value)
  }

  const canSubmit = () => value && store && file
  const alertErrors = () =>
    dispatch(activeWarning('All fields must be filled.'))

  function showMyShopData(shopId) {
    if (!canSubmit() || !stores[stores.findIndex((val) => val.id == shopId)]) {
      alertErrors()

      return
    }

    document.getElementById('shop-data').style.display = 'none'
    document.getElementById('my-shop-data').style.display = 'block'
    document.getElementById('shop-selected').textContent =
      stores[stores.findIndex((val) => val.id == shopId)].name
  }

  function hideMyShopData() {
    document.getElementById('shop-data').style.display = 'block'
    document.getElementById('my-shop-data').style.display = 'none'
  }

  function doUploadCoupon(shopId) {
    const coupon = {
      customerId: userDetail.customerId,
      shoppingId: userDetail.shoppingId,
      storeId: store,
      value: value,
    }
    const payload = {
      file: file,
      coupon: coupon,
    }

    if (!canSubmit() || !stores[stores.findIndex((val) => val.id == shopId)]) {
      alertErrors()

      return
    }

    dispatch(requestUploadCoupon(payload))
  }

  const message = `In order to validate your receipt, please confirm that the purchase, store, date, value data are legible. And that your purchase was made at the Shopping ${
    userDetail.shoppingName ? userDetail.shoppingName : ''
  }.`
  const message2nd = `If any irregularity, fraud or any incorrect data is detected, you may lose the prize that results from this participation`

  return (
    <>
      <div id="shop-data">
        <div className="forms__field">
          <InputText
            label="Purchase Total"
            placeholder="E.g. 23 | Withou €"
            value={value}
            minValue="10"
            onChange={onChangeValue}
          />
          <p className="forms__text forms__text--center forms__text--no-margin">
            <i className="icon icon--info"></i>
            Cents are not counted
          </p>
        </div>
        <div className="forms__field">
          <label className="forms__label">Store</label>
          <Select
            id="shop-list"
            name="stores"
            list={stores}
            value={store}
            onChange={onChangeStore}
          />
        </div>
        <div className="forms__field">
          <FileUpload
            label="Attach Receipt"
            name="file"
            text={fileUploadMessage}
            action={setFile}
            file={file}
          />
        </div>
        <p className="forms__text forms__text--center forms__text--warning-coupon">
          {message}
        </p>
        <div className="forms__wrap-button">
          <Button
            label={nextButton.label}
            hasArrow
            onClick={() => showMyShopData(store)}
          />
        </div>
      </div>
      <div id="my-shop-data">
        <h1 className="forms__title forms__title--no-margin forms__text--center">
          My purchase details
        </h1>
        <div className="forms__field">
          <div className="forms__box">
            <p className="forms__text forms__text--label">Purchase Total</p>
            <p className="forms__text">{value} €</p>
            <p className="forms__text forms__text--label">Store</p>
            <p className="forms__text" id="shop-selected"></p>
            <p className="forms__text forms__text--label">Shopping</p>
            <p className="forms__text">{userDetail.shoppingName}</p>
          </div>
        </div>

        <p className="forms__text forms__text--center forms__text--warning-coupon">
          {message2nd}
        </p>
        <div className="forms__wrap-button">
          <Button
            label={prevButton.label}
            hasPrevArrow
            action=""
            cssExtra="button--prev"
            onClick={() => hideMyShopData()}
          />
          <Button
            label={nextButton.label}
            hasArrow
            action=""
            onClick={() => doUploadCoupon(store)}
          />
        </div>
      </div>
      <Messages />
    </>
  )
}

export default withRouter(AttachCoupon)
