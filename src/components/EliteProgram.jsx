import React from 'react'
import '../styles/eliteProgram.css'

const eliteProgram = [
    {
        title:"Refund",
        content:"If not placed 50% of course fee will be given back"
    },
    {
        title:"DSA & DSA (Exclusive Problems)",
        content:"Will be providing weekly twice"
    },
    {
        title:"Softskills",
        content:"Soft skill refer to the personal attributes and qualities that enable effective communication."
    },
    {
        title:"Internship",
        content:"Internship is a short-term work experience that provides practical training and exposure."
    },
    {
        title:"Placement Assistance",
        content:"Unlimited Interview's"
    },
    {
        title:"Add On's",
        content:"AWS Basics, DevOps tools, Jenkins, Git (Starting with Python)"
    },
]
function EliteProgram() {
  return (
    <section className='elite-progarm container py-5'>
        <h1 className="banner-heading text-white">What is Elite Program?</h1>
      <div className="row">
        {
            eliteProgram.map((item, index)=>(
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="elite-program-card">
                        <h1 className="card-heading light-green-text text-900"><i class="bi bi-stars text-main"></i> {item.title}</h1>
                        <p className="p-light-small text-white">{item.content}</p>
                    </div>
                 </div>
            ))
        }
      </div>
      <div className="text-center mt-5">
        <butoon className="btn-main">Book Your Free Master Classes</butoon>
      </div>
    </section>
  )
}

export default EliteProgram
