import React from 'react'
import { useDispatch } from 'react-redux'

function FileUpload(props) {
  const dispatch = useDispatch()
  let fileValid = false
  let maxSize = false
  const {
    cssExtra,
    label,
    id,
    action,
    file,
    errorMessage,
    failUploadCoupon,
  } = props

  if (file) {
    if (
      file.type === 'image/jpeg' ||
      file.type === 'image/jpg' ||
      file.type === 'image/png' ||
      file.type === 'application/pdf'
    ) {
      fileValid = true
    }

    if (file.size > 10000000) {
      maxSize = true
    }
  }

  return (
    <>
      {label && (
        <label htmlFor={id} className="forms__label">
          {label}
        </label>
      )}

      <input
        className={`inputfile inputfile-1 forms__upload ${cssExtra}`}
        id="file-1"
        name="file-1[]"
        type="file"
        accept=".png, .jpeg, .jpg, .pdf"
        onChange={(e) => action(e.target.files[0])}
      />
      <div className="label-wrapper">
        {(!file || !fileValid) && (
          <p className="forms__text forms__text--center">
            Add an image of your purchase receipt. Only files up to 10 MB and
            format pdf, jpeg, jpg or png are considered
          </p>
        )}
        {file && !fileValid && (
          <p className="forms__text forms__text--center forms__error">
            Invalid format file
          </p>
        )}

        {file && maxSize && (
          <p className="forms__text forms__text--center forms__error">
            The file needs to be smaller than 10 MB
          </p>
        )}
        {file && fileValid && (
          <p className="forms__text forms__text--center forms__text--success">
            Receipt uploaded successfully. 👍 Wasn't this? If you wish, you can replace it.
          </p>
        )}
        {/* {
            failUploadCoupon &&
            <p className='forms__error'>{failUploadCoupon}</p>
        } */}
        {file && fileValid && (
          <p className="js-file forms__text forms__text--center file-name">
            {file.name}
          </p>
        )}

        <label htmlFor="file-1">
          <span className="button">
            Attach Receipt
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="button__arrow"
            >
              <path
                className="c"
                d="M-4613,16V9h-7V7h7V0h2V7h7V9h-7v7Z"
                transform="translate(4620)"
              />
            </svg>
          </span>
        </label>
      </div>
      {errorMessage && <p className="forms__error">{errorMessage}</p>}
    </>
  )
}

export default FileUpload
