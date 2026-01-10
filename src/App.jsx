import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

import AdminDashboard from "./pages/AdminDashboard";
import AdminGallery from "./pages/AdminGallery";
import AdminEvents from "./pages/AdminEvents";
import AdminProtectedRoute from "./pages/AdminProtectedRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />

        {/* Protected Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        >
          {/* Nested Routes for separate admin pages */}
          <Route path="gallery" element={<AdminGallery />} />
          <Route path="events" element={<AdminEvents />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
