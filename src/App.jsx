import { useState } from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import SignUp from './pages/SignUp/SignUp'
import Otp from './components/Otp/Otp'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <SignUp/> */}
    {/* <Otp/> */}
    <Navbar/>
    <Home/>
    <Footer/>
    </>
  )
}

export default App
