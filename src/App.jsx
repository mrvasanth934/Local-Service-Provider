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

function App() {
  const [name,setName] = useState("")
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/service-details' element={<ServiceDetails/>}/>
        <Route path='/book' element={<BookServicePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/provider-profile' element={<ProviderProfile/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
