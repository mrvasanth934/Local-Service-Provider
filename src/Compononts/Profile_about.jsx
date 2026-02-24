import { useEffect, useState } from "react";
import "./Css/Profile_about.css"
import profileImg from '../assets/login.jpg'
const Profile_about = () => {

    return (
        <>
            <div className="profile_about">
                <div className="profile_about-container">
                    <div className="profile_about_main">
                        <div className="profile-about-image">
                            <div className="profile_about_img"></div>
                            <div className="profile_about_img-option">
                                <h3>Update Your Profile Image</h3>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quibusdam accusantium ipsam ipsa laborum?</h5>
                            </div>
                        </div>
                        <div className="profile-about-personal-info">
                            <h3>Personal Info</h3>
                            <div className="profile-about-personal-info-contacts">
                                <div className="profile-about-personal-info-contact">
                                    <h6>FullName</h6>
                                    <h5>mrvasanth93@gmail.com</h5>
                                </div>
                                <div className="profile-about-personal-info-contact">
                                    <h6>UserName</h6>
                                    <h5>mrvasanth93@gmail.com</h5>
                                </div>
                                <div className="profile-about-personal-info-contact">
                                    <h6>Email</h6>
                                    <h5>mrvasanth93@gmail.com</h5>
                                </div>
                                <div className="profile-about-personal-info-contact">
                                    <h6>Mobile Number</h6>
                                    <h5>mrvasanth93@gmail.com</h5>
                                </div>
                            </div>
                        </div>
                        <div className="profile-about-personal-info-addresess">
                            <h3>Address</h3>
                            <div className="profile-about-personal-info-contacts">
                                <div className="profile-about-personal-info-contact">
                                    <h6>Label</h6>
                                    <h5>Home</h5>
                                </div>
                                <div className="profile-about-personal-info-contact">
                                    <h6>Full Address</h6>
                                    <h5>3/218, Serugalathur, Kudavasal</h5>
                                </div>
                                <div className="profile-about-personal-info-contact">
                                    <h6>City</h6>
                                    <h5>Thiruvarur</h5>
                                </div>
                                <div className="profile-about-personal-info-contact">
                                    <h6>State</h6>
                                    <h5>Tamilnadu</h5>
                                </div>
                                <div className="profile-about-personal-info-contact">
                                    <h6>Pincode</h6>
                                    <h5>612604</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile_about;
