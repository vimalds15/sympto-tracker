import React from 'react'
import {  createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import { routes } from './routes/routes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



const route = createBrowserRouter(routes)

const App = () => {
  return (
    <>
      <Navbar />
      <RouterProvider router={route} />
      <Footer />
    </>
  )
}

export default App