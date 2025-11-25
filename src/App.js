import "./styles.css";
import { useState } from "react";
import Navigation from "./components/Navigation";
import AboutPage from "./pages/AboutUs";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactUs";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isAdmin, setIsAdmin] = useState(false);
  const [trackingDatabase, setTrackingDatabase] = useState({
    TRK123456789: {
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
    },
    TRK987654321: {
      status: "Delivered",
      location: "Customer Address",
      estimatedDelivery: "November 23, 2025",
      items: ["Running Shoes (Size 10)", "Sports Socks (3 pairs)"],
      history: [
        {
          date: "Nov 22, 9:00 AM",
          status: "Order placed",
          location: "Online Store",
        },
        {
          date: "Nov 22, 3:30 PM",
          status: "Package picked up",
          location: "Chicago, IL",
        },
        {
          date: "Nov 23, 11:00 AM",
          status: "Out for delivery",
          location: "Boston, MA",
        },
        {
          date: "Nov 23, 2:15 PM",
          status: "Delivered",
          location: "Customer Address",
        },
      ],
    },
  });

  const handleAdminLogin = () => {
    setIsAdmin(true);
    setCurrentPage("dashboard");
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    setCurrentPage("home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {currentPage !== "admin" && currentPage !== "dashboard" && (
        <Navigation
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isAdmin={isAdmin}
        />
      )}

      <main>
        {currentPage === "home" && (
          <HomePage trackingDatabase={trackingDatabase} />
        )}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "contact" && <ContactPage />}
        {currentPage === "admin" && (
          <AdminLoginPage onLogin={handleAdminLogin} />
        )}
        {currentPage === "dashboard" && (
          <AdminDashboard
            onLogout={handleAdminLogout}
            trackingDatabase={trackingDatabase}
            setTrackingDatabase={setTrackingDatabase}
          />
        )}
      </main>
    </div>
  );
}
