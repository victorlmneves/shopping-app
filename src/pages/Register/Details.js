import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import HeroForm from '../../components/Hero/HeroForm'
import RegisterFormDetails from '../../components/Forms/RegisterFormDetails'
import FormsSection from '../../components/Section/FormsSection'
import LinkButton from '../../components/LinkButton'

import { requestValidation } from './actions'

const startSessionButton = {
  label: 'Login',
  link: '/login',
}

const RegisterDetails = (props) => {
  const token = props.match.params
  const dispatch = useDispatch()

  const { validation } = useSelector((state) => state.register)

  useEffect(() => {
    dispatch(requestValidation(token))
  }, [])

  return (
    <main className="main">
      <div className="main__forms">
        <HeroForm />
        {
          validation && <Redirect to="/login" />
          // <>
          //     <FormsSection>
          //         <form className='forms forms--register'>
          //             <fieldset className='forms__fieldset'>
          //                 <legend className='forms__title'>
          //                     Finish your data
          //                 </legend>
          //                 <RegisterFormDetails />
          //             </fieldset>
          //         </form>
          //     </FormsSection>
          //     <section className='section section--subsection'>
          //         <h3 className='section__subtitle section__subtitle--subsection'>Already have an Account?</h3>
          //         <div className = 'section__wrap-buttons' >
          //             <LinkButton linkData={startSessionButton} />
          //         </div>
          //     </section>
          // </>
        }
        {!validation && (
          <FormsSection>
            <form className="forms forms--register">
              <fieldset className="forms__fieldset">
                <legend className="forms__title">
                  Token validation error!
                </legend>
              </fieldset>
            </form>
          </FormsSection>
        )}
      </div>
    </main>
  )
}

export default RegisterDetails
