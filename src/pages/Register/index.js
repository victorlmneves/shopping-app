import React from 'react'

import HeroForm from '../../components/Hero/HeroForm'
import RegisterForm from '../../components/Forms/RegisterForm'
import FormsSection from '../../components/Section/FormsSection'
import LinkButton from '../../components/LinkButton'

const loginButton = {
  label: 'Login',
  link: '/login',
}

const Register = () => {
  return (
    <main className="main">
      <div className="main__forms">
        <HeroForm cssExtra="hero--register" />
        <FormsSection>
          <form className="forms forms--register">
            <fieldset className="forms__fieldset">
              <legend className="forms__title">Signup Now</legend>
              <RegisterForm />
            </fieldset>
          </form>
        </FormsSection>
        <section className="section section--subsection">
          <h3 className="section__subtitle section__subtitle--subsection">
            Already have an Account?
          </h3>
          <div className="section__wrap-buttons">
            <LinkButton linkData={loginButton} />
          </div>
        </section>
      </div>
    </main>
  )
}

export default Register
