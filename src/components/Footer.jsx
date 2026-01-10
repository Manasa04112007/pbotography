import logo from "../assets/logo.png"; // adjust path if needed

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          {/* LEFT LOGO */}
          <div className="footer-logo">
            <img src={logo} alt="PhotoStudio Logo" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="footer-right">

            <div className="footer-section">
              <h3>PhotoStudio</h3>
              <p>
                We provide professional photography services including weddings,
                events, portraits, and commercial shoots with creative excellence.
              </p>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>Wedding Photography</li>
                <li>Portrait Photography</li>
                <li>Event Coverage</li>
                <li>Product Photography</li>
              </ul>
            </div>

            {/* Quick Links and Contact Us side by side */}
            <div className="footer-links-contact">
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/gallery">Gallery</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Contact Us</h4>
                <p>📍 Beluru, Karnataka</p>
                <p>📞 +91 9448126791</p>
                <p>✉️ revunage73542@gmail.com</p>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          © 2026 PhotoStudio. All Rights Reserved.
        </div>
      </footer>

      {/* CSS IN SAME FILE */}
      <style>{`
        .footer {
          background: #111;
          color: #fff;
          margin-top: 60px;
          font-family: Arial, sans-serif;
        }

        .footer-container {
          max-width: 1200px;
          margin: auto;
          padding: 40px 20px;
          display: flex;
          align-items: flex-start;
          gap: 40px;
        }

        .footer-logo {
          min-width: 160px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .footer-logo img {
          width: 140px;
          height: auto;
          object-fit: contain;
        }

        .footer-right {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
          flex: 1;
        }

        .footer-links-contact {
          display: flex;
          flex-direction: row;
          gap: 30px;
        }

        .footer-section h3,
        .footer-section h4 {
          margin-bottom: 12px;
        }

        .footer-section p,
        .footer-section li {
          font-size: 14px;
          line-height: 1.6;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
        }

        .footer-section li {
          margin-bottom: 8px;
          cursor: pointer;
        }

        .footer-section a {
          color: #fff;
          text-decoration: none;
        }

        .footer-section a:hover {
          color: #f4c10f;
        }

        .footer-section li:hover {
          color: #f4c10f;
        }

        .footer-bottom {
          background: #000;
          text-align: center;
          padding: 15px;
          font-size: 13px;
          border-top: 1px solid #333;
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
          }

          .footer-logo {
            margin-bottom: 20px;
          }

          .footer-links-contact {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}

export default Footer;