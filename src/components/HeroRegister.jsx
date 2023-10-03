import React from 'react'

function HeroRegister() {
  return (
    <div className="register-container-home bg-white  container-fluid">
    <div className="register align-items-center rounded-1 p-3">
      <div className="p-2 rounded-2 py-3 border-0 bg-tranparent">
        <div className="card-header-text text-center w-100">
          <span className=" banner-heading fs-3 text-center mb-3">Register For Free Demo Session</span>
        </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-5 col-lg-5">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="form-group">
                <input type="text" placeholder='Name' className='form-control p-3' />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="form-group">
              <input type="email" placeholder='Email' className='form-control p-3' />
             </div> 
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-5 col-lg-5">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
             <div className="form-group">
              <input type="number" placeholder='Phone' className='form-control p-3' />
             </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
             <div className="form-group form-group-last">
              <select className='form-control p-3'>
                <option value="mern">MERN</option>
                <option value="mern">Python Fullstack</option>
                <option value="mern">Java Fullstack</option>
                <option value="mern">Data Science</option>
                <option value="mern">Cloud Computing</option>
              </select>
             </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-2 col-lg-2">
          <button className='btn-main w-100'>Register</button>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default HeroRegister
