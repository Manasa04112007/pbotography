import { useState, useEffect } from "react";
import { useUser, useClerk, SignOutButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function AdminUpload() {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();

  const adminEmail = "manasamithunb@gmail.com";

  const [isAdmin, setIsAdmin] = useState(null); // null = loading, true = admin, false = non-admin
  const [activeTab, setActiveTab] = useState("gallery"); // "gallery" or "event"

  // ---------- UPLOAD STATES ----------
  const [galleryImage, setGalleryImage] = useState(null);
  const [eventImage, setEventImage] = useState(null);
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  // ---------- VERIFY ADMIN ----------
  useEffect(() => {
    if (!isLoaded) return;

    if (!user) return;

    const email = user.primaryEmailAddress?.emailAddress;

    if (email === adminEmail) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
      alert("❌ Sorry, you are not permitted to access this page.");
      signOut().then(() => navigate("/admin")); // redirect to sign-in
    }
  }, [isLoaded, user, signOut, navigate]);

  // ---------- LOADING ----------
  if (!isLoaded || isAdmin === null) {
    return <h2 style={{ textAlign: "center", marginTop: "100px" }}>Loading...</h2>;
  }

  if (!isAdmin) {
    return null;
  }

  // ---------- UPLOAD FUNCTIONS ----------
  const uploadGallery = async () => {
    if (!galleryImage) return alert("Select a gallery image");

    const formData = new FormData();
    formData.append("image", galleryImage);

    try {
      setLoading(true);
      await API.post("api/gallery/upload", formData);
      alert("✅ Gallery image uploaded");
      setGalleryImage(null);
    } catch {
      alert("❌ Upload failed");
    } finally {
      setLoading(false);
    }
  };

  const uploadEvent = async () => {
    if (!eventImage || !eventName) return alert("Fill all fields");

    const formData = new FormData();
    formData.append("image", eventImage);
    formData.append("eventName", eventName);
    formData.append("description", description);

    try {
      setLoading(true);
      await API.post("api/events/upload", formData);
      alert("✅ Event uploaded");
      setEventImage(null);
      setEventName("");
      setDescription("");
    } catch {
      alert("❌ Upload failed");
    } finally {
      setLoading(false);
    }
  };

  // ---------- JSX ----------
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>📸 Admin Dashboard</h1>
        <SignOutButton>
          <button style={styles.logout}>Sign Out</button>
        </SignOutButton>
      </div>

      {/* TAB NAVIGATION */}
      <div style={styles.tabs}>
        <button
          style={activeTab === "gallery" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("gallery")}
        >
          Gallery Upload
        </button>
        <button
          style={activeTab === "event" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("event")}
        >
          Event Upload
        </button>
      </div>

      {/* ---------- GALLERY TAB ---------- */}
      {activeTab === "gallery" && (
        <div style={styles.card}>
          <h3>Upload Gallery Image</h3>
          <input type="file" onChange={(e) => setGalleryImage(e.target.files[0])} />
          <button onClick={uploadGallery} disabled={loading}>
            {loading ? "Uploading..." : "Upload Gallery"}
          </button>
        </div>
      )}

      {/* ---------- EVENT TAB ---------- */}
      {activeTab === "event" && (
        <div style={styles.card}>
          <h3>Upload Event</h3>
          <input
            type="text"
            placeholder="Event Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
          <textarea
            placeholder="Event Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input type="file" onChange={(e) => setEventImage(e.target.files[0])} />
          <button onClick={uploadEvent} disabled={loading}>
            {loading ? "Uploading..." : "Upload Event"}
          </button>
        </div>
      )}
    </div>
  );
}

// ---------- STYLES ----------
const styles = {
  container: {
    padding: "40px",
    maxWidth: "900px",
    margin: "auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logout: {
    background: "#e63946",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  tabs: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  },
  tab: {
    padding: "8px 16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    background: "#f0f0f0",
    cursor: "pointer",
  },
  activeTab: {
    padding: "8px 16px",
    borderRadius: "6px",
    border: "1px solid #111",
    background: "#111",
    color: "#fff",
    cursor: "pointer",
  },
  card: {
    marginTop: "30px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
};

export default AdminUpload;
