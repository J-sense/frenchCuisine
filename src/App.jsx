

import './App.css'
import HeroSection from "./components/Herosection";
import Navbar from './components/Navbar'
import Latestmeal from './components/Latestmeal'
import AvailableMeal from './components/AvailableMeal'
import { Outlet } from 'react-router-dom';

function App() {
 

  return (
   <>
   <Navbar />
   <Outlet />
 
   </>
  )
}

export default App
