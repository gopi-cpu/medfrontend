import { useState } from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import SignUp from './pages/SignUp/SignUp'
import Otp from './components/Otp/Otp'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Cart from './pages/Cart/Cart'
// import { Router } from 'express'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import HealthConcernsPage from './pages/HealthConcernsPage/HealthConcernsPage'
import MedicalStoresPage from './pages/MedicalStoresPage/MedicalStoresPage'
import IndividualMedStorePage from './pages/IndividualMedStorePage/IndividualMedStorePage'


function App() {
  const [count, setCount] = useState(0)
  const router= createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/SignUp",
      element:<SignUp/>
    },
    {
      path:"/Cart",
      element:<Cart/>
    },
    {
      path:"/HealthConcernsPage",
      element:<HealthConcernsPage/>
    },
    {
      path:"/MedicalStoresPage",
      element:<MedicalStoresPage/>
    },
    {
      path:"/IndividualMedStorePage",
      element:<IndividualMedStorePage/>
    }
  ])
  return (
    <>
    <Navbar/>
    <RouterProvider router={router}/>
    {/* <Footer/> */}
    </>
  )
}

export default App
