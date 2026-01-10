import { useEffect, useState } from "react";
import API from "../services/api";

function AdminGallery() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const [category, setCategory] = useState("");
  const [galleryImage, setGalleryImage] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  // FETCH GALLERY
  const fetchGallery = async () => {
    try {
      const res = await API.get("/api/gallery");
      setImages(res.data);
    } catch (err) {
      console.error("Fetch gallery error:", err);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // CREATE OR UPDATE
  const saveGallery = async () => {
    if (!category) {
      alert("Category is required");
      return;
    }

    if (!editingId && !galleryImage) {
      alert("Image is required for new gallery");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("category", category);
      if (galleryImage) {
        formData.append("image", galleryImage);
      }

      if (editingId) {
        // UPDATE
        await API.put(`/api/gallery/${editingId}`, formData);
        alert("Gallery updated successfully");
      } else {
        // CREATE
        await API.post("/api/gallery/upload", formData);
        alert("Gallery uploaded successfully");
      }

      resetForm();
      fetchGallery();
    } catch (err) {
      console.error("Save gallery error:", err);
      alert("Error saving gallery");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setCategory("");
    setGalleryImage(null);
    setEditingId(null);
  };

  const startEdit = (image) => {
    setEditingId(image._id);
    setCategory(image.category);
    setGalleryImage(null);
  };

  const deleteGallery = async (id) => {
    if (!window.confirm("Delete this image?")) return;
    try {
      await API.delete(`/api/gallery/${id}`);
      alert("Gallery deleted successfully");
      fetchGallery();
    } catch (err) {
      console.error("Delete gallery error:", err);
      alert("Error deleting gallery");
    }
  };

  return (
    <div style={styles.container}>
      <h2>🖼️ Admin Gallery</h2>

      {/* FORM */}
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={styles.input}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setGalleryImage(e.target.files[0])}
          style={styles.input}
        />

        <button
          onClick={saveGallery}
          disabled={loading}
          style={styles.submitButton}
        >
          {loading ? "Processing..." : editingId ? "Update Gallery" : "Upload Gallery"}
        </button>

        {editingId && (
          <button onClick={resetForm} style={styles.cancelButton}>
            Cancel Edit
          </button>
        )}
      </div>

      {/* GRID */}
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
            <div style={styles.actions}>
              <button
                onClick={() => startEdit(image)}
                style={styles.editBtn}
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => deleteGallery(image._id)}
                style={styles.deleteBtn}
              >
                🗑️ Delete
              </button>
            </div>
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

export default AdminGallery;