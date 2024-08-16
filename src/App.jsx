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
import AllMedicinesPage from './pages/AllMedicinesPage/AllMedicinesPage'
import DoctorAppointmentsPage from './pages/DoctorAppointmentsPage/DoctorAppointments'
import PrescriptionPage from './pages/PrescriptionPage/PrescriptionPage'
import Labs from './pages/Labs/Labs'
import BloodPage from './pages/BloodPage/BloodPage'
import DietPlan from './pages/DietPlan/DietPlan'
import ProductsPage from './pages/ProductsPage/ProductsPage'


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
    },
    {
      path:"/AllMedicinesPage",
      element:<AllMedicinesPage/>
    },
    {
      path:"/DoctorAppointmentsPage",
      element:<DoctorAppointmentsPage/>
    },
    {
      path:"/PrescriptionPage",
      element:<PrescriptionPage/>
    },
    {
      path:"/Labs",
      element:<Labs/>
    },
    {
      path:"/BloodPage",
      element:<BloodPage/>
    },
    {
      path:"/DietPlan",
      element:<DietPlan/>
    },
    {
      path:"/ProductsPage",
      element:<ProductsPage/>
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
