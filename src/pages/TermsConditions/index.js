import React from 'react'

import HeroForm from '../../components/Hero/HeroForm'
import InfoSection from '../../components/Section/InfoSection'

const InfoContent = () => {
  const title = 'Terms and Conditions'

  const text = `
    With the acceptance of these terms and conditions, the consumer assumes that they have read and accepted them, constituting the same regime that regulates the use of the website.\n\n
    The website is designed to boost the services provided to customers, partners and tenants of the shopping centers operated by COMPANY NAME, with headquarters at COMPANY ADDRESS, registered at the Commercial Registry Office, with registration number and legal person COMPANY VAT, hereinafter also designated only by COMPANY SHORT NAME, telephone COMPANY TELEPHONE NUMBER, email: COMAPNY EMAIL.
    `

  return (
    <main className="main">
      <div className="main__forms main__forms--info">
        <HeroForm title="TERMS AND CONDITIONS" cssExtra="hero--info" />
        <InfoSection title={title} text={text} />
      </div>
    </main>
  )
}

export default InfoContent
