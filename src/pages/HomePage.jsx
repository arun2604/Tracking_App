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
        {/* Track Section */}
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

        {/* Vision & Mission Section */}
        <h2 className="heading-1 vision-title" style={{ textAlign: "center" }}>
          Our Vision & Mission
        </h2>

        <div className="vision-mission-container">
          <div className="vm-card">
            <h3 className="vm-heading">Our Vision</h3>
            <p className="vm-text">
              To become a trusted and leading delivery partner known for speed,
              reliability, and customer-friendly service. We aim to create a
              seamless delivery experience where every shipment can be tracked,
              trusted, and delivered with care.
            </p>
          </div>

          <div className="vm-card">
            <h3 className="vm-heading">Our Mission</h3>
            <ul className="vm-list">
              <li>
                To provide fast, safe, and professional delivery services for
                courier companies and business partners.
              </li>
              <li>
                To maintain complete transparency through our easy-to-use
                shipment tracking system.
              </li>
              <li>
                To deliver every parcel with commitment, accuracy, and respect
                for customer time.
              </li>
              <li>
                To build long-term relationships by offering reliable service
                and friendly support.
              </li>
              <li>
                To continuously improve operations with better technology and
                trained staff.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
