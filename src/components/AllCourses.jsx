import React, { useEffect } from 'react';
import '../styles/allcourses.css'
import AOS from 'aos';

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

function AllCourses() {
    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
    return (
        <div className='container'>
        <div className="row flex-wrap d-flex justify-content-center align-items-center">
            {courses.map((item, index) => (
                 <div className="col-12 col-md-6 col-lg-6">
                  <div className="course-card">
                    <div className="course-card-header">
                      <div className="course-icon">
                        <img src={item.icon} alt="" className='w-100 fluid-img' />
                      </div>
                    </div>
                    <div className="course-card-body">
                      <ul className="list-group">
                        <li className="list-group-item">
                          <h4 className="heading-small text-light-green">{item.name}</h4>
                        </li>
                        <li className="list-group-item">
                        <p className="p-dark-large1 text-light-green"><i class="bi bi-person-fill fs-4"></i> Trainer</p>
                          <p className="p-dark-small text-white">{item.trainer}</p>
                        </li>
                        <li className="list-group-item">
                        <p className="p-dark-large1 text-light-green"> <i class="bi bi-alarm fs-4"></i> Duration</p>
                          <p className="p-dark-small text-white">{item.duration}</p>
                        </li>
                        <li className="list-group-item">
                          <p className="p-dark-large1 text-light-green"><i class="bi bi-camera-video-fill fs-4"></i> Training Mode</p>
                          <p className="p-dark-small text-white">Online and Offline</p>
                        </li>
                      <button className="btn-main-outline-light w-100 mb-2">Learn More <i class="bi bi-chevron-double-right"></i></button>
                      <button className="btn-main w-100 mb-2">Enroll This Course <i class="bi bi-chevron-double-right"></i></button>
                      </ul>
                    </div>
                  </div>
                 </div>
            ))}
          
        </div>
    </div>
    )
}

export default AllCourses;
