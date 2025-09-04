import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import eyeglassesImg from "./assets/eyeglasses.jpg";
import sunglassesImg from "./assets/sunglasses.jpg";
import lensesImg from "./assets/lenses.jpg";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<ComingSoon />} />
        <Route path="/eyeglasses" element={<Eyeglasses />} />
        <Route path="/sunglasses" element={<Sunglasses />} />
        <Route path="/contact-lenses" element={<ContactLenses />} />
      </Routes>
    </Router>
  );
}

function Home() {
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
        <Link to="/appointment">
          <button className="btn">Book an Appointment</button>
        </Link>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h3>About Us</h3>
        <p>
          Established in the year 2000 by our founder, Mr. Babu John, IRIN
          OPTICALS has been serving the community with dedication and care for
          over 25 years. With a strong legacy in providing premium eyewear and
          reliable eye care services, we take pride in combining modern
          technology with personalized customer service. From stylish frames to
          advanced eye testing, our mission has always been to bring clarity,
          confidence, and comfort to every customer who walks through our doors.
        </p>

        <div className="carousel">
          <button className="carousel-btn prev" onClick={prevImage}>
            ❮
          </button>
          <img src={images[index]} alt="About" className="carousel-img" />
          <button className="carousel-btn next" onClick={nextImage}>
            ❯
          </button>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="products">
        <h3>Our Products</h3>
        <div className="product-grid">
          <div className="product-card">
           <Link to="/eyeglasses" style={{ textDecoration: "none", color: "inherit" }}>
            <img src={eyeglassesImg} alt="Eyeglasses" />
            <h4>Eyeglasses</h4>
            <p>Trendy frames designed for both comfort and style.</p>
            </Link>
          </div>

          <div className="product-card">
            <Link to="/sunglasses" style={{ textDecoration: "none", color: "inherit" }}>
             <img src={sunglassesImg} alt="Sunglasses" />
             <h4>Sunglasses</h4>
             <p>Protect your eyes with fashionable UV-protected sunglasses.</p>
            </Link>
          </div>

          <div className="product-card">
              <Link to="/contact-lenses" style={{ textDecoration: "none", color: "inherit" }}>
               <img src={lensesImg} alt="Contact Lenses" />
                <h4>Contact Lenses</h4>
                <p>Clear vision and comfort with premium quality lenses.</p>
                </Link>
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
              Kacheripady, North Paravur
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

function ComingSoon() {
  return (
    <div className="coming-soon">
      <h2 style={{ color: "#ff7b00", fontSize: "2rem", marginBottom: "1rem" }}>
        🚧 This page will come in future
      </h2>
      <p style={{ marginBottom: "2rem", fontSize: "1.2rem" }}>
        Please try again later.
      </p>
      <Link to="/">
        <button className="btn">Back to Home</button>
      </Link>
    </div>
  );
}

function Eyeglasses() {
  const glasses = [
    { 
      name: "Classic Black Frame", 
      desc: "Elegant everyday wear with durable design.", 
      img: "/classic_blk_eyegls.jpg" 
    },
    { 
      name: "Round Vintage Glasses", 
      desc: "Retro-inspired style for a timeless look.", 
      img: "/round_vin.jpg" 
    },
    { 
      name: "Rimless Glasses", 
      desc: "Lightweight and minimalistic for modern appeal.", 
      img: "/rimless.jpg" 
    },
    { 
      name: "Blue Light Filter Glasses", 
      desc: "Protect your eyes during screen time.", 
      img: "/bluelight.jpg" 
    },
  ];

  return (
    <div className="eyeglasses-page">
      <h2 className="page-title">Our Eyeglasses Collection</h2>
      <div className="glasses-grid">
        {glasses.map((g, index) => (
          <div key={index} className="glass-card">
            <img src={g.img} alt={g.name} className="glass-img" />
            <h3>{g.name}</h3>
            <p>{g.desc}</p>
          </div>
        ))}
      </div>

      <Link to="/">
        <button className="btn">Back to Home</button>
      </Link>
    </div>
  );
}


function Sunglasses() {
  const sunglasses = [
    { 
      name: "Aviator Sunglasses", 
      desc: "Classic aviators with UV protection for everyday style.", 
      img: "/aviator.jpg" 
    },
    { 
      name: "Wayfarer Sunglasses", 
      desc: "Bold wayfarers for a modern, confident look.", 
      img: "/wayfarer.jpg" 
    },
    { 
      name: "Round Sunglasses", 
      desc: "Retro-inspired round frames with tinted lenses.", 
      img: "/round_sun.jpg" 
    },
    { 
      name: "Sports Sunglasses", 
      desc: "Durable and lightweight shades for active lifestyles.", 
      img: "/sports.jpg" 
    },
  ];

  return (
    <div className="eyeglasses-page">
      <h2 className="page-title">Our Sunglasses Collection</h2>
      <div className="glasses-grid">
        {sunglasses.map((s, index) => (
          <div key={index} className="glass-card">
            <img src={s.img} alt={s.name} className="glass-img" />
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>

      <Link to="/">
        <button className="btn">Back to Home</button>
      </Link>
    </div>
  );
}



function ContactLenses() {
  const lenses = [
    { 
      name: "Daily Disposable Lenses", 
      desc: "Convenience and hygiene with fresh lenses every day.", 
      img: "disposable.jpg" 
    },
    { 
      name: "Monthly Contact Lenses", 
      desc: "Durable and cost-effective for regular wear.", 
      img: "monthly_contact.jpg" 
    },
    { 
      name: "Colored Contact Lenses", 
      desc: "Change your look with vibrant, natural eye colors.", 
      img: "colored_contact.jpg" 
    },
    { 
      name: "Toric Lenses", 
      desc: "Special lenses designed for astigmatism correction.", 
      img: "toric.jpg" 
    },
  ];

  return (
    <div className="eyeglasses-page">
      <h2 className="page-title">Our Contact Lenses Collection</h2>
      <div className="glasses-grid">
        {lenses.map((l, index) => (
          <div key={index} className="glass-card">
            <img src={l.img} alt={l.name} className="glass-img" />
            <h3>{l.name}</h3>
            <p>{l.desc}</p>
          </div>
        ))}
      </div>

      <Link to="/">
        <button className="btn">Back to Home</button>
      </Link>
    </div>
  );
}
