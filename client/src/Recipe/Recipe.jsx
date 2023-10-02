import React, { useState } from 'react'
import '../App.css'
import '../index.css'
import ReactDOM from 'react-dom/client'
import Header from '../components/header.jsx'
import Recipedisplay from '../components/Recipedisplay.jsx'
import Footer from '../components/Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        <Header />
        <Recipedisplay />
        <Footer />
  
    </React.StrictMode>,
)