import React from 'react'

import HeroForm from '../../components/Hero/HeroForm'
import LoginForm from '../../components/Forms/Login'
import FormsSection from '../../components/Section/FormsSection'

const Login = () => (
  <main className="main">
    <div className="main__forms">
      <HeroForm cssExtra="hero--register" />
      <FormsSection>
        <div className="forms forms--register">
          <fieldset className="forms__fieldset">
            <legend className="forms__title">Login</legend>
            <LoginForm />
          </fieldset>
        </div>
      </FormsSection>
    </div>
  </main>
)

export default Login
