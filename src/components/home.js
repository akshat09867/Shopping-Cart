import React from 'react'
import '../style/base.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="home">
      <header className="hero" role="banner" aria-label="Main promotional banner">
        <div className="hero-content">
          <h1 className="hero-title">ShopSmart — Great products, honest prices</h1>
          <p className="hero-sub">
            Discover top brands and everyday essentials across Electronics, Home, Fashion and more.
            Fast shipping · Secure checkout · Easy returns.
          </p>

          <div className="hero-cta">
            <Link to="/shop" className="btn btn-primary" aria-label="Browse the shop">
              Shop Now
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true" />
      </header>

      <section className="features" aria-labelledby="features-heading">
        <h2 id="features-heading">Why customers choose us</h2>
        <ul className="features-list">
          <li><strong>Best value</strong> — Competitive prices on thousands of curated items.</li>
          <li><strong>Fast delivery</strong> — Reliable shipping across India.</li>
          <li><strong>Secure checkout</strong> — Payments protected with industry-standard encryption.</li>
          <li><strong>Easy returns</strong> — Simple 30-day returns on most products.</li>
        </ul>
      </section>


      <section className="testimonials" aria-labelledby="testimonials-heading">
        <h2 id="testimonials-heading">What shoppers say</h2>
        <blockquote className="testimonial">
          “Great selection and speedy delivery — I found everything I needed at a fair price.”
          <footer>— Ananya</footer>
        </blockquote>
      </section>

      <footer className="home-footer" role="contentinfo">
        <Link to="/shop" className="btn btn-primary">Start shopping</Link>
        <Link to="/contact" className="link-secondary">Need help? Contact us</Link>
      </footer>
    </main>
  )
}
