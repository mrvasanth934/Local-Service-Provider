import "./Css/Popular.css"
import arrow from "../assets/right-arrow.png"
import { useNavigate } from "react-router-dom"
const Popular = () => {
    const services = [
        { title: "Painting", icon: "shield" },
        { title: "Ac Services", icon: "truck" },
        { title: "Home", icon: "video" },
        { title: "Plumbing", icon: "clipboard" },
        { title: "Electrical", icon: "mic" },
        { title: "Carpentry", icon: "tools" }
    ];
    const navigate = useNavigate()
    return (
        <>
            <div className="popular">
                <div className="popular-container">
                    <h1>Top Rated Services</h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, dolore!</h5>
                    <div className="why-choose-us-grid">
                    {services.map((service, index) => (
                        <div className={`why-choose-us-card`} key={index}>
                            <span>{service.title}</span>
                        </div>
                    ))}
                </div>
                    <div className="sellers">
                        <div className="seller">
                            <div className="profile-status">
                                <div className="profile-pic-details">
                                    <div className="profile-pic">
                                        v
                                    </div>
                                    <div className="profile-pic-details-name">
                                        <h5>Vasanth</h5>
                                        <h6>id : #0987654345678</h6>
                                    </div>
                                </div>
                                <div className="pr-status">
                                    <h3 className="top-rated">4.5 Ratings</h3>
                                    {/* <h3>24/7 Available</h3> */}
                                </div>
                            </div>
                            {/* <hr /> */}
                            <div className="name-desc">
                                <h3>Painting</h3>
                                <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, esse.</h6>
                            </div>
                            <hr />
                            <div className="ratings-category">
                                <h3>Ac Services</h3>
                                <div className="service-list">
                                    <h3>COD available</h3>
                                    <h3>100+ Customers</h3>
                                    {/* <h3>+2 More</h3> */}
                                </div>
                            </div>
                            <hr />
                            <div onClick={() => { navigate("service-details") }} className="view-btn">
                                Get Your Service
                                <div className="arrow"><img src={arrow} alt="" /></div>
                            </div>
                        </div>
                        <div className="seller">
                            <div className="profile-status">
                                <div className="profile-pic-details">
                                    <div className="profile-pic">
                                        v
                                    </div>
                                    <div className="profile-pic-details-name">
                                        <h5>Vasanth</h5>
                                        <h6>id : #0987654345678</h6>
                                    </div>
                                </div>
                                <div className="pr-status">
                                    <h3 className="top-rated">4.5 Ratings</h3>
                                    {/* <h3>24/7 Available</h3> */}
                                </div>
                            </div>
                            {/* <hr /> */}
                            <div className="name-desc">
                                <h3>Painting</h3>
                                <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, esse.</h6>
                            </div>
                            <hr />
                            <div className="ratings-category">
                                <h3>Ac Services</h3>
                                <div className="service-list">
                                    <h3>COD available</h3>
                                    <h3>100+ Customers</h3>
                                    {/* <h3>+2 More</h3> */}
                                </div>
                            </div>
                            <hr />
                            <div onClick={() => { navigate("service-details") }} className="view-btn">
                                Get Your Service
                                <div className="arrow"><img src={arrow} alt="" /></div>
                            </div>
                        </div>
                        <div className="seller">
                            <div className="profile-status">
                                <div className="profile-pic-details">
                                    <div className="profile-pic">
                                        v
                                    </div>
                                    <div className="profile-pic-details-name">
                                        <h5>Vasanth</h5>
                                        <h6>id : #0987654345678</h6>
                                    </div>
                                </div>
                                <div className="pr-status">
                                    <h3 className="top-rated">4.5 Ratings</h3>
                                    {/* <h3>24/7 Available</h3> */}
                                </div>
                            </div>
                            {/* <hr /> */}
                            <div className="name-desc">
                                <h3>Painting</h3>
                                <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, esse.</h6>
                            </div>
                            <hr />
                            <div className="ratings-category">
                                <h3>Ac Services</h3>
                                <div className="service-list">
                                    <h3>COD available</h3>
                                    <h3>100+ Customers</h3>
                                    {/* <h3>+2 More</h3> */}
                                </div>
                            </div>
                            <hr />
                            <div onClick={() => { navigate("service-details") }} className="view-btn">
                                Get Your Service
                                <div className="arrow"><img src={arrow} alt="" /></div>
                            </div>
                        </div>
                        <div className="seller">
                            <div className="profile-status">
                                <div className="profile-pic-details">
                                    <div className="profile-pic">
                                        v
                                    </div>
                                    <div className="profile-pic-details-name">
                                        <h5>Vasanth</h5>
                                        <h6>id : #0987654345678</h6>
                                    </div>
                                </div>
                                <div className="pr-status">
                                    <h3 className="top-rated">4.5 Ratings</h3>
                                    {/* <h3>24/7 Available</h3> */}
                                </div>
                            </div>
                            {/* <hr /> */}
                            <div className="name-desc">
                                <h3>Painting</h3>
                                <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, esse.</h6>
                            </div>
                            <hr />
                            <div className="ratings-category">
                                <h3>Ac Services</h3>
                                <div className="service-list">
                                    <h3>COD available</h3>
                                    <h3>100+ Customers</h3>
                                    {/* <h3>+2 More</h3> */}
                                </div>
                            </div>
                            <hr />
                            <div onClick={() => { navigate("service-details") }} className="view-btn">
                                Get Your Service
                                <div className="arrow"><img src={arrow} alt="" /></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Popular