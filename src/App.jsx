import React, { useState, useEffect } from "react";
import eyeglassesImg from "./assets/eyeglasses.jpg";
import sunglassesImg from "./assets/sunglasses.jpg";
import lensesImg from "./assets/lenses.jpg";
import "./App.css";

export default function App() {

const [index, setIndex] = useState(0);

const images = [
  "/pic1.jpg",
  "/pic2.jpg",
  "/pic3.jpg",
  "/pic4.jpg",
  "/pic5.jpg",
  "/pic6.jpg",
  "/pic7.jpg",
  "/pic8.jpg",
  "/pic9.jpg",
];

const prevImage = () => {
  setIndex((index - 1 + images.length) % images.length);
};

const nextImage = () => {
  setIndex((index + 1) % images.length);
};

// Auto-slide every 4s
useEffect(() => {
  const timer = setInterval(() => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, 4000);
  return () => clearInterval(timer);
}, [images.length]);


  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">IRIN OPTICALS</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <h2>Your Vision, Our Priority</h2>
        <p>
          Discover premium eyewear, eye checkups, and personalized care at IRIN
          OPTICALS.
        </p>
        <button className="btn">Book an Appointment</button>
      </section>

      {/* About */}
      <section id="about" className="about">
  <h3>About Us</h3>
  <p>
    Established in the year 2000 by our founder, Mr. Babu John, IRIN OPTICALS has been 
    serving the community with dedication and care for over 25 years. With a strong legacy 
    in providing premium eyewear and reliable eye care services, we take pride in combining 
    modern technology with personalized customer service. From stylish frames to advanced 
    eye testing, our mission has always been to bring clarity, confidence, and comfort to 
    every customer who walks through our doors.
  </p>

  {/* Image Carousel */}
  <div className="carousel">
  <button className="carousel-btn prev" onClick={prevImage}>❮</button>
  <img src={images[index]} alt="About" className="carousel-img" />
  <button className="carousel-btn next" onClick={nextImage}>❯</button>
</div>

</section>


      {/* Products */}
      <section id="products" className="products">
  <h3>Our Products</h3>
  <div className="product-grid">
    <div className="product-card">
      <img src={eyeglassesImg} alt="Eyeglasses" />
      <h4>Eyeglasses</h4>
      <p>Trendy frames designed for both comfort and style.</p>
    </div>
    <div className="product-card">
      <img src={sunglassesImg} alt="Sunglasses" />
      <h4>Sunglasses</h4>
      <p>Protect your eyes with fashionable UV-protected sunglasses.</p>
    </div>
    <div className="product-card">
      <img src={lensesImg} alt="Contact Lenses" />
      <h4>Contact Lenses</h4>
      <p>Clear vision and comfort with premium quality lenses.</p>
    </div>
  </div>
</section>


      {/* Contact */}
<section id="contact" className="contact">
  <h3>Contact Us</h3>
  <div className="contact-grid">
    <div className="contact-info">
      <p>
        📍 Opposite Government Hospital <br />
           Kacheripady, North Paravur <br/>
           Ernakulam.  pin:683513
      </p>
      <p>📞 +91 9544112681</p>
      <p>✉ info@irinopticals.com</p>
      <p>🕑 Mon - Sat: 9am - 8pm</p>
    </div>
    <iframe
      className="map"
      src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_LINK"
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
</section>


      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} IRIN OPTICALS. All rights reserved.</p>
      </footer>
    </div>
  );
}
