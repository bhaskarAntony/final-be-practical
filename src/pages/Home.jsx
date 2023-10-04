import React, { useEffect, useState } from 'react'
import HomeHero from '../components/HomeHero'
import Training from '../components/Training'
import DialogModel from '../components/DialogModel'
import Webinar from '../components/Webinar';
import ChatWithus from '../components/ChatWithus';
import Companies from '../components/Companies';
import YoutubeVideos from '../components/YoutubeVideos'
import Certificate from '../components/Certificate';
import Feedback from '../components/Feedback';
import Adwantages from '../components/Adwantages';
import Skills from '../components/Skills';
import StudentsPlaced from '../components/StudentsPlaced';
import Courses from '../components/Courses';

function Home() {
      // Model open logic
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowModal(true);
    }, 1 * 60 * 1000); // 5 minutes

    return () => clearInterval(interval);
  }, []);
  return (
    <section className='home'>
         <DialogModel show={showModal} handleClose={handleCloseModal} />
        <HomeHero/>
        <Courses/>
        <Training/>
        <Companies/>
        <Webinar/>
        <Adwantages/>
        <Skills/>
        <YoutubeVideos/>
        <Certificate/>
        <ChatWithus/>
        <StudentsPlaced/>
        <Feedback/>
    </section>
  )
}

export default Home
