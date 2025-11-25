import { Home, Info, Mail, Lock } from "lucide-react";
import "./nav.css";

function Navigation({ currentPage, setCurrentPage, isAdmin }) {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-inner">
          {/* Logo */}
          <div className="logo-section" onClick={() => setCurrentPage("home")}>
            <div className="logo-box">
              <img
                src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=100"
                alt="TrackIt Logo"
                className="logo-img"
              />
            </div>
            <div className="logo-text">
              <h1>TrackIt</h1>
              <p>Fast & Reliable Delivery</p>
            </div>
          </div>

          {/* Menu Buttons */}
          <div className="nav-links">
            <button
              className={`nav-btn ${currentPage === "home" ? "active" : ""}`}
              onClick={() => setCurrentPage("home")}
            >
              <Home size={18} /> <span>Home</span>
            </button>

            <button
              className={`nav-btn ${currentPage === "about" ? "active" : ""}`}
              onClick={() => setCurrentPage("about")}
            >
              <Info size={18} /> <span>About Us</span>
            </button>

            <button
              className={`nav-btn ${currentPage === "contact" ? "active" : ""}`}
              onClick={() => setCurrentPage("contact")}
            >
              <Mail size={18} /> <span>Contact Us</span>
            </button>

            {/* Admin */}
            <button
              className={`admin-btn ${
                currentPage === "admin" ? "active-admin" : ""
              }`}
              onClick={() => setCurrentPage("admin")}
            >
              <Lock size={18} /> <span>Admin</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
