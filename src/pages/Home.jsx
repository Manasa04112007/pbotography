import Hero from "../components/Hero";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Hero />

      {/* WHY CHOOSE US */}
      <section className="home-section">
        <div className="container">
          <span className="section-tag">WHY CHOOSE US</span>
          <h2 className="section-title">Turning Moments Into Memories</h2>
          <p className="section-subtitle">
            We capture emotions, details, and stories with artistic excellence
            and professional precision.
          </p>

          <div className="cards">
            <div className="card">
              <h3>📷 Expert Photography</h3>
              <p>
                Years of experience in weddings, events, and lifestyle shoots.
              </p>
            </div>

            <div className="card">
              <h3>✨ Premium Quality</h3>
              <p>
                High-end equipment and professional editing for stunning results.
              </p>
            </div>

            <div className="card">
              <h3>🤍 Trusted by Clients</h3>
              <p>
                Hundreds of happy clients who cherish their captured moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container">
          <h2>Let’s Capture Your Story</h2>
          <p>Reach out to us and let’s plan something beautiful together.</p>

          <Link to="/contact" className="cta-btn">
            Contact Us
          </Link>
        </div>
      </section>

      {/* INLINE CSS */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          overflow-x: hidden;
          font-family: "Segoe UI", sans-serif;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: auto;
          padding: 0 16px;
        }

        /* WHY CHOOSE US */
        .home-section {
          padding: 90px 0;
          background: #fafafa;
          text-align: center;
        }

        .section-tag {
          font-size: 0.85rem;
          letter-spacing: 2px;
          color: #ff9900;
          font-weight: bold;
        }

        .section-title {
          font-size: 2.6rem;
          margin: 15px 0;
        }

        .section-subtitle {
          color: #666;
          max-width: 600px;
          margin: 0 auto 50px;
          line-height: 1.6;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .card {
          background: white;
          padding: 30px;
          border-radius: 18px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.08);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
        }

        .card h3 {
          margin-bottom: 10px;
        }

        /* CTA */
        .cta-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #111, #333);
          color: white;
          text-align: center;
        }

        .cta-section h2 {
          font-size: 2.4rem;
          margin-bottom: 15px;
        }

        .cta-section p {
          margin-bottom: 30px;
          color: #ddd;
        }

        .cta-btn {
          background: #ff9900;
          color: white;
          padding: 14px 40px;
          border-radius: 30px;
          font-size: 1rem;
          text-decoration: none;
          display: inline-block;
          transition: background 0.3s, transform 0.3s;
        }

        .cta-btn:hover {
          background: #e68a00;
          transform: translateY(-3px);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .cards {
            grid-template-columns: 1fr;
          }

          .cta-section h2 {
            font-size: 1.8rem;
          }
        }

        img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </>
  );
}

export default Home;
