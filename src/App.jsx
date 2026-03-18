import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Hero from './Compononts/Hero'
import Service from './Pages/Services'
import ServiceDetails from './Pages/ServiceDetails'
import BookServicePage from './Pages/BookServicePage'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import ProviderProfile from './Pages/ProviderProfile'
import Admin from './Pages/Admin'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ServerError from './Pages/ServerError'
import DashBoard from './Pages/Dashboard'
import ResetPassword from './Pages/ResetPassword'
import Forgotpassword from './Pages/Forgotpassword'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js'
const stripePromise = loadStripe("pk_test_51TBsTK2aT383UZrd8CVSovU3ZHHrTgnlrqvbTENb3xLTo67LfKAGngumZooyd0whIVGYkwfsvJGchiJl8d0sKmFz006obFp1iL")
function App() {
  const [name, setName] = useState("")
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeButton={false}
      />
      <BrowserRouter>
        <Elements stripe={stripePromise}>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/service' element={<Service />} />
            <Route path='/service-details/:serviceId' element={<ServiceDetails />} />
            <Route path='/book' element={<BookServicePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/provider-profile' element={<ProviderProfile />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/server-error-response' element={<ServerError />} />
            <Route path='/admin/dashboard' element={<DashBoard />} />
            <Route path='/forget-password' element={<Forgotpassword />} />
            <Route path='/reset-password/:resetPasswordToken' element={<ResetPassword />} />
          </Routes>
        </Elements>
      </BrowserRouter>
    </>
  )
}

export default App
