import { useNavigate } from "react-router-dom"
import "./Css/Profile.css"
import sampleAd from "../assets/bg.jpg"
import Profile_about from "../Compononts/Profile_about"
import { useState } from "react"
import Update_profile from "../Compononts/Update_profile"
import Password_security from "../Compononts/Pasword_security"
import Notifications from "../Compononts/Notifications"
import AdminManagement from "../Compononts/AdminManagement"
const Admin = () =>{
    const navigate = useNavigate()
    const [showMain, setShowMain] = useState("about-us")
    return(
        <>
            <div className="profile">
                <div className="profile-container">
                    <div className="profile-side-bar">
                        <div className="profile-sidebar-container">
                            <div className="profile-side-info">
                                <div className="profile-side-logo">
                                </div>
                                <div className="profile-side-name-desc">
                                    <div className="profile-side-name">Vasanth</div>
                                    <div className="profile-side-desc">For Ac Service</div>
                                </div>
                            </div>
                            <div className="profile-side-nav">
                                <div className="profile-side-nav-links">
                                    <div onClick={()=>{navigate("/")}} className="nav-link">
                                        <h5>Home</h5>
                                    </div>
                                    <div onClick={()=>{setShowMain("about-us")}} className={`${showMain == "about-us" ? "nav-link visible-link" : "nav-link"}`}>
                                        <h5>About Us</h5>
                                    </div>
                                    <div onClick={()=>{setShowMain("manage")}} className={`${showMain == "manage" ? "nav-link visible-link" : "nav-link"}`}>
                                        <h5>Manage</h5>
                                    </div>
                                    <div onClick={()=>{setShowMain("notifications")}} className={`${showMain == "notifications" ? "nav-link visible-link" : "nav-link"}`}>
                                        <h5>Notifications</h5>
                                    </div>
                                    <div onClick={()=>{setShowMain("update-profile")}} className={`${showMain == "update-profile" ? "nav-link visible-link" : "nav-link"}`}>
                                        <h5>Update Profile</h5>
                                    </div>
                                    <div onClick={()=>{setShowMain("password-security")}} className={`${showMain == "password-security" ? "nav-link visible-link" : "nav-link"}`}>
                                        <h5>Password And Security</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-sidebar-logout-btn">
                                Logout
                            </div>
                        </div>
                    </div>
                    <div className="profile-main">
                        {
                            showMain == "about-us" && <Profile_about/>
                        }
                        {
                            showMain == "update-profile" && <Update_profile/>
                        }
                        {
                            showMain == "password-security" && <Password_security/>
                        }
                        {
                            showMain == "notifications" && <Notifications/>
                        }
                        {
                            showMain == "manage" && <AdminManagement/>
                        }
                        <div className="ad-centre">
                            <div className="ad-cetre-container">
                                <h5>Sposered</h5>
                                <div className="ad-image">
                                    <img src={sampleAd} alt="" />
                                </div>
                                <h5 className="ad-email">mrvasanth93@gmail.com</h5>
                                <h6 className="ad-desc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dolorum minus? Dolorum nisi ab beatae aliquam modi neque recusandae in.
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin