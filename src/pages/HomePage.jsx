import { useState } from "react";
import "./home.css";
import { Package } from "lucide-react";

function HomePage() {
  const [trackingId, setTrackingId] = useState("");
  const [loading, setLoading] = useState(false);
  const [trackingDetails, setTrackingDetails] = useState(null);

  const handleTrack = () => {
    if (!trackingId.trim()) return;

    setLoading(true);
    setTrackingDetails(null);

    setTimeout(() => {
      setTrackingDetails({
        id: trackingId,
        status: "In Transit",
        location: "New York Distribution Center",
        estimatedDelivery: "November 26, 2025",
        items: ["Cotton T-Shirt (Blue)", "Denim Jeans", "Leather Jacket"],
        history: [
          {
            date: "Nov 24, 10:30 AM",
            status: "Package picked up",
            location: "Los Angeles, CA",
          },
          {
            date: "Nov 24, 2:45 PM",
            status: "In transit",
            location: "Phoenix, AZ",
          },
          {
            date: "Nov 24, 8:20 PM",
            status: "Arrived at facility",
            location: "Dallas, TX",
          },
          {
            date: "Nov 25, 6:15 AM",
            status: "Out for delivery",
            location: "New York, NY",
          },
        ],
      });

      setLoading(false);
    }, 2000);
  };

  return (
    <div className="container">
      <div className="inner-container">
        <div className="card">
          <h1 className="heading-1">Track Your Order</h1>

          <label className="label">Enter Tracking ID</label>
          <input
            className="input"
            type="text"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleTrack()}
          />

          <button className="button" disabled={loading} onClick={handleTrack}>
            {loading ? "Tracking..." : "Track Package"}
          </button>
        </div>

        {/* Loader */}
        {loading && (
          <div className="card" style={{ textAlign: "center" }}>
            <div className="loader"></div>
            <p className="loader-text">Fetching tracking details...</p>
          </div>
        )}

        {/* Tracking Details */}
        {trackingDetails && !loading && (
          <div className="card">
            <h2 className="heading-2">Tracking Details</h2>
            <p>
              Tracking ID: <strong>{trackingDetails.id}</strong>
            </p>

            <div className="status-container">
              <div className="status-box red-light">
                <p className="status-label">Current Status</p>
                <p className="status-value">{trackingDetails.status}</p>
              </div>

              <div className="status-box red-dark">
                <p className="status-label">Estimated Delivery</p>
                <p className="status-value">
                  {trackingDetails.estimatedDelivery}
                </p>
              </div>
            </div>

            <h3 className="heading-2" style={{ fontSize: "18px" }}>
              Items in Package
            </h3>
            <ul className="items-list">
              {trackingDetails.items.map((item, i) => (
                <li key={i}>
                  <Package size={18} style={{ marginRight: "8px" }} /> {item}
                </li>
              ))}
            </ul>

            <h3 className="heading-2" style={{ fontSize: "18px" }}>
              Tracking History
            </h3>
            {trackingDetails.history.map((event, i) => (
              <div className="timeline-row" key={i}>
                <div>
                  <div
                    className={`timeline-dot ${
                      i === trackingDetails.history.length - 1
                        ? "active"
                        : "inactive"
                    }`}
                  ></div>
                  {i < trackingDetails.history.length - 1 && (
                    <div className="timeline-line"></div>
                  )}
                </div>
                <div style={{ paddingBottom: "16px" }}>
                  <p>{event.date}</p>
                  <p>
                    <strong>{event.status}</strong>
                  </p>
                  <p>{event.location}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Images Section */}
        <h2 className="heading-1" style={{ textAlign: "center" }}>
          We Deliver Everything You Need
        </h2>

        <div className="grid">
          <div className="image-card">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400"
              alt=""
            />
            <div className="image-overlay">
              <p className="image-text">T-Shirts</p>
            </div>
          </div>

          <div className="image-card">
            <img
              src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=400"
              alt=""
            />
            <div className="image-overlay">
              <p className="image-text">Footwear</p>
            </div>
          </div>

          <div className="image-card">
            <img
              src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400"
              alt=""
            />
            <div className="image-overlay">
              <p className="image-text">Jeans</p>
            </div>
          </div>

          <div className="image-card">
            <img
              src="https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400"
              alt=""
            />
            <div className="image-overlay">
              <p className="image-text">Jackets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
