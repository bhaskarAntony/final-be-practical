import React, { useEffect, useState } from 'react'
import '../styles/homehero.css'
import { Carousel } from 'react-bootstrap';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import Highlight from './Highlight';
import HeroRegister from './HeroRegister';

const home = [
    {
      heading: "High Paid Salaries & Continuous Career Growth",
      subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
      image: "https://tykit.rometheme.pro/teracloud/wp-content/uploads/sites/134/2023/09/great-suggestion-came-to-girl-mind-studio-portrai.png",
    },
    {
      heading: "High Paid Salaries & Continuous Career Growth",
      subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
      image: "https://tykit.rometheme.pro/teracloud/wp-content/uploads/sites/134/2023/09/great-suggestion-came-to-girl-mind-studio-portrai.png",
    },
    {
      heading: "High Paid Salaries & Continuous Career Growth",
      subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
      image: "https://tykit.rometheme.pro/teracloud/wp-content/uploads/sites/134/2023/09/great-suggestion-came-to-girl-mind-studio-portrai.png",
    },
    {
      heading: "High Paid Salaries & Continuous Career Growth",
      subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
      image: "https://tykit.rometheme.pro/teracloud/wp-content/uploads/sites/134/2023/09/great-suggestion-came-to-girl-mind-studio-portrai.png",
    }
]
function HomeHero() {
    useEffect(() => {
        AOS.init();
      }, []);
    
      // Model open logic
      const [showModal, setShowModal] = useState(true);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setShowModal(true);
        }, 1 * 60 * 1000); // 5 minutes
    
        return () => clearInterval(interval);
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
        }, 3000); // Adjust the autoplay interval (in milliseconds) as needed
    
        return () => {
          clearInterval(interval);
        };
      }, [paused]);
    
      const numberOfSlides = 3;
  return (
    <section className='hero container-fluid'>
                <div className="custom-carousel">
          <Carousel activeIndex={index} onSelect={handleSelect}>
          {
  home.map((item, index) => (
    <Carousel.Item key={index}>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-7">
            <div className="hero-text p-lg-5 p-md-3 p-2">
              <h1 className="heading text-white">{item.heading}</h1>
              <p className="text-white heading-subtitle my-4">{item.subheading}</p>
              <ul>
                <li>
                    <p className="p-light-small text-white"><span className='fw-bold text-main'>Expert</span> expert trainers</p>
                </li>
                <li>
                    <p className="p-light-small text-white"><span className='fw-bold text-main'>Job</span> oriented syllabus</p>
                </li>
                <li>
                    <p className="p-light-small text-white"><span className='fw-bold text-main'>Flexible</span> timings</p>
                </li>
                <li>
                    <p className="p-light-small text-white"><span className='fw-bold text-main'>Industry</span> recognized certificate</p>
                </li>
              </ul>
            <div className="carousel-footer w-100">
              <button className='btn-main-outline-light m-2 w-md-100'>Join For Free<i class="bi bi-arrow-right"></i></button>
              <button className='btn-main m-2 w-md-100'>Book Your Free Master Classes <i class="bi bi-arrow-right"></i></button>
            </div>
            <Highlight/>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5">
        <div className="hero-image">
            <img src={item.image} alt="" className="w-100 img-fluid" />
        </div>
      </div>
      </div>
    </Carousel.Item>
  ))
}

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
        <HeroRegister/>
    </section>
  )
}

export default HomeHero
