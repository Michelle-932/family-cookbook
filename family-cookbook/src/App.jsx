import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header.jsx'
import Hero from './components/Hero.jsx'
import Recipehead from './components/recipehead.jsx'
import RecipeGrid from './components/RecipeGrid.jsx'
import Footer from './components/Footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Recipehead />
      <RecipeGrid />
      <Footer />
    </>
  )
}

export default App
