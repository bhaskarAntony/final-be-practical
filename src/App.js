import React from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Mern from './pages/Mern'
import Footer from './components/Footer'
import { BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Python from './pages/Python'
import DataScience from './pages/DataScience'
import CloudOops from './pages/CloudOops'
import FullStack from './pages/FullStack'
import Java from './pages/Java'
import DigitalMarketing from './pages/DigitalMarketing'
import Gallery from './pages/Gallery'
import Events from './components/Events'
import Blogs from './components/Blogs'
import ContactPage from './components/ContactPage'
import About from './components/About'

function App() {
  return (
    <div>
      <Header/>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course-fullstack' element={<FullStack/>}/>
        <Route path='/course-mern' element={<Mern/>}/>
        <Route path='/course-python' element={<Python/>}/>
        <Route path='/course-java' element={<Java/>}/>
        <Route path='/course-data-science' element={<DataScience/>}/>
        <Route path='/course-digital-marketing' element={<DigitalMarketing/>}/>
        <Route path='/course-cloud-computing' element={<CloudOops/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/contacts' element={<ContactPage/>}/>
        <Route path='/about' element={<About/>}/>
        </Routes>
        </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
