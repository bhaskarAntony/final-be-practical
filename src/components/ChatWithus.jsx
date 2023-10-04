import React from 'react'
import '../styles/chatwithus.css'
import callimage from '../images/chat-with-us.svg'

function ChatWithus() {
  return (
    <section className='container my-5 p-2 p-md-3 p-lg-5'>
    <div className="chat-with-us p-3">
    <div className="row">
        <div className="col-8">
            <h1 className="fs-2">Have any further <br />questions?</h1>
            <button className='btn-main-outline-dark mt-5 mb-3'>Chat With Us <i class="bi bi-chevron-double-right"></i></button>
        </div>

        <div className="col-4">
        <img src={callimage} alt="" className='img-fluid w-100' />
        </div>
      </div>
    </div>
    </section>
  )
}

export default ChatWithus
