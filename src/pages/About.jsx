function About() {
  return (
    <>
      {/* HERO WITH FLOATING ELEMENTS */}
      <section className="about-hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">EST. 2017</div>
            <h1 className="hero-title">
              Crafting <span>Timeless</span> Memories
            </h1>
            <p className="hero-subtitle">
              Professional photography that captures the soul of your most precious moments. 
              8+ years of storytelling through the lens.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-value">100+</div>
                <div className="stat-label">Weddings Captured</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">200+</div>
                <div className="stat-label">Events Covered</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">1K+</div>
                <div className="stat-label">Satisfied Clients</div>
              </div>
            </div>
          </div>
        </div>
        <div className="floating-elements">
          <div className="float-el el1"></div>
          <div className="float-el el2"></div>
          <div className="float-el el3"></div>
          <div className="float-el el4"></div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-text">
              <h2>Our Philosophy</h2>
              <p className="mission-lead">
                We don't just take photos. We preserve emotions, capture stories, 
                and create heirlooms that will be cherished for generations.
              </p>
              <div className="mission-points">
                <div className="mission-point">
                  <div className="point-icon">✦</div>
                  <div>
                    <h4>Authentic Moments</h4>
                    <p>Candid photography that reveals genuine emotion</p>
                  </div>
                </div>
                <div className="mission-point">
                  <div className="point-icon">✦</div>
                  <div>
                    <h4>Cinematic Quality</h4>
                    <p>Hollywood-grade color grading and composition</p>
                  </div>
                </div>
                <div className="mission-point">
                  <div className="point-icon">✦</div>
                  <div>
                    <h4>Timeless Delivery</h4>
                    <p>Archival quality prints and digital collections</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mission-visual">
              
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES HIGHLIGHTS */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Specialized Services</h2>
            <p>Expert coverage for every occasion and vision</p>
          </div>
          <div className="services-grid">
            <div className="service-card premium">
              <div className="card-header">
                <span className="card-icon">👰</span>
                <span className="card-category">PREMIUM</span>
              </div>
              <h3>Wedding Collections</h3>
              <p>Complete coverage from getting ready to grand exit. Cinematic storytelling with second shooter support.</p>
              <div className="card-footer">
                <span>Starting at $3500</span>
              </div>
            </div>
            <div className="service-card">
              <div className="card-header">
                <span className="card-icon">🎭</span>
              </div>
              <h3>Event Coverage</h3>
              <p>Corporate galas, birthdays, product launches. Discreet professional documentation.</p>
            </div>
            <div className="service-card">
              <div className="card-header">
                <span className="card-icon">👤</span>
              </div>
              <h3>Portrait Sessions</h3>
              <p>Personal branding, family portraits, headshots. Studio and location options available.</p>
            </div>
            <div className="service-card">
              <div className="card-header">
                <span className="card-icon">🏛️</span>
              </div>
              <h3>Commercial</h3>
              <p>Product photography, architecture, lifestyle for brands and businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="workflow-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Process</h2>
            <p>Precision photography from concept to delivery</p>
          </div>
          <div className="workflow-container">
            <div className="workflow-line"></div>
            <div className="workflow-steps">
              <div className="workflow-step active">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h4>Discovery</h4>
                  <p>Deep dive into your vision, style preferences, and event details</p>
                </div>
              </div>
              <div className="workflow-step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h4>Creative Direction</h4>
                  <p>Custom mood boards, shot lists, and creative planning</p>
                </div>
              </div>
              <div className="workflow-step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h4>Production</h4>
                  <p>Flawless execution with professional gear and backup systems</p>
                </div>
              </div>
              <div className="workflow-step">
                <div className="step-number">04</div>
                <div className="step-content">
                  <h4>Masterpiece Delivery</h4>
                  <p>Hand-crafted editing with multiple delivery options</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: #fafafa;
          color: #1a1a1a;
          line-height: 1.6;
          overflow-x: hidden;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* HERO SECTION */
        .about-hero {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(ellipse 80% 50% at 20% 40%, rgba(0,0,0,0.03) 0%, transparent 50%),
            radial-gradient(ellipse 60% 30% at 80% 80%, rgba(0,0,0,0.02) 0%, transparent 50%);
          animation: bgShift 20s ease-in-out infinite;
        }

        @keyframes bgShift {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(180deg); }
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.95) 100%);
        }

        .hero-content {
          max-width: 800px;
          position: relative;
          z-index: 3;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(0,0,0,0.05);
          backdrop-filter: blur(20px);
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 2px;
          border: 1px solid rgba(0,0,0,0.1);
          margin-bottom: 32px;
          animation: badgeFloat 6s ease-in-out infinite;
          color: #333;
        }

        @keyframes badgeFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .hero-title {
          font-size: clamp(3.5rem, 8vw, 6rem);
          font-weight: 900;
          line-height: 0.9;
          margin-bottom: 32px;
          background: linear-gradient(135deg, #1a1a1a 0%, #333 50%, #1a1a1a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -2px;
        }

        .hero-title span {
          background: linear-gradient(135deg, #1a1a1a 0%, #000 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          max-width: 650px;
          margin-bottom: 64px;
          opacity: 0.9;
          font-weight: 300;
          letter-spacing: -0.5px;
          color: #333;
        }

        .hero-stats {
          display: flex;
          gap: 80px;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
        }

        .stat-value {
          font-size: 3rem;
          font-weight: 900;
          line-height: 1;
          display: block;
          background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 0.9rem;
          color: rgba(0,0,0,0.7);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          font-weight: 500;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 2;
        }

        .float-el {
          position: absolute;
          background: rgba(0,0,0,0.03);
          border-radius: 50%;
          backdrop-filter: blur(10px);
          animation: float 20s infinite linear;
        }

        .el1 { width: 120px; height: 120px; top: 20%; left: 10%; animation-delay: 0s; }
        .el2 { width: 80px; height: 80px; top: 60%; right: 15%; animation-delay: -5s; }
        .el3 { width: 60px; height: 60px; top: 80%; left: 20%; animation-delay: -10s; }
        .el4 { width: 100px; height: 100px; top: 30%; right: 25%; animation-delay: -15s; }

        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(360deg); }
        }

        /* MISSION */
        .mission-section {
          padding: 160px 0;
          background: rgba(0,0,0,0.02);
          position: relative;
        }

        .mission-grid {
          display: grid;
          grid-template-columns: 1fr 500px;
          gap: 120px;
          align-items: center;
        }

        .mission-text h2 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 40px;
          background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .mission-lead {
          font-size: 1.25rem;
          max-width: 500px;
          margin-bottom: 60px;
          opacity: 0.9;
          font-weight: 300;
          line-height: 1.7;
          color: #333;
        }

        .mission-points {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .mission-point {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }

        .point-icon {
          font-size: 1.5rem;
          color: #1a1a1a;
          font-weight: 900;
          margin-top: 4px;
          flex-shrink: 0;
        }

        .mission-point h4 {
          font-size: 1.2rem;
          margin-bottom: 8px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .mission-point p {
          color: rgba(0,0,0,0.8);
          margin: 0;
          font-size: 0.95rem;
        }

        .mission-visual {
          position: relative;
        }

        .visual-shapes {
          position: relative;
          height: 400px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.01) 100%);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(0,0,0,0.1);
        }

        .visual-shapes::before,
        .visual-shapes::after {
          content: '';
          position: absolute;
          background: rgba(0,0,0,0.03);
          border-radius: 50%;
        }

        .visual-shapes::before {
          width: 200px;
          height: 200px;
          top: -50px;
          right: -50px;
        }

        .visual-shapes::after {
          width: 150px;
          height: 150px;
          bottom: -30px;
          left: -30px;
        }

        /* SERVICES */
        .services-section {
          padding: 160px 0;
          background: #f5f5f5;
        }

        .section-header {
          text-align: center;
          margin-bottom: 100px;
        }

        .section-header h2 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 24px;
          background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-header p {
          font-size: 1.2rem;
          color: rgba(0,0,0,0.8);
          max-width: 600px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
        }

        .service-card {
          padding: 60px 40px;
          border-radius: 24px;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(0,0,0,0.1);
          transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, transparent, rgba(0,0,0,0.3), transparent);
          transform: scaleX(0);
          transition: transform 0.6s ease;
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-card.premium {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%);
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }

        .service-card:hover {
          transform: translateY(-20px);
          box-shadow: 0 50px 100px rgba(0,0,0,0.2);
          border-color: rgba(0,0,0,0.2);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }

        .card-icon {
          font-size: 2.5rem;
          transition: all 0.4s ease;
        }

        .service-card:hover .card-icon {
          transform: scale(1.2) rotate(15deg);
        }

        .card-category {
          background: rgba(0,0,0,0.05);
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 1px;
          color: #333;
        }

        .service-card h3 {
          font-size: 1.6rem;
          margin-bottom: 24px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .service-card p {
          color: rgba(0,0,0,0.8);
          margin-bottom: 0;
          line-height: 1.7;
        }

        .card-footer {
          margin-top: 32px;
          padding-top: 32px;
          border-top: 1px solid rgba(0,0,0,0.1);
          font-size: 0.95rem;
          opacity: 0.9;
          color: #333;
        }

        /* WORKFLOW */
        .workflow-section {
          padding: 160px 0;
          background: rgba(0,0,0,0.01);
        }

        .workflow-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }

        .workflow-line {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(0,0,0,0.2), transparent);
          z-index: 1;
        }

        .workflow-steps {
          display: flex;
          gap: 40px;
          justify-content: center;
          position: relative;
          z-index: 2;
        }

        .workflow-step {
          flex: 1;
          max-width: 220px;
          text-align: center;
          padding: 40px 20px;
          background: rgba(255,255,255,0.6);
          border-radius: 20px;
          border: 1px solid rgba(0,0,0,0.1);
          transition: all 0.4s ease;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .workflow-step.active {
          background: rgba(255,255,255,0.9);
          border-color: rgba(0,0,0,0.2);
          transform: scale(1.05);
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
        }

        .step-number {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
          color: #fafafa;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          font-weight: 800;
          margin: 0 auto 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .workflow-step h4 {
          font-size: 1.15rem;
          margin-bottom: 16px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .workflow-step p {
          color: rgba(0,0,0,0.7);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .mission-grid {
            grid-template-columns: 1fr;
            gap: 80px;
            text-align: center;
          }

          .workflow-steps {
            flex-direction: column;
            align-items: center;
          }

          .workflow-line {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .hero-stats {
            gap: 40px;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .stat-value {
            font-size: 2.5rem;
          }

          .hero-title {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}

export default About;
