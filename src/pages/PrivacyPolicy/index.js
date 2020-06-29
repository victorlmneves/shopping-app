import React from 'react'

import HeroForm from '../../components/Hero/HeroForm'
import InfoSection from '../../components/Section/InfoSection'

const InfoContent = () => {
  const title = 'Preamble'

  const text = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum suspendisse ultrices gravida dictum fusce ut. Diam maecenas ultricies mi eget mauris pharetra. Nunc aliquet bibendum enim facilisis gravida. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Vel facilisis volutpat est velit egestas dui id ornare arcu. Magna fringilla urna porttitor rhoncus dolor purus non. Consequat interdum varius sit amet. Arcu ac tortor dignissim convallis aenean et tortor. Sed risus pretium quam vulputate dignissim suspendisse in est ante. At ultrices mi tempus imperdiet nulla. Mi eget mauris pharetra et ultrices neque ornare aenean. Ullamcorper eget nulla facilisi etiam dignissim. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Maecenas sed enim ut sem viverra aliquet. Eleifend quam adipiscing vitae proin.\n
    `

  return (
    <main className="main">
      <div className="main__forms main__forms--info">
        <HeroForm title="PRIVACY POLICY" cssExtra="hero--info" />
        <InfoSection title={title} text={text} />
      </div>
    </main>
  )
}

export default InfoContent
