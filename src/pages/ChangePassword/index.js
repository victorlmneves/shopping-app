import React from 'react'

import HeroForm from '../../components/Hero/HeroForm'
import ChangePasswordForm from '../../components/Forms/ChangePassword'
import FormsSection from '../../components/Section/FormsSection'

const ChangePassword = (props) => {
  const { token } = props.match.params

  return (
    <main className="main">
      <div className="main__forms">
        <HeroForm cssExtra="hero--register" />
        <FormsSection>
          <form className="forms forms--register">
            <fieldset className="forms__fieldset">
              <legend className="forms__title">Choose new Password</legend>
              <ChangePasswordForm token={token} />
            </fieldset>
          </form>
        </FormsSection>
      </div>
    </main>
  )
}

export default ChangePassword
