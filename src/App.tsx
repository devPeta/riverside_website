import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar'
import AboutUs from './components/AboutUs'
import OurRooms from './components/OurRooms'
import OurEvents from './components/OurEvents'
import OurCusine from './components/OurCusine'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {
return(
    <div>
      <NavBar/>
      <AboutUs/>
      <OurRooms/>
      <OurEvents/>
      <OurCusine/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App
