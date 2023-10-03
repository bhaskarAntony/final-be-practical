import React, { useEffect } from 'react'
import '../styles/companies.css'
import AOS from 'aos';


const companies = [
    {
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1200px-Wipro_Primary_Logo_Color_RGB.svg.png"
    },
    {
        image:"https://1000logos.net/wp-content/uploads/2021/05/Polaris-logo.png"
    },
    {
        image:"https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260"
    },
    {
        image:"https://www.topdevelopers.co/upload/202303010502471143887854.png"
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/commons/0/09/Data_Template_company_transparent_logo.png"
    },
    {
        image:"https://i.pinimg.com/736x/74/08/0d/74080d355e44b4dff7af55a935b36c67.jpg"
    },
    {
        image:"https://media.licdn.com/dms/image/C4D22AQHcWD8f_2ltyQ/feedshare-shrink_800/0/1663652422802?e=2147483647&v=beta&t=nWVjiBbYMDjsBE9RXrYCWUcBior_vlqUbkGWsV1cT4E"
    },
    {
        image:"https://media.licdn.com/dms/image/C4E0BAQGT_CemaUF-fg/company-logo_200_200/0/1519863535482?e=2147483647&v=beta&t=VbTzdvQ98bgq9msvIAcf8A2m6rTq46p8XAGDHF00cPw"
    },
    {
        image:"https://media.designrush.com/agencies/225561/conversions/AMBC-INC-logo-profile.jpg"
    },
    {
        image:"https://media.designrush.com/agencies/225561/conversions/AMBC-INC-logo-profile.jpg"
    },
    {
        image:"https://marmeto.com/cdn/shop/files/marmeto-logo.jpg?v=1653605388"
    },
    {
        image:"https://pbs.twimg.com/profile_images/913663235227885569/gEavJ00n_400x400.jpg"
    },
    {
        image:"https://eict.iitg.ac.in/association_support/115342388379ac77377b730d389fbef19b46ed.jpg"
    },
    {
        image:"https://image.pitchbook.com/0kDgEmPMZlWArEWCqHOGXTZAOhv1677526266637_200x200"
    },
    {
        image:"https://media.licdn.com/dms/image/C4E0BAQE98lWY1ZCuMg/company-logo_200_200/0/1607495034224?e=2147483647&v=beta&t=Q0XBw7AI0gU5YfvmuSSSOSPUrJMabDtErwcrQfSsfSI"
    },
    {
        image:"https://careator.com/wp-content/uploads/2022/07/Careator_logo.svg"
    },
    {
        image:"https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/prgexx5lq5wzvjknvxzm"
    },
    {
        image:"https://mir-s3-cdn-cf.behance.net/user/276/be0f30286813829.60dc76599302f.png"
    },
    {
        image:"https://smartfoodsafe.com/wp-content/uploads/2022/08/Group-217@2x.png"
    },
    {
        image:"https://media.licdn.com/dms/image/C510BAQHg_uDSW0sFFg/company-logo_200_200/0/1534253103494?e=2147483647&v=beta&t=pk_qqWsUmz9RuqOMiEvYMQGMUO2puSFVQAnfsm2J3Es"
    },
    {
        image:"https://images.yourstory.com/cs/images/companies/IdeaPoke-1642784006437.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff"
    }
]
function Companies() {
    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
  return (

    <section className='container-fluid main-company-container text-center'>
        <h3 className="banner-heading" data-aos="fade-up">Boost Your Career With Our Hiring Partners</h3>
      <p className="p-light-small" data-aos="fade-up">
        Get closer to your dream company <br />
        Our graduates are working with leading tech brands
      </p>
    <div className="companies container-fluid text-center">
      <div className="companies-brands-container container-fluid p-2">
        <div className="row">
          {companies.map((item, index) => (
            <div className="col-6 col-md-3 col-lg-2 p-2" key={index}>
              <div className="all-company-card" data-aos="flip-up">
                <img src={item.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Companies
