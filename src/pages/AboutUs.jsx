import { Truck, Package, MapPin } from "lucide-react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-container">
      {/* Truck moving across screen */}
      <div className="truck-wrapper">
        <Truck className="truck-icon" />
      </div>

      <div className="content-wrapper">
        {/* Header */}
        <header className="about-header">
          <h1>About Us</h1>
          <div className="header-underline"></div>
        </header>

        {/* Features Section */}
        <section className="features">
          <div className="feature-card">
            <Package className="feature-icon float-animation red-icon" />
            <h2>Our Mission</h2>
            <p>
              We are a leading logistics and package tracking company dedicated
              to providing reliable and efficient delivery services worldwide.
              Our mission is to make package tracking simple, transparent, and
              accessible to everyone.
            </p>
          </div>

          <div className="feature-card">
            <MapPin className="feature-icon bounce-animation red-icon-dark" />
            <h2>Global Reach</h2>
            <p>
              With real-time updates and comprehensive tracking information, you
              can always stay informed about your shipments. Founded in 2020, we
              have grown to serve millions of customers across the globe.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-us">
          <h2>Why Choose Us?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="icon-circle red-bg">
                <Truck className="benefit-icon" />
              </div>
              <h3>Fast Delivery</h3>
              <p>Express shipping options available worldwide</p>
            </div>
            <div className="benefit-card">
              <div className="icon-circle red-light-bg">
                <Package className="benefit-icon red-icon-dark" />
              </div>
              <h3>Safe Handling</h3>
              <p>Your packages are handled with utmost care</p>
            </div>
            <div className="benefit-card">
              <div className="icon-circle red-medium-bg">
                <MapPin className="benefit-icon" />
              </div>
              <h3>Real-time Tracking</h3>
              <p>Track your package every step of the way</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
