import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Discreption from '../components/Discreption'
import Testimonial from '../components/Testimonial'
import GenrateButton from '../components/GenrateButton'

const Home = () => {
  return (
    <div>
        <Header/>
        <Steps/>
        <Discreption/>
        <Testimonial/>
        <GenrateButton/>
    </div>
  )
}

export default Home