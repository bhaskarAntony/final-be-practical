import React from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Mern from './pages/Mern'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      {/* <Mern/> */}
      <Footer/>
    </div>
  )
}

export default App
