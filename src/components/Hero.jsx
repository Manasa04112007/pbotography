import { useEffect, useState } from "react";

import img1 from "../assets/hero1.jpg";
import img2 from "../assets/hero2.jpg";
import img3 from "../assets/hero3.jpg";
import img4 from "../assets/hero4.jpg";

function Hero() {
  const images = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          {/* LEFT CONTENT */}
          <div className="hero-left">
            <span className="tag">PHOTOGRAPHY STUDIO</span>
            <h1>Capturing Moments That Matter</h1>

            <div className="services">
              <p>Wedding Photography</p>
              <p>Event Photography</p>
              <p>Portrait Photography</p>
              <p>Lifestyle & Creative Shoots</p>
            </div>

            {/* SMALL STATS */}
            <div className="stats">
              <div className="stat-card">
                <h2>200+</h2>
                <span>Clients</span>
              </div>

              <div className="stat-card">
                <h2>12+</h2>
                <span>Years</span>
              </div>

              <div className="stat-card">
                <h2>4.9 ⭐</h2>
                <span>Ratings</span>
              </div>

              <div className="stat-card">
                <h2>350+</h2>
                <span>Projects</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE SLIDER */}
          <div className="hero-right">
            <img src={images[current]} alt="Photography work" />
          </div>
        </div>
      </section>

      {/* CSS */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: "Segoe UI", sans-serif;
          background: #f5f5f5;
        }

        .container {
          max-width: 1200px;
          margin: auto;
          padding: 0 16px;
        }

        .hero {
          padding: 90px 0;
          background: linear-gradient(135deg, #111, #222);
          color: white;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
        }

        /* LEFT */
        .hero-left h1 {
          font-size: 2.8rem;
          margin: 18px 0;
        }

        .tag {
          font-size: 0.8rem;
          letter-spacing: 2px;
          color: #ff9900;
          font-weight: bold;
        }

        .services p {
          margin: 4px 0;
          color: #ddd;
          font-size: 1rem;
        }

        /* SMALL STATS */
        .stats {
          margin-top: 30px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.08);
          padding: 16px 10px;
          border-radius: 14px;
          text-align: center;
          backdrop-filter: blur(6px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.4);
        }

        .stat-card h2 {
          font-size: 1.6rem;
          margin-bottom: 2px;
          color: #ff9900;
        }

        .stat-card span {
          font-size: 0.75rem;
          color: #ccc;
          letter-spacing: 1px;
        }

        /* RIGHT SLIDER */
        .hero-right {
          height: 420px;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0,0,0,0.5);
        }

        .hero-right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: fade 1s ease-in-out;
        }

        @keyframes fade {
          from { opacity: 0.4; }
          to { opacity: 1; }
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero-right {
            height: 300px;
          }
        }

        @media (max-width: 600px) {
          .stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </>
  );
}

export default Hero;
