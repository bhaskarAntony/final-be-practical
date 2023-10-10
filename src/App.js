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
import ElitePage from './pages/ElitePage'
import RegistrationPage from './components/RegistrationPage'
import BookDemo from './components/BookDemo'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { useRef } from 'react'

function App() {
  const tawkMessengerRef = useRef();

const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
};
const onLoad = () => {
  console.log('onLoad works!');
};
  return (
    <div>
       <TawkMessengerReact
                propertyId="https://tawk.to/chat/6524d9286fcfe87d54b8416a/1hcbv0iqn"
                widgetId="default"
                onLoad={onLoad}
                />
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
        <Route path='/elite' element={<ElitePage/>}/>
        <Route path='/register' element={<RegistrationPage/>}/>
        <Route path='/book-demo' element={<BookDemo/>}/>
        </Routes>
        </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
