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

function App() {
  const [name,setName] = useState("")
  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={3000}
      />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/service-details/:serviceId' element={<ServiceDetails/>}/>
        <Route path='/book' element={<BookServicePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/provider-profile' element={<ProviderProfile/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/server-error-response' element={<ServerError/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
