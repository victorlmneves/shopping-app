import React from 'react'

import HeroForm from '../../components/Hero/HeroForm'
import FaqsSection from '../../components/Section/FaqsSection'

const FaqSection = () => {
  return (
    <main className="main">
      <div className="main__forms main__forms--info">
        <HeroForm
          title="LOOKING FOR ANWASERS? THE PATH IS THROUGH HERE."
          cssExtra="hero--info"
        />
        <FaqsSection
          title="FAQ's"
          cssExtra="section__content--block"
        ></FaqsSection>
      </div>
    </main>
  )
}

export default FaqSection
