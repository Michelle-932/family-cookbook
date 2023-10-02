import React, { useState } from 'react'
import '../index.css'
import ReactDOM from 'react-dom/client'
import Header from '../components/header.jsx'
import Hero from '../components/Hero.jsx'
import Recipehead from '../components/recipehead.jsx'
import RecipeGrid from '../components/RecipeGrid.jsx'
import Footer from '../components/Footer.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>

//         <Header />
//         <Hero />
//         <Recipehead />
//         <RecipeGrid />
//         <Footer />
  
//     </React.StrictMode>,
// )

function home() {
  

  return (
    <>
      <Header />
      <Hero />
      <Recipehead />
      <RecipeGrid/>
      <Footer />
    </>
  )
}

export default home