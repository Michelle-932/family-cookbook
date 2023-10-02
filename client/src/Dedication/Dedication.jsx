import React, { useState } from 'react'
import '../index.css'
import ReactDOM from 'react-dom/client'
import Header from '../components/header.jsx'
import Article from '../components/Article.jsx'
import Footer from '../components/Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        <Header />
        <Article />
        <Footer />
  
    </React.StrictMode>,
)

// function dedication () {
//     return (
//         <>
//         <Header />
//         <Article />
//         <Footer />
//         </>
//     )
// }

// export default dedication