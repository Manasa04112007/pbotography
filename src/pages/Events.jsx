import { useEffect, useState } from "react";
import API from "../services/api";

function Events() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    API.get("api/events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={styles.container}>
      <h2> Services </h2>

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
            <p>{event.description}</p>
          </div>
        ))}
      </div>

      {/* FULL IMAGE MODAL */}
      {selectedEvent && (
        <div style={styles.modal} onClick={() => setSelectedEvent(null)}>
          <img
            src={selectedEvent.imageUrl}
            alt="Full Event"
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
  container: { padding: "40px", maxWidth: "1200px", margin: "auto" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
    gap: "25px",
  },
  card: {
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    background: "#fff",
    textAlign: "center",
    paddingBottom: "15px",
  },
  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    cursor: "pointer",
  },

  modal: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.9)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  fullImage: {
    maxWidth: "90%",
    maxHeight: "80%",
    borderRadius: "12px",
  },
};

export default Events;
