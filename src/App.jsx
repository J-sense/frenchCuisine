import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './cpmponents/Herosection'
import Navbar from './cpmponents/Navbar'
import Latestmeal from './cpmponents/Latestmeal'
import AvailableMeal from './cpmponents/AvailableMeal'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar />
   <HeroSection />
   <Latestmeal />
   <AvailableMeal />
   </>
  )
}

export default App
