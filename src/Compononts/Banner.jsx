import React from "react";
import "./Css/Banner.css";
import banner1 from "../assets/TechnBrains.jpg"
const Banner = () => {
    return (
        <div className="service-banner">
            <div className="banner-container-1">
            <div className="banner-left">
                <h1 className="banner-title">
                    Need a Service Right Now?
                </h1>
                <h2 className="banner-subtitle">
                    Book Trusted Professionals In Minutes
                </h2>
                <p className="banner-desc">
                    From plumbing to AC repair, skilled experts ready to help today.
                </p>
                <div className="trust-row">
                    <div className="trust-item">
                        <span className="icon">✔</span>
                        <span>Verified Experts</span>
                    </div>
                    <div className="trust-item">
                        <span className="icon">⏰</span>
                        <span>Quick & Reliable</span>
                    </div>
                    <div className="trust-item">
                        <span className="icon">⭐</span>
                        <span>4.8 Rated Service</span>
                    </div>
                </div>
                <button className="banner-btn">
                    Book a Service
                </button>
            </div>
            <div style={{display:"none"}} className="banner-right">
                <img
                    src={banner1}
                    alt="Technician"
                />
            </div>
            </div>

        </div>
    );
};

export default Banner;