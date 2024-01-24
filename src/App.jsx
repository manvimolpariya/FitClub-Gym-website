import { useState } from 'react'
import './App.css'

import Programs from './components/Programs/Program'
import Reasons from './components/Reasons/Reason'
import Plans from './components/Plans/Plans'
import Testimonial from './components/Testimonials/Testimonial'
import Join from './components/Join/Join'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='App'>
   <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
       <Testimonial/>
       <Join/>
       <Footer/>
      </div>

      
    
  )
}

export default App
