import React, { useEffect, useState } from 'react'
import '../styles/webinar.css'
import { Carousel } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: itemsPerSlide,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000, // Change delay as needed
      prevArrow: <button className="slick-prev">Previous</button>, // Add previous arrow
      nextArrow: <button className="slick-next">Next</button>, // Add next arrow
    };
  
  



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
              <p onClick={toggleTruncate} className="read-more-button light-green-text">
                Read More
              </p>
            )}
          </div>
        ) : (
          <div>
            {text}
            <p onClick={toggleTruncate} className="read-less-button light-green-text">
              Read Less
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
  <>
          <h3 className="banner-heading mt-5" data-aos="fade-up">Pre Career Guidence program <span className="main-text" > <br /> From Top MNC's</span></h3>
    <section className='p-2 container py-5' id="webinar">
    <div className="container-fluid">
          <div className="row w-100 d-flex justify-conent-center">
          <Slider {...settings}>
          {webinar.map((item) => (
                <div className="col-12 col-md-6 col-lg-4 p-2">
              <div className="webinar-card bg-v5-green-700" data-aos="zoom-in-left">
                <div className="webinar-card-header p-2">
                        <img src={item.image} alt="" />
                </div>
                <div className="webinar-card-body p-2">
                  <p className="mt-2 p-light-small light-green-text">Conducted by</p>
                    <h3 className="heading-small text-white">{item.company}</h3>
                    <p className='mt-2 p-dark-small text-black'><ReadMore text={item.description} maxLength={50} /></p>
                </div>
              </div>
                </div>
            ))}
            </Slider>
           
              </div>
          </div>
    </section>
  </>
  )
}

export default Webinar
