import "./Footer.css"
import LogoRiham from "../assets/LogoRiham.png"

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer id="contact" className="footer" style={{ color: '#C8B794' }}>
            <div className="footer-content">
                <div className="footer-section about">
                    <div style={{ width: '100px' }}>
                        <img src={LogoRiham} alt="" style={{ width: '100%' }} />
                    </div>
                    <p>
                        Preserving traditional craftsmanship while embracing the digital age. Quality handcrafted products delivered
                        to your doorstep.
                    </p>
                </div>

                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                   
                    <p>
                        <i className="icon-phone"></i> +212 629066520
                    </p>
                    <p>
                        <i className="icon-email"></i> salon-riham@gmail.com
                    </p>
                </div>

                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>
                            <a href="#home">Home</a>
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
