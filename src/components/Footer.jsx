import "./Footer.css"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="footer" style={{color:'#C8B794'}}>
      <div className="footer-content">
        <div className="footer-section about">
          <h3 style={{color:'#C8B794'}}>Salon Riham</h3>
          <p>
            Preserving traditional craftsmanship while embracing the digital age. Quality handcrafted products delivered
            to your doorstep.
          </p>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>
            <i className="icon-location"></i> 123 Artisan Street, Craftsville
          </p>
          <p>
            <i className="icon-phone"></i> (555) 123-4567
          </p>
          <p>
            <i className="icon-email"></i> info@craftsmancorner.com
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for new products and special offers.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Salon Riham. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
