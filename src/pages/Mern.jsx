import React from 'react'
import '../styles/coursepage.css'
import HeroRegister from '../components/HeroRegister'
import Companies from '../components/Companies'
import Adwantages from '../components/Adwantages'
import YoutubeVideos from '../components/YoutubeVideos'
import Feedback from '../components/Feedback'
import Languages from '../components/Languages'
import CourseCard from '../components/CourseCard'
import Module from '../components/Module'

var languages =[
    {
        language:"HTML",
        image:"https://cdn-icons-png.flaticon.com/128/1051/1051277.png"
    },
    {
        language:"CSS",
        image:"https://cdn-icons-png.flaticon.com/128/732/732190.png"
    },
    {
        language:"Bootstrap",
        image:"https://cdn-icons-png.flaticon.com/128/5968/5968672.png"
    },
    {
        language:"Javascript",
        image:"https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
    },
    {
        language:"ReactJS",
        image:"https://cdn-icons-png.flaticon.com/128/753/753244.png"
    },
    {
        language:"NodeJS",
        image:"https://cdn-icons-png.flaticon.com/128/5968/5968322.png"
    },
    {
        language:"ExpressJS",
        image:"https://cdn-icons-png.flaticon.com/128/91/91397.png"
    },
    {
        language:"MongoDB",
        image:"https://cdn-icons-png.flaticon.com/128/2906/2906274.png"
    }
]
const Mern_module = [
    {
      module: 'Web Wonders',
      about: 'Answer to Question 1 goes here.',
      description:"You will start with HTML, CSS, and JavaScript and then move on to learning data structures such as arrays, linked lists, and trees. You will also learn how to implement these data structures in JavaScript."
    },
    {
      module: 'Javascript Jungle',
      about: 'Answer to Question 1 goes here.',
      description:"You will deepen your understanding of JavaScript and explore advanced concepts like object-oriented programming, closures, and asynchronous programming."
    },
    {
      module: 'Web Wonders',
      about: 'Answer to Question 1 goes here.',
      description:""
    },
    {
      module: 'Web Wonders',
      about: 'Answer to Question 1 goes here.',
      description:""
    },
    {
      module: 'Web Wonders',
      about: 'Answer to Question 1 goes here.',
      description:""
    }
    // Add more FAQ items as needed
  ];
var card = [
    {
        image:"https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
        course:"MERN Fullstack",
        instructor:"Adarsh",
        duration:"4.5 Months",
        enrolled:"100+ Students",
        mode:"Online And Offline"
    }
]
function Mern() {
  return (
    <section>
    <div className="course-hero container-fluid py-3">
        <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
                <div className="course-hero-text p-lg-5 p-md-2 p-2">
                    <h1 className="heading text-white">Certificate & Placements in  Mern FullStack Devolopment</h1>
                    <p className="heading-subtitle text-white">Learn with Real Work-Ex. Join the best product-based <br /> companies with <span className='text-green fw-bold'>guaranteed placement.</span></p>
                    <div className="batch  d-flex align-items-center"> 
                        <i class="bi bi-calendar3 fs-4 text-green"></i>
                            <p className='p-dark-small text-green mx-2 mt-2'>New Batch Starts At 20 Sept 2023</p>
                        </div>
                        <div className="course-btn mt-5">
                            <button className="btn-main-outline-light p-4 hero-btn">Enroll This Course <i class="bi bi-chevron-double-right"></i></button>
                            <button className="btn-main p-4 mx-2 hero-btn">Book Free Demo Classes <i class="bi bi-chevron-double-right"></i></button>
                        </div>
                        <div className="course-highlight mt-5">
                            <div className="row">
                                <div className="col-12 col-md-8 col-lg-8">
                                    <div className="course-highlight-left bg-light-green rounded-4 text-center p-2 mb-2">
                                        <h3 className="heading-small py-3">
                                        Placement Guarantee
                                        </h3>
                                        <div className="devider"></div>
                                        <div className="row">
                                            <div className="col-6">
                                                <small>DREAM JOBS</small>
                                                <h4 class="heading-small">6-15 LPA</h4>
                                            </div>
                                            <div className="col-6">
                                                <small>SUPER DREAM JOBS</small>
                                                <h4 className="heading-small">15-40 LPA</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 col-lg-4">
                                    <div className="course-highlight-right bg-light-green rounded-4 p-2 text-center mb-2">
                                    <small>SUPER DREAM JOBS</small>
                                                <p className="heading-small">15-40 LPA</p>
                                                <div className="devider"></div>

                                                <small>SUPER DREAM JOBS</small>
                                                <h4 className="heading-small">15-40 LPA</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
                <div className="course-hero-video">

                <div className="video-container">
                        <img src="https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div className="play-icon">
                        <i class="bi bi-play-fill fs-4"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <HeroRegister/>
    </div>
    <h3 className="banner-heading" data-aos="fade-up">What Programming Languages <br /> You will Learn?</h3>
      <section className='main-lan-container container bg-dark-v5-green py-2' id="languages">
            <div className="lan-inner-container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-7">
                        <Languages languages={languages}/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5">
                        <CourseCard card={card}/>
                    </div>
                </div>
            </div>
      </section>
    <Companies/>
    <Module modules={Mern_module}/>
    <Adwantages/>
    <YoutubeVideos/>
    <Feedback/>
    </section>
  )
}

export default Mern
