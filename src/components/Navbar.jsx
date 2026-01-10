import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const resize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
      {/* INLINE CSS */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 1000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 22px;
          background: #000;
          color: white;
          border-bottom: 1px solid #222;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .menu {
          display: flex;
          gap: 22px;
          align-items: center;
          transition: all 0.35s ease;
        }

        .menu.mobile {
          position: absolute;
          top: 65px;
          left: 0;
          width: 100%;
          background: #000;
          flex-direction: column;
          transform: translateY(-20px);
          opacity: 0;
          pointer-events: none;
        }

        .menu.mobile.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
          padding: 20px 0;
          gap: 18px;
          border-top: 1px solid #222;
        }

        .link {
          position: relative;
          text-decoration: none;
          color: #fff;
          font-size: 1rem;
          letter-spacing: 0.5px;
          transition: color 0.3s ease;
        }

        .link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 0%;
          height: 2px;
          background: #fff;
          transition: width 0.3s ease;
        }

        .link:hover::after,
        .link.active::after {
          width: 100%;
        }

        .link.active {
          color: #f5f5f5;
        }

        .admin {
          background: white;
          color: black;
          padding: 7px 18px;
          border-radius: 20px;
          font-weight: bold;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .admin:hover {
          background: #eaeaea;
          transform: scale(1.05);
        }

        .hamburger {
          font-size: 1.9rem;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .hamburger.open {
          transform: rotate(90deg);
        }
      `}</style>

      <nav className="nav">
        <div className="logo">📸 RevuPhotography</div>

        {isMobile && (
          <div
            className={`hamburger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            ☰
          </div>
        )}

        <div className={`menu ${isMobile ? "mobile" : ""} ${open ? "open" : ""}`}>
          <NavItem to="/" label="Home" location={location} setOpen={setOpen} />
          <NavItem to="/about" label="About" location={location} setOpen={setOpen} />
          <NavItem to="/gallery" label="Gallery" location={location} setOpen={setOpen} />
          <NavItem to="/events" label="Services" location={location} setOpen={setOpen} />
          <NavItem to="/contact" label="Contact" location={location} setOpen={setOpen} />

          <Link to="/admin" className="admin" onClick={() => setOpen(false)}>
            Admin
          </Link>
        </div>
      </nav>
    </>
  );
}

function NavItem({ to, label, location, setOpen }) {
  return (
    <Link
      to={to}
      className={`link ${location.pathname === to ? "active" : ""}`}
      onClick={() => setOpen(false)}
    >
      {label}
    </Link>
  );
}
