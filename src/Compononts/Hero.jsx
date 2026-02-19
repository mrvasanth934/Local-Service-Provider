import "./Css/Hero.css"
import herobgimg from "../assets/bg1.png"
import { Link } from "react-router-dom"
import Popular from "./Popular"
import HowweWoks from "./HowWeWorks"
import Category from "./Category"
import CtaBox from "./CtaBox"
const Hero = () => {
    return (
        <>
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
                        <div className="nav-right">
                            <h5>Sign up</h5>
                        </div>
                    </div>
                    <div className="hero-content">
                        <h1>Find Home Service <br /> Experts Near You</h1>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quibusdam, consequatur </h4>
                        <div className="view-service-btn">View Services</div>
                    </div>
                    <div className="bg"><img src={herobgimg} alt="" /></div>
                </div>
            </div>
            <Popular />
            <HowweWoks />
            <Category />
            <CtaBox />
        </>
    )
}
export default Hero