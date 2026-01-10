import { NavLink, Outlet } from "react-router-dom";
import { SignOutButton } from "@clerk/clerk-react";

function AdminDashboard() {
  return (
    <div style={styles.wrapper}>
      {/* SIDEBAR */}
      <aside style={styles.sidebar}>
        <div>
          <h2 style={styles.logo}>PhotoStudio</h2>
          <p style={styles.subtitle}>Admin Panel</p>

          <nav style={styles.nav}>
            <NavLink
              to="gallery"
              style={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              📷 Gallery
            </NavLink>

            <NavLink
              to="events"
              style={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              🎉 Events
            </NavLink>
          </nav>
        </div>

        <SignOutButton>
          <button style={styles.logout}>Sign Out</button>
        </SignOutButton>
      </aside>

      {/* MAIN CONTENT */}
      <main style={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    minHeight: "100vh",
    background: "#f1f3f5",
    fontFamily: "Inter, sans-serif",
  },

  sidebar: {
    width: "260px",
    background: "linear-gradient(180deg, #0f0f0f, #1a1a1a)",
    color: "#fff",
    padding: "24px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "4px 0 20px rgba(0,0,0,0.2)",
  },

  logo: {
    margin: 0,
    textAlign: "center",
    fontSize: "22px",
    letterSpacing: "1px",
  },

  subtitle: {
    textAlign: "center",
    fontSize: "13px",
    color: "#aaa",
    marginBottom: "30px",
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  link: {
    textDecoration: "none",
    color: "#ddd",
    padding: "12px 16px",
    borderRadius: "8px",
    fontWeight: "500",
    transition: "all 0.2s ease",
    background: "transparent",
  },

  activeLink: {
    textDecoration: "none",
    color: "#fff",
    padding: "12px 16px",
    borderRadius: "8px",
    fontWeight: "600",
    background: "linear-gradient(90deg, #6a11cb, #2575fc)",
    boxShadow: "0 6px 15px rgba(37,117,252,0.4)",
  },

  logout: {
    marginTop: "20px",
    background: "#e63946",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background 0.2s ease",
  },

  content: {
    flex: 1,
    padding: "40px",
    background: "#fff",
    borderRadius: "20px 0 0 20px",
    boxShadow: "-6px 0 20px rgba(0,0,0,0.05)",
  },
};

export default AdminDashboard;
