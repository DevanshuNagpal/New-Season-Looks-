import './Home.css'

import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='Section1 min-w-[430px]'>
      <Navbar/>
       <Hero/>
       <Footer/>
    </div>
    
  )
}

export default Home
