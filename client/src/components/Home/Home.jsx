import React from 'react'
import Frame1 from './Frame1'
import ExploreCabs from './ExploreCabs'
import Experience from './Experience'
import Serivces from './Services'
import Funfact from './Funfact'

const Home = () => {
  return (
    <div className='bg-[#d5dddf] overflow-hidden '>
        <Frame1/>
        <ExploreCabs/>
        <Experience/>
        <Serivces/>
        <Funfact/>
    </div>
  )
}

export default Home