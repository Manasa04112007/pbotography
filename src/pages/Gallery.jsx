import { useEffect, useState } from "react";
import API from "../services/api";

function Gallery() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    API.get("/api/gallery")
      .then((res) => setImages(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🖼️ Gallery</h2>

      <div style={styles.grid}>
        {images.map((image) => (
          <div key={image._id} style={styles.card}>
            <img
              src={image.imageUrl}
              alt={image.category}
              style={styles.image}
              onClick={() => setSelectedImage(image)}
            />
            <h3>{image.category}</h3>
          </div>
        ))}
      </div>

      {/* FULL IMAGE MODAL */}
      {selectedImage && (
        <div style={styles.modal} onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage.imageUrl}
            alt="Full view"
            style={styles.fullImage}
            onClick={(e) => e.stopPropagation()}
          />
          <h3 style={{ color: "#fff" }}>{selectedImage.category}</h3>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { padding: "40px", maxWidth: "1200px", margin: "auto" },
  title: { fontSize: "28px", fontWeight: "bold", marginBottom: "30px" },
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

export default Gallery;