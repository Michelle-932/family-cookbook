import React, { useState } from 'react'
import '../App.css'
import '../index.css'
import ReactDOM from 'react-dom/client'
import Header from '../components/header.jsx'
import SubmitBanner from '../components/SubmitBanner.jsx'
import Recipeform from '../components/Recipeform.jsx'
import Footer from '../components/Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        <Header />
        <SubmitBanner />
        <Recipeform />
        <Footer />
  
    </React.StrictMode>,
)

// function addrecipe () {
//     return (
//         <>
//         <Header />
//         <SubmitBanner />
//         <Recipeform />
//         <Footer />
//         </>
//     )
// }

// export default addrecipe