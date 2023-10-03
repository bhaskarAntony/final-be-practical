import React, { useEffect, useState } from 'react'
import '../styles/webinar.css'
import { Carousel } from 'react-bootstrap';
import AOS from 'aos';

const webinar = [
  {
    company:"POLARIS INC",
    image:"https://almablog-media.s3.ap-south-1.amazonaws.com/medium_Thumbnail_169_2_da48aa788a.png",
    description:"Interacted with Mr. Shrikanth Rao an IT Expert Sharing his Thoughts and Answered students FAQ's"
  },
  {
    company:"TCS",
    image:"https://almablog-media.s3.ap-south-1.amazonaws.com/medium_Thumbnail_169_2_da48aa788a.png",
    description:"Interacted with Mr. Shrikanth Rao an IT Expert Sharing his Thoughts and Answered students FAQ's"
  },
  {
    company:"SPERIDIAN technology",
    image:"https://almablog-media.s3.ap-south-1.amazonaws.com/medium_Thumbnail_169_2_da48aa788a.png",
    description:"Interacted with Mr. Shrikanth Rao an IT Expert Sharing his Thoughts and Answered students FAQ's"
  },
  {
    company:"digisprint",
    image:"https://almablog-media.s3.ap-south-1.amazonaws.com/medium_Thumbnail_169_2_da48aa788a.png",
    description:"Interacted with Mr. Shrikanth Rao an IT Expert Sharing his Thoughts and Answered students FAQ's"
  },
  {
    company:"netserve technology",
    image:"https://almablog-media.s3.ap-south-1.amazonaws.com/medium_Thumbnail_169_2_da48aa788a.png",
    description:"Interacted with Mr. Shrikanth Rao an IT Expert Sharing his Thoughts and Answered students FAQ's"
  },
  {
    company:"smart foods safe",
    image:"https://almablog-media.s3.ap-south-1.amazonaws.com/medium_Thumbnail_169_2_da48aa788a.png",
    description:"Interacted with Mr. Shrikanth Rao an IT Expert Sharing his Thoughts and Answered students FAQ's"
  }
]
function Webinar() {
    
    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
    const [itemsPerSlide, setItemsPerSlide] = useState(3);
    const [carouselInterval, setCarouselInterval] = useState(1500);
    const [carouselPaused, setCarouselPaused] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        // Adjust the number of items per slide based on the screen width
        if (window.innerWidth < 800) {
          setItemsPerSlide(1);
          setCarouselInterval(1000);
        }
        else if(window.innerWidth < 1260) {
            setItemsPerSlide(2);
            setCarouselInterval(1500);
          } else {
          setItemsPerSlide(3);
          setCarouselInterval(1500);
        }
      };
  
      window.addEventListener('resize', handleResize);
      handleResize();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const handleCarouselHover = () => {
      // Pause the Carousel when the user hovers over it
      setCarouselPaused(true);
    };
  
    const handleCarouselLeave = () => {
      // Resume the Carousel when the user stops hovering
      setCarouselPaused(false);
    };
  

  const carouselItems = webinar.reduce((accumulator, current, index) => {
    if (index % itemsPerSlide === 0) {
      accumulator.push([]);
    }
    accumulator[accumulator.length - 1].push(current);
    return accumulator;
  }, []);


  function ReadMore({ text, maxLength }) {
    const [isTruncated, setIsTruncated] = useState(true);
  
    const toggleTruncate = () => {
      setIsTruncated(!isTruncated);
    };
  
    return (
      <div>
        {isTruncated ? (
          <div>
            {text.slice(0, maxLength)}
            {text.length > maxLength && (
              <p onClick={toggleTruncate} className="read-more-button text-danger">
                Read More
              </p>
            )}
          </div>
        ) : (
          <div>
            {text}
            <p onClick={toggleTruncate} className="read-less-button text-danger">
              Read Less
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
  <>
          <h3 className="banner-heading" data-aos="fade-up">PRE-CAREER <br /> GUIDENCE PROGRAM FROM <span className="main-text" > <br /> FROM TOP MNC'S</span></h3>
    <section className='bg-light p-2' id="webinar">

      <div className="students-placed">
      <Carousel
      interval={carouselInterval}
      >
      {carouselItems.map((slideItems, index) => (
        <Carousel.Item key={index}
          onMouseEnter={handleCarouselHover}
          onMouseLeave={handleCarouselLeave}
        >
          <div className="d-flex flex-wrap  p-3 container-fluid">
          <div className="row w-100">

            {slideItems.map((item) => (
                <div className="col-12 col-md-6 col-lg-4">
              <div className="webinar-card" data-aos="zoom-in-left">
                <div className="webinar-card-header p-2">
                        <img src={item.image} alt="" />
                </div>
                <div className="webinar-card-body p-2">
                    <div className="webinar-heading">
                  <h4 className='heading-small'><span className="webinar-heading-left">ONLINE</span><span className="webinar-heading-right">WEBINAR</span></h4>
                    </div>
                  <p className="mt-2 p-light-small">Conducted by</p>
                    <h3 className="heading-small">{item.company}</h3>
                    <p className='mt-2 p-dark-small'><ReadMore text={item.description} maxLength={50} /></p>
                </div>
              </div>
                </div>
            ))}
              </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    <div className="custom-indicators">
        </div>
      </div>
      <div className="text-center py-3">
        <button className="btn-main-outline-dark m-1">join For free Demo Classes</button>
        <button className="btn-main m-1">join For free Demo Classes</button>
      </div>
    </section>
  </>
  )
}

export default Webinar
