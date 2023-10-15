import React, { useState } from 'react';
import '../styles/faq.css'
import BookDemoBtn from '../Extra/BookDemoBtn';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What courses do you offer?",
      answer: "We offer a wide range of courses, including web development, data science, and digital marketing.",
    },
    {
      question: "How can I enroll in a course?",
      answer: "To enroll in a course, simply visit our 'Courses' page and select the course you're interested in. Then, follow the enrollment instructions provided there.",
    },
    {
      question: "Do you offer financial aid or scholarships?",
      answer: "Yes, we offer financial aid and scholarships to eligible students. Please check our 'Scholarships' page for more information.",
    },
  ];

  const handleAccordionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse the active FAQ item
    } else {
      setActiveIndex(index); // Expand the clicked FAQ item
    }
  };

  return (
    <div className="container-fluid bg-light py-2">
      <h2 className='banner-heading'>Frequently Asked Questions</h2>
      <div className="accordion container" id="faqAccordion">
        {faqData.map((faq, index) => (
          <div className="card course-faq" key={index}>
            <div className="course-faq-question" id={`heading${index}`}>
              <h4 className="mb-0">
                <div
                  className={`d-flex w-100 align-items-center ${activeIndex === index ? '' : 'collapsed'}`}
                  type="button"
                  onClick={() => handleAccordionClick(index)}
                >
                  <i className={`bi ${activeIndex === index ? 'bi-dash fs-2' : 'bi-plus fs-2'}`}></i>
                  {faq.question}
                </div>
              </h4>
            </div>

            <div
              id={`collapse${index}`}
              className={`collapse ${activeIndex === index ? 'show' : ''}`}
              aria-labelledby={`heading${index}`}
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <BookDemoBtn text={"Ask More Questions?"}/>
      </div>
    </div>
  );
};

export default FaqSection;
