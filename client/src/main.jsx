import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import axios from "axios"
import { BrowserRouter } from 'react-router-dom'

if(import.meta.env.MODE==="development"){
  axios.defaults.baseURL="http://127.0.0.1:5000/"
}else{
  axios.defaults.baseURL=import.meta.env.VITE_API_URL
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
