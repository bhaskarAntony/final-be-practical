import React, { useEffect, useState } from 'react';
import '../styles/homehero.css';
import { Carousel } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Highlight from './Highlight';
import HeroRegister from './HeroRegister';
import codingimg from '../images/coding-img.svg';
import portfolio from '../images/portfolio.svg';
import resume from '../images/resume.svg';
import student2 from '../images/student2-img.svg';
import DialogModal from './DialogModel'; // Make sure the import matches your actual component filename

const home = [
  {
    heading: "High Paid Salaries & Continuous Career Growth",
    subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
    image: codingimg,
  },
  {
    heading: "High Paid Salaries & Continuous Career Growth",
    subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
    image: portfolio,
  },
  {
    heading: "High Paid Salaries & Continuous Career Growth",
    subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
    image: resume,
  },
  {
    heading: "High Paid Salaries & Continuous Career Growth",
    subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
    image: student2,
  },
];

function HomeHero() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleCarouselHover = () => {
    setPaused(true);
  };

  const handleCarouselLeave = () => {
    setPaused(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setIndex((prevIndex) => (prevIndex + 1) % numberOfSlides);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [paused]);

  const numberOfSlides = home.length;

  return (
    <section className='hero container-fluid p-1 py-2'>
      <div className="custom-carousel">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          id="vertical-carousel"
          onMouseEnter={handleCarouselHover}
          onMouseLeave={handleCarouselLeave}
        >
          {home.map((item, index) => (
            <Carousel.Item key={index}>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                  <div className="hero-text p-lg-5 p-md-3 p-2">
                    <h1 className="heading text-black text-900 text-start">{item.heading}</h1>
                    <p className="text-900 text-black heading-subtitle my-4">{item.subheading}</p>
                    <div className="carousel-footer w-100">
                      <button className='btn-main-outline-dark m-2 hero-btn py-3'>Join For Free <i class="bi bi-chevron-double-right"></i></button>
                      <button className='btn-main m-2 hero-btn py-3' onClick={openModal}>Book Your Free Master Classes <i class="bi bi-chevron-double-right"></i></button>
                    </div>
                    <Highlight />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                  <div className="hero-image p-3">
                    <img src={item.image} alt="" className="w-100 img-fluid" />
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="custom-indicators">
          {Array.from({ length: home.length }).map((_, i) => (
            <div
              key={i}
              className={`indicator ${index === i ? 'active' : ''}`}
              onClick={() => handleSelect(i)}
            ></div>
          ))}
        </div>
      </div>
      <HeroRegister />
      <DialogModal
        show={showModal}
        onHide={handleClose}
      />
    </section>
  );
}

export default HomeHero;
