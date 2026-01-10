import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ke13wi7",      // ✅ Service ID
        "template_n135uck",     // ✅ Template ID
        {
          name: form.name,       // MUST match {{name}}
          email: form.email,     // MUST match {{email}}
          message: form.message  // MUST match {{message}}
        },
        "wywFz66f0KkFQyUcP"      // ✅ Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Failed to send message. Check EmailJS setup.");
          setLoading(false);
        }
      );
  };

  return (
    <>
      <section className="contact-page">
        <div className="contact-container">
          <h2 className="title">Contact Us</h2>
          <p className="subtitle">
            Let’s connect and capture something beautiful together.
          </p>

          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h3>📍 Get in Touch</h3>
              <p>Email: revunage73542@gmail.com</p>
              <p>Phone: +91 9448126791</p>
              <p>Location: Beluru, Karnataka </p>
            </div>

            {/* Contact Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
              ></textarea>

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Styles */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: "Segoe UI", sans-serif;
          background: #f5f5f5;
        }

        .contact-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 16px;
        }

        .contact-container {
          width: 100%;
          max-width: 1100px;
        }

        .title {
          text-align: center;
          font-size: 2.6rem;
          margin-bottom: 10px;
        }

        .subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 50px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .contact-info {
          background: #111;
          color: #fff;
          padding: 40px;
          border-radius: 18px;
        }

        .contact-form {
          background: #fff;
          padding: 40px;
          border-radius: 18px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-form input,
        .contact-form textarea {
          padding: 14px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 1rem;
        }

        .contact-form button {
          background: #ff9900;
          color: white;
          border: none;
          padding: 14px;
          border-radius: 30px;
          cursor: pointer;
          font-size: 1rem;
        }

        .contact-form button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .title {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
}

export default Contact;
