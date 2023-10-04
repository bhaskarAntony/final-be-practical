import React, { useEffect } from 'react';
import '../styles/languages.css';
import AOS from 'aos';

function Languages(props) {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <section className='languages p-2 container-fluid rounded-2'>
      <div className="languages-items">
        <div className="row">
          {props.languages.map((item, index) => (
            <div className="col-6 col-md-4 col-lg-4" key={index}>
              <div className="language-card bg-dark-green" data-aos="zoom-in">
                <div className="language-card-header">
                  <img src={item.image} alt="" />
                </div>
                <div className="language-card-body">
                  <h4 className='text-light-green'>{item.language}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Languages;
