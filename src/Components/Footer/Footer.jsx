import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            
            
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">Thank You!</p>
            <a href="https://www.linkedin.com/in/alok-kumar-684587210/" target="_blank" rel="noopener noreferrer" className='link'>
                <p>Connect with me on Linkedin!</p>
                </a>

        </div>
    </div>
  )
}

export default Footer