import React from 'react';
import { Modal, Button, Form, Col, Row, Image } from 'react-bootstrap';
import '../styles/dialogmodel.css'

function DialogModel({ show, handleClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    // You can access form data using state variables or refs
    // Example: const formData = { name, email, password };
    // Send formData to your API or perform registration logic
    // Close the modal after successful registration
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered className='modal'>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
     <div className="container-fluid dialog-modal w-100">
      <div className="row">
      <div className="col-12 col-md-6 col-lg-6">
          <div className="modal-form">
            <form>
            <div className="form-group mt-2">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control p-3" placeholder='Enter Your Name' />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control p-3" placeholder='Enter Your Email' />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="name" className="form-label">Mobile Number</label>
              <input type="text" className="form-control p-3" placeholder='Ex:- +91-000-0000-000' />
            </div>
            <div className="form-group mt-4">
              <button className="btn-main w-100">Register Now <i class="bi bi-chevron-double-right"></i></button>
            </div>
            <hr />
            <p className="w-100 text-center text-white">Or</p>
            <div className="register-icons form-group mt-2">
             <div className="register-icon">
             <i class="bi bi-google"></i>
             </div>
             <div className="register-icon">
             <i class="bi bi-facebook"></i>
             </div>
             <div className="register-icon">
             <i class="bi bi-linkedin"></i>
             </div>
            </div>
            </form>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <div className="modal-image">
            <img src="https://tykit.rometheme.pro/teracloud/wp-content/uploads/sites/134/2023/09/great-suggestion-came-to-girl-mind-studio-portrai.png" alt="" className='w-100 img-fluid' />
          </div>
        </div>
      
      </div>
     </div>
    </Modal>
  );
}

export default DialogModel;
