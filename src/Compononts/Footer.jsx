import "./Css/Footer.css";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">
          <div className="footer-left">
            <h2 className="company-name">ServicePro Pvt Ltd</h2>
            <p>
              Providing trusted Plumbing, Home Cleaning, and Maintenance
              services across Tamil Nadu with certified professionals.
            </p>
          </div>

          <div className="footer-middle">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>What we do</li>
              <li>Our Services</li>
              <li>Terms & Conditions</li>
              <li>Become a Service Partner</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-right">
            <h3>Contact</h3>
            <p>Email: support@servicepro.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Chennai, Tamil Nadu</p>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 ServicePro Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;


