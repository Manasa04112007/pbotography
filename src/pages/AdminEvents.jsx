import { useEffect, useState } from "react";
import API from "../services/api";

function AdminEvents() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [eventName, setEventName] = useState("");
  const [eventImage, setEventImage] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  // FETCH EVENTS
  const fetchEvents = async () => {
    try {
      const res = await API.get("/api/events");
      setEvents(res.data);
    } catch (err) {
      console.error("Fetch events error:", err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // CREATE OR UPDATE
  const saveEvent = async () => {
    if (!eventName) {
      alert("Event name is required");
      return;
    }

    if (!editingId && !eventImage) {
      alert("Image is required for new event");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("eventName", eventName);
      if (eventImage) {
        formData.append("image", eventImage);
      }

      if (editingId) {
        // UPDATE
        await API.put(`/api/events/${editingId}`, formData);
        alert("Event updated successfully");
      } else {
        // CREATE
        await API.post("/api/events/upload", formData);
        alert("Event uploaded successfully");
      }

      resetForm();
      fetchEvents();
    } catch (err) {
      console.error("Save event error:", err);
      alert("Error saving event");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEventName("");
    setEventImage(null);
    setEditingId(null);
  };

  const startEdit = (event) => {
    setEditingId(event._id);
    setEventName(event.eventName);
    setEventImage(null);
  };

  const deleteEvent = async (id) => {
    if (!window.confirm("Delete this event?")) return;
    try {
      await API.delete(`/api/events/${id}`);
      alert("Event deleted successfully");
      fetchEvents();
    } catch (err) {
      console.error("Delete event error:", err);
      alert("Error deleting event");
    }
  };

  return (
    <div style={styles.container}>
      <h2>📅 Admin Events</h2>

      {/* FORM */}
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          style={styles.input}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setEventImage(e.target.files[0])}
          style={styles.input}
        />

        <button
          onClick={saveEvent}
          disabled={loading}
          style={styles.submitButton}
        >
          {loading ? "Processing..." : editingId ? "Update Event" : "Upload Event"}
        </button>

        {editingId && (
          <button onClick={resetForm} style={styles.cancelButton}>
            Cancel Edit
          </button>
        )}
      </div>

      {/* GRID */}
      <div style={styles.grid}>
        {events.map((event) => (
          <div key={event._id} style={styles.card}>
            <img
              src={event.imageUrl}
              alt={event.eventName}
              style={styles.image}
              onClick={() => setSelectedEvent(event)}
            />
            <h3>{event.eventName}</h3>
            <div style={styles.actions}>
              <button
                onClick={() => startEdit(event)}
                style={styles.editBtn}
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => deleteEvent(event._id)}
                style={styles.deleteBtn}
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FULL IMAGE MODAL */}
      {selectedEvent && (
        <div style={styles.modal} onClick={() => setSelectedEvent(null)}>
          <img
            src={selectedEvent.imageUrl}
            alt="Full view"
            style={styles.fullImage}
            onClick={(e) => e.stopPropagation()}
          />
          <h3 style={{ color: "#fff" }}>{selectedEvent.eventName}</h3>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { padding: "30px", maxWidth: "1200px", margin: "auto" },
  form: {
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "30px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "14px",
  },
  submitButton: {
    padding: "10px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  cancelButton: {
    padding: "10px",
    background: "#6c757d",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
    gap: "20px",
  },
  card: {
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
    paddingBottom: "15px",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    cursor: "pointer",
  },
  actions: {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",
  },
  editBtn: {
    padding: "6px 12px",
    background: "#ffc107",
    color: "#000",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  deleteBtn: {
    padding: "6px 12px",
    background: "#ff6b6b",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  modal: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.9)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  fullImage: {
    maxWidth: "90%",
    maxHeight: "80%",
    borderRadius: "12px",
  },
};

export default AdminEvents;