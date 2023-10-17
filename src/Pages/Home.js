import './Home.css'

import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
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
