import '../style/base.css';
import { Link } from 'react-router-dom';

export default function Contact() {

  return (
    <main className="contact">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We're here to help! Get in touch with our team.</p>
      </header>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>support@shopsmart.com</p>
                <p>We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">📞</div>
              <div>
                <h3>Phone</h3>
                <p>+1 (555) 123-SHOP</p>
                <p>Mon-Fri, 9AM-6PM IST</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">💬</div>
              <div>
                <h3>Live Chat</h3>
                <p>Available 24/7</p>
                <p>Get instant help from our team</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Office</h3>
                <p>123 Commerce Street</p>
                <p>Bangalore, KA 560001, India</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <footer className="contact-footer">
        <Link to="/" className="btn btn-secondary">
          Back to Home
        </Link>
      </footer>
    </main>
  );
}