import { Package, Mail, Clock, MapPin, Truck } from "lucide-react";
import "./ContactPage.css"; // We'll put the CSS here

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="header">
          <h1>Contact Us</h1>
          <div className="underline"></div>

          <div className="icon-wrapper">
            <div className="pulse-ring"></div>
            <div className="delivery-animation">
              <Package className="package-icon" />
            </div>
          </div>
        </div>

        <div className="grid">
          <div className="card">
            <div className="card-header">
              <div className="icon-bg blue">
                <Mail className="card-icon" />
              </div>
              <h2>Customer Support</h2>
            </div>
            <div className="card-body">
              <p>
                <strong>Email:</strong> support@trackingapp.com
              </p>
              <p>
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p>
                <strong>Toll Free:</strong> 1-800-TRACK-IT
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="icon-bg green">
                <Clock className="card-icon" />
              </div>
              <h2>Business Hours</h2>
            </div>
            <div className="card-body">
              <p>
                <strong>Mon-Fri:</strong> 9:00 AM - 6:00 PM
              </p>
              <p>
                <strong>Saturday:</strong> 10:00 AM - 4:00 PM
              </p>
              <p>
                <strong>Sunday:</strong> Closed
              </p>
              <p className="note">* All times are in EST</p>
            </div>
          </div>
        </div>

        <div className="card office-card">
          <div className="card-header">
            <div className="icon-bg purple">
              <MapPin className="card-icon" />
            </div>
            <h2>Visit Our Office</h2>
          </div>
          <div className="office-grid">
            <div>
              <h3>Headquarters</h3>
              <p>123 Logistics Avenue</p>
              <p>New York, NY 10001</p>
              <p>United States</p>
            </div>
            <div>
              <h3>Distribution Center</h3>
              <p>456 Warehouse Boulevard</p>
              <p>Los Angeles, CA 90001</p>
              <p>United States</p>
            </div>
          </div>
          <div className="footer-note">
            We're here to help with all your delivery needs!
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
