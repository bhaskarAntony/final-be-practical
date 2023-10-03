import React from 'react'
import '../styles/chatwithus.css'

function ChatWithus() {
  return (
    <section className='container my-5 p-2 p-md-3 p-lg-5'>
    <div className="chat-with-us p-3">
    <div className="row">
        <div className="col-12 col-md-7 col-lg-9">
            <h1 className="heading">Have any further <br />questions?</h1>
            <button className='btn-main mt-5 mb-3'>Chat With Us</button>
        </div>

        <div className="col-12 col-md-5 col-lg-3">
        <img src="https://cdn-icons-png.flaticon.com/128/7304/7304641.png" alt="" className='img-fluid w-100' />
        </div>
      </div>
    </div>
    </section>
  )
}

export default ChatWithus
