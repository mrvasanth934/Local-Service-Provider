import "./Css/Popular.css"
import arrow from "../assets/right-arrow.png"
const Popular = () => {
    return (
        <>
            <div className="popular">
                <div className="popular-container">
                    <h1>Top Rated Sellers</h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, dolore!</h5>
                    <div className="sellers">
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
                            <div className="name-desc">
                                <h3>Vasanth</h3>
                                <h6>Lorem ipsum dolor, sit amet consectetur  adipisicing <br /> elit. Nihil, esse.</h6>
                            </div>
                            <hr />
                            <div className="ratings-category">
                                <h3>Ac Services</h3>
                                <div className="services">
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
                            <div className="name-desc">
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
                            <div className="name-desc">
                                <h3>Vasanth</h3>
                                <h6>Lorem ipsum dolor, sit amet consectetur  adipisicing <br /> elit. Nihil, esse.</h6>
                            </div>
                            <hr />
                            <div className="ratings-category">
                                <h3>Ac Services</h3>
                                <div className="services">
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
        </>
    )
}
export default Popular