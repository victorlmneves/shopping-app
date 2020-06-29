import React from 'react'

import HeroForm from '../../components/Hero/HeroForm'
import InfoSection from '../../components/Section/InfoSection'

const InfoContent = () => {
  const title = 'Cookies Policy'

  const text = `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum suspendisse ultrices gravida dictum fusce ut. Diam maecenas ultricies mi eget mauris pharetra. Nunc aliquet bibendum enim facilisis gravida. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Vel facilisis volutpat est velit egestas dui id ornare arcu. Magna fringilla urna porttitor rhoncus dolor purus non. Consequat interdum varius sit amet. Arcu ac tortor dignissim convallis aenean et tortor. Sed risus pretium quam vulputate dignissim suspendisse in est ante. At ultrices mi tempus imperdiet nulla. Mi eget mauris pharetra et ultrices neque ornare aenean. Ullamcorper eget nulla facilisi etiam dignissim. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Maecenas sed enim ut sem viverra aliquet. Eleifend quam adipiscing vitae proin.</p>
<p>Nec nam aliquam sem et tortor consequat. Mauris cursus mattis molestie a iaculis. Senectus et netus et malesuada fames ac. Tincidunt arcu non sodales neque sodales ut etiam sit. Malesuada nunc vel risus commodo. Metus dictum at tempor commodo ullamcorper. Dignissim enim sit amet venenatis urna cursus eget. Ultrices gravida dictum fusce ut. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Integer eget aliquet nibh praesent tristique magna sit. Blandit turpis cursus in hac habitasse platea. Cursus eget nunc scelerisque viverra mauris. Erat pellentesque adipiscing commodo elit at imperdiet. In hac habitasse platea dictumst quisque sagittis purus sit amet. Diam ut venenatis tellus in metus vulputate eu. Sed vulputate odio ut enim blandit.</p>
<p>Lacus sed viverra tellus in hac habitasse platea. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Sed sed risus pretium quam. Leo urna molestie at elementum. Urna nec tincidunt praesent semper. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Neque aliquam vestibulum morbi blandit cursus risus at. Viverra mauris in aliquam sem fringilla. Lorem dolor sed viverra ipsum nunc aliquet. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis.</p>
<p>Aliquet enim tortor at auctor. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Urna et pharetra pharetra massa massa ultricies mi. Maecenas pharetra convallis posuere morbi leo urna molestie. Eget velit aliquet sagittis id. Quam nulla porttitor massa id. Purus in mollis nunc sed id semper. In massa tempor nec feugiat nisl pretium fusce. Viverra orci sagittis eu volutpat odio facilisis mauris. Arcu non odio euismod lacinia at quis risus sed. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Mauris nunc congue nisi vitae suscipit tellus mauris a. Eleifend quam adipiscing vitae proin sagittis. Molestie at elementum eu facilisis sed. In mollis nunc sed id semper risus in. Sociis natoque penatibus et magnis. Porta lorem mollis aliquam ut. Aliquam sem fringilla ut morbi tincidunt.</p>
    `

  return (
    <main className="main">
      <div className="main__forms main__forms--info">
        <HeroForm title="COOKIES POLICY" cssExtra="hero--info" />
        <InfoSection title={title} text={text} />
      </div>
    </main>
  )
}

export default InfoContent
