
import React from 'react'
import './Contact.css'
import email from '../../assets/envelope.svg'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <h1>Contact Me</h1>
      <div className="contact-content">
        <div className="email-section">
          <img src={email} alt="Email" className="email-icon" />
          <div className="email-info">
            <h3>School</h3>
            <p>david.vu@mail.utoronto.ca</p>
          </div>
        </div>
        <div className="email-section">
          <img src={email} alt="Email" className="email-icon" />
          <div className="email-info">
            <h3>Personal</h3>
            <p>davidvu1021@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact