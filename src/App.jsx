import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Hero from './Compononts/Hero'
import Service from './Pages/Services'
import ServiceDetails from './Pages/ServiceDetails'
import BookServicePage from './Pages/BookServicePage'

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
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
