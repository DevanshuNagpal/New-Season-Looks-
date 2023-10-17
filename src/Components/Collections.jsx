import React from 'react'
import Seasons from './Seasons'
import Show from './Show'
import Load from './Load'
import Navbar from './Navbar'
import Footer from './Footer'
const Collections = () => {
  return (
    <div id='Collections'>
      <div>
      <Navbar/> 
      <Seasons/>
      <Show/>
      <Load/>
      <Footer/>
    </div>
    </div>
  )
}

export default Collections
