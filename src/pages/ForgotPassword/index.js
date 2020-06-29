import React from 'react'

import HeroForm from '../../components/Hero/HeroForm'
import ForgotPasswordForm from '../../components/Forms/ForgotPassword'
import FormsSection from '../../components/Section/FormsSection'

const ForgotPassword = () => (
  <main className="main">
    <div className="main__forms">
      <HeroForm cssExtra="hero--register" />
      <FormsSection>
        <form className="forms forms--register">
          <fieldset className="forms__fieldset">
            <legend className="forms__title">Recover Password</legend>
            <ForgotPasswordForm />
          </fieldset>
        </form>
      </FormsSection>
    </div>
  </main>
)

export default ForgotPassword
