import React, { useEffect } from 'react';
import '../styles/allcourses.css'
// import AOS from 'aos';

var courses = [
  {
      id:1,
      name: "Complete Fullstack",
      tag:"Trending",
      duration: "4.5 Months",
      trainer: "...",
      languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
      ratedStudents: "465",
      rating:"4.5",
      icon: "https://cdn-icons-png.flaticon.com/128/7991/7991055.png",
      image: "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
      id:2,
      name: "MERN  Fullstack",
      tag:"Trending",
      duration: "4.5 Months",
      trainer: "...",
      languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
      ratedStudents: "465",
      rating:"4.5",
      icon: "https://cdn-icons-png.flaticon.com/128/1183/1183669.png",
      image: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
      id:4,
      name: "Cloud Oops",
      duration: "4.5 Months",
      trainer: "...",
      languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
      ratedStudents: "465",
      rating:"4.5",
      icon: "https://cdn-icons-png.flaticon.com/128/3305/3305673.png",
      image: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
      id:5,
      name: "Data Science",
      duration: "4.5 Months",
      trainer: "...",
      languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
      ratedStudents: "465",
      rating:"4.5",
      icon: "https://cdn-icons-png.flaticon.com/128/2756/2756778.png",
      image: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
]

function TrendingCourses() {
  // useEffect(() => {
  //   AOS.init(); // Initialize AOS
  // }, []);
    return (
      <div className='container'>
      <div className="row flex-wrap d-flex justify-content-center align-items-center">
          {courses.map((item, index) => (
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 mb-3 d-flex justify-content-center">
                <div className="card course-card border" data-aos="zoom-in">
                  <div className="row">
                      <div className="col-12 cl-md-5 col-lg-4">
                      <div className={`course-card-header p-2 d-flex align-items-end justify-content-between course-card-header${item.id}`}>
                      <div className="icon">
                  <img src={item.icon} alt="" className='w-100 img-fluid' />
                </div>
                  <div className="curve">

                  </div>
                  <div className="blur">
                 
                  </div>
                     {/* <div className="highlighter p-2">
                      <p className="p-1 px-3 text-white bg-danger rounded-5"><i class="bi bi-fire"></i>{item.tag}</p>
                     <div className="course-icons">
                       <div className="share">
                       <i class="bi bi-share-fill"></i>
                      </div>
                      <div className="fav">
                      <i class="bi bi-heart"></i>
                      </div>
                     </div>
                    </div> */}
                </div>

                      </div>
                      <div className="col-12 col-md-7 col-lg-8">
               <div className="course-card-body p-2">
                  <h4 className='text-warning fw-bold'>{item.name}</h4>
                  <hr />
                  {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit nesciunt, et eveniet, similique obcaecati delectus quae iusto impedit iste aspernatur architecto unde molestias eius quas in atque dignissimos ipsum odio?</p> */}
                  <div className="row">
                  <div className="col-6 p-2 text-center d-flex align-items-center">
                      <i class="bi bi-clock  mx-2 fs-4"></i>
                      <p>{item.duration}</p>
                      </div>
                      <div className="col-6 p-2 text-center d-flex align-items-center">
                      <i class="bi bi-camera-video  mx-2 fs-4"></i>
                      <p>Online and offline classes</p>
                      </div>
                      <div className="col-6 p-2 text-center d-flex align-items-center">
                      <i class="bi bi-mortarboard  mx-2 fs-4"></i>
                      <p>Job Assurance</p>
                      </div>
                      <div className="col-6 p-2 text-center d-flex align-items-center">
                      <i class="bi bi-person-lines-fill mx-2 fs-4"></i>
                      <p>HR activities</p>
                      </div>
                  </div>
                  
                  {/* <p><small>{item.trainer}</small></p> */}
                  
                </div>
                <div className="course-footer p-2 m-0">
                
                 <div className="carousel-footer">
                  <button className="bg-warning p-2 w-100 rounded-2 text-black btn fs-5 fw-bold">enroll Now</button>
                 </div>
                 
                </div>
               </div>
                  </div>
               
              
                {/* <div className="thumb-layout">
                  <img src={item.icon} alt="" />
                  <h4>Enroll Now This {item.name}</h4>
                  <p>Build Your Careere With {item.name}</p>

                <div className="thumb-btns">
                  <button className="enroll-btn">Enroll</button>
                  <button className="enquire-btn">Enquire</button>
                </div>
                </div> */}
                </div>
            </div>
          ))}
        
      </div>
  </div>
    )
}

export default TrendingCourses;
