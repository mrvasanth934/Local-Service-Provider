import "./Css/Hero.css"
import herobgimg from "../assets/bg1.png"
import { Link, useNavigate } from "react-router-dom"
import Popular from "./Popular"
import HowweWoks from "./HowWeWorks"
import Category from "./Category"
import CtaBox from "./CtaBox"
import Banner from "./Banner"
import Banner2 from "./Banner2"
import axios from "axios"
import { authBase } from "../../url"
import { useEffect, useState } from "react"
import profileIcon from "../assets/icons8-profile-50.png";
import WhyChooseUs from "./WhyChooseUs"
import Footer from "./Footer"
const Hero = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const getProfile = async () => {
        try {
            const response = await axios.get(`${authBase}/profile`, { withCredentials: true })
            console.log(response);

            const isFailed = async () => {
                await cookieStore.set("token", "")
                navigate("/login")
            }
            response && response.data.success == false && (response.data.message == "continue with login" || response.data.message == "unAuthorized token" || response.data.message == "can`t find user" || response.data.message == "error from get profile") && isFailed()
            response && response.data.success == true && response.data.data && setUser(response.data.data)
        } catch (error) {
            error && error.message == "Network Error" && navigate("/server-error-response")
        }
    }
    useEffect(() => {
        getProfile()
    }, [])
    return (
        <>
            {user && console.log(user)
            }
            <div className="hero">
                <div className="hero-container">
                    <div className="nav">
                        <div className="nav-left">
                            Local.
                        </div>
                        <div className="nav-middle">
                            <h5>Home</h5>
                            <h5>About us</h5>
                            <h5>category</h5>
                            <h5>Contact us</h5>
                        </div>
                        {
                            user ? <div onClick={() => { user.role && user.role == "user" ? navigate("/profile") : user.role == "provider" ? navigate("/provider-profile") : navigate("/admin") }} className="nav-right">
                                <div className="hero-nav-profile"><img src={profileIcon} alt="" /></div>
                                <h5>{user.userName && user.userName.split(" ")[0]}</h5>
                            </div> :
                                <div onClick={() => { navigate("/signup") }} className="nav-right">
                                    <h5>Sign up</h5>
                                </div>
                        }
                    </div>
                    <div className="hero-content">
                        <h1>Find Home Service <br /> Experts Near You</h1>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quibusdam, consequatur </h4>
                        <div className="view-service-btn">View Services</div>
                    </div>
                    <div className="bg">
                        <img src={herobgimg} alt="" />
                    </div>
                </div>
            </div>
            <Category />
            <Banner2 />
            <Popular />
            <Banner />
            {/* <WhyChooseUs/> */}
            {/* <CtaBox /> */}
            <Footer/>
        </>

    )
}
export default Hero