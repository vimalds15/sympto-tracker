import React from 'react'
import {  createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import { routes } from './routes/routes'
import DefaultLayoutHOC from './hoc/DefaultLayout.HOC'



const route = createBrowserRouter(routes)

const App = () => {
  return (
    <>
    {/* <DefaultLayoutHOC> */}
      <RouterProvider router={route} />
    {/* </DefaultLayoutHOC> */}
    </>
  )
}

export default App