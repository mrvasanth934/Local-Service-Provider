import "./Css/Services.css"
import arrow from "../assets/right-arrow.png"
const Service = () => {
    const services = [
        "Home Cleaning",
        "Plumbing Services",
        "AC Repair & Service",
        "Electrician Services",
        "Appliance Repair",
        "Painting Services",
        "Pest Control",
        "Carpenter Services",
        "Water Purifier Service",
        "Salon at Home"
    ];
    return (
        <>
            <div className="services">
                <div className="services-container">
                    <div className="sidebar">
                        <div className="sidebar-container">
                            <h3>Filters</h3>
                            <div className="sortby-price">
                                <h4>Pricing</h4>
                                <div className="price">
                                    <input type="radio" name="price" id="p_lth" />
                                    <label htmlFor="p_lth">Low to High</label>
                                </div>
                                <div className="price">
                                    <input type="radio" name="price" id="p_htl" />
                                    <label htmlFor="p_htl">High to High</label>
                                </div>
                            </div>
                            <div className="sortby-price category-sort">
                                <h4>Categories</h4>
                                {
                                    services.map((service)=>{
                                        return <div className="price">
                                            <input type="checkbox" name="category" id={service} />
                                            <label htmlFor={service}>{service}</label>
                                        </div>
                                    })
                                }
                            </div>
                            <div className="clear-filter-btn">
                                <h4>Clear Filters</h4>
                            </div>
                        </div>
                    </div>
                    <div className="main">
                        <div className="main-top">
                            <div className="main-top-left">
                                <div className="service-logo"></div>
                                <div className="service-title-desc">
                                    <h2>All Services</h2>
                                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                </div>
                            </div>
                            <div className="main-top-right">
                                <h5>100 Servies Found</h5>
                            </div>
                        </div>
                        <hr className="service-hr" />
                        <div className="main-bottom">
                            <div className="service">
                                <div className="seller">
                                    <div className="profile-status">
                                        <div className="profile-pic">
                                            V
                                        </div>
                                        <div className="pr-status">
                                            <h3 className="top-rated">Top Rated</h3>
                                            <h3>24/7 Available</h3>
                                        </div>
                                    </div>
                                    <div className="name-desc name">
                                        <h3>Vasanth</h3>
                                        <h6>Lorem ipsum dolor, sit amet consectetur  adipisicing <br /> elit. Nihil, esse.</h6>
                                    </div>
                                    <hr />
                                    <div className="ratings-category">
                                        <h3>Ac Services</h3>
                                        <div className="service-list">
                                            <h3>Repair</h3>
                                            <h3>Instalation</h3>
                                            <h3>+2 More</h3>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="view-btn">
                                        Get Your Service
                                        <div className="arrow"><img src={arrow} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="service">
                                <div className="seller">
                                    <div className="profile-status">
                                        <div className="profile-pic">
                                            V
                                        </div>
                                        <div className="pr-status">
                                            <h3 className="top-rated">Top Rated</h3>
                                            <h3>24/7 Available</h3>
                                        </div>
                                    </div>
                                    <div className="name-desc name">
                                        <h3>Vasanth</h3>
                                        <h6>Lorem ipsum dolor, sit amet consectetur  adipisicing <br /> elit. Nihil, esse.</h6>
                                    </div>
                                    <hr />
                                    <div className="ratings-category">
                                        <h3>Ac Services</h3>
                                        <div className="service-list">
                                            <h3>Repair</h3>
                                            <h3>Instalation</h3>
                                            <h3>+2 More</h3>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="view-btn">
                                        Get Your Service
                                        <div className="arrow"><img src={arrow} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="service">
                                <div className="seller">
                                    <div className="profile-status">
                                        <div className="profile-pic">
                                            V
                                        </div>
                                        <div className="pr-status">
                                            <h3 className="top-rated">Top Rated</h3>
                                            <h3>24/7 Available</h3>
                                        </div>
                                    </div>
                                    <div className="name-desc name">
                                        <h3>Vasanth</h3>
                                        <h6>Lorem ipsum dolor, sit amet consectetur  adipisicing <br /> elit. Nihil, esse.</h6>
                                    </div>
                                    <hr />
                                    <div className="ratings-category">
                                        <h3>Ac Services</h3>
                                        <div className="service-list">
                                            <h3>Repair</h3>
                                            <h3>Instalation</h3>
                                            <h3>+2 More</h3>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="view-btn">
                                        Get Your Service
                                        <div className="arrow"><img src={arrow} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="service">
                                <div className="seller">
                                    <div className="profile-status">
                                        <div className="profile-pic">
                                            V
                                        </div>
                                        <div className="pr-status">
                                            <h3 className="top-rated">Top Rated</h3>
                                            <h3>24/7 Available</h3>
                                        </div>
                                    </div>
                                    <div className="name-desc name">
                                        <h3>Vasanth</h3>
                                        <h6>Lorem ipsum dolor, sit amet consectetur  adipisicing <br /> elit. Nihil, esse.</h6>
                                    </div>
                                    <hr />
                                    <div className="ratings-category">
                                        <h3>Ac Services</h3>
                                        <div className="service-list">
                                            <h3>Repair</h3>
                                            <h3>Instalation</h3>
                                            <h3>+2 More</h3>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="view-btn">
                                        Get Your Service
                                        <div className="arrow"><img src={arrow} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="service">
                                <div className="seller">
                                    <div className="profile-status">
                                        <div className="profile-pic">
                                            V
                                        </div>
                                        <div className="pr-status">
                                            <h3 className="top-rated">Top Rated</h3>
                                            <h3>24/7 Available</h3>
                                        </div>
                                    </div>
                                    <div className="name-desc name">
                                        <h3>Vasanth</h3>
                                        <h6>Lorem ipsum dolor, sit amet consectetur  adipisicing <br /> elit. Nihil, esse.</h6>
                                    </div>
                                    <hr />
                                    <div className="ratings-category">
                                        <h3>Ac Services</h3>
                                        <div className="service-list">
                                            <h3>Repair</h3>
                                            <h3>Instalation</h3>
                                            <h3>+2 More</h3>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="view-btn">
                                        Get Your Service
                                        <div className="arrow"><img src={arrow} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service