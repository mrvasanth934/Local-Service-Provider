import React from "react";
import "./Css/Banner2.css";
import banner1 from "../assets/TechnBrains.jpg"
const Banner2 = () => {
    return (
        <div className="service-banner">
            <div className="banner-container banner2">
            <div className="banner-left  banner2-left">
                <h1 className="banner-title">
                    Are you skilled in proffesional
                </h1>
                <h2 className="banner-subtitle">
                    Join our service network today
                </h2>
                <p style={{color:"purple"}} className="banner-desc">
                    earn by offering home service in your area
                </p>
                <div className="trust-row">
                    <div className="trust-item">
                        <span className="icon">💼</span>
                        <span>Flexible work</span>
                    </div>
                    <div className="trust-item">
                        <span className="icon">👥</span>
                        <span>More customers</span>
                    </div>
                    <div className="trust-item">
                        <span className="icon">💸</span>
                        <span>Daliy payments</span>
                    </div>
                </div>
                <button className="banner-btn banner2-btn">
                    Become a provider
                </button>
            </div>
            {/* <div className="banner-right">
                <img
                    src={banner1}
                    alt="Technician"
                />
            </div> */}
            </div>

        </div>
    );
};

export default Banner2;