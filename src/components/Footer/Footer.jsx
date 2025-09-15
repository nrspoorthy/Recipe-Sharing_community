import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <footer>
      
      <div className='footer-imgs'>
        <img src="https://foodily.vercel.app/assets/images/gallery/1.jpg" className='img-footer' alt="gallery1"/>
        <img src="https://foodily.vercel.app/assets/images/gallery/2.jpg" className='img-footer' alt="gallery2"/>
        <img src="https://foodily.vercel.app/assets/images/gallery/3.jpg" className='img-footer' alt="gallery3"/>
        <img src="https://foodily.vercel.app/assets/images/gallery/4.jpg" className='img-footer' alt="gallery4"/>
        <img src="https://foodily.vercel.app/assets/images/gallery/5.jpg" className='img-footer' alt="gallery5"/>
      </div>

      
      <div className='main-bg'>
        <img src="https://foodily.vercel.app/assets/images/resource/footer-pattern-1.png" className='footer-flower-left' alt="flower left"/>
        <img src="https://foodily.vercel.app/assets/images/resource/footer-pattern-2.png" className='footer-flower-right' alt="flower right"/>

        
        <div className="footer-content">
          <div className="footer-col">
            <h3>Contact Us</h3>
            <p>Kapil Kavuri Hub, 5th floor, Nanakramguda,Hyderabad</p>
            <p>nrspoorthy@gmail.com</p>
            <p>(123) 4567 89000</p>
          </div>

          <div className="footer-col">
            <h3>Useful Links</h3>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Blogs</li>
              <li>Terms Of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Follow Us Now</h3>
            <ul>
              <li>
                <a href="https://instagram.com/spoooorthi._.19" target="_blank">Instagram</a>
            </li>

              <li>
                <a href='https://www.linkedin.com/in/nrspoorthy/' target="_blank">Linkdin</a>
            </li>
              <li>
                <a href='https://github.com/nrspoorthy' target="_blank">Github</a>
            </li>
              
            </ul>
          </div>

          <div className="footer-col">
            <h3>Subscribe</h3>
            <div className="subscribe-box">
              <input type="email" placeholder="Your Email"/>
              <button>Subscribe Now</button>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="footer-bottom">
          © 2024 foodily All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
