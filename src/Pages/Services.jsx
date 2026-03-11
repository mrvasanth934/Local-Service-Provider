import "./Css/Services.css"
import arrow from "../assets/right-arrow.png"
import { useEffect, useState } from "react";
import axios from "axios";
import { serviceBase } from "../../url";
import { useNavigate } from "react-router-dom";
const Service = () => {
    const navigate = useNavigate()
    const [services, setServices] = useState()
    const [selectedValues,setSelctedValues] = useState([]);
    const handleSelectedValues = (e) =>{
       if(e.target.checked){
        setSelctedValues([...selectedValues,e.target.value])
       }
       else{
        setSelctedValues(selectedValues.filter((data)=> data != e.target.value) )
       }
       
    }
    useEffect(()=>{
        
    },[selectedValues])
    const categorys = [
        "AC & Cooling",
        "Plumbing",
        "Electrical",
        "Water Appliances",
        "Cleaning",
        "Painting",
        "Pest Control",
        "Furniture & Carpentry",
        "Construction & Interior",
        "Gardening",
        "Glass & Windows"
    ];
    const getServices = async () => {
        const isFailuire = async () => {
            await cookieStore.set("token", "")
            navigate("/login")
        }
        try {
            const response = await axios.get(`${serviceBase}/services`, { withCredentials: true })
            response && response.data.success == false && (response.data.message.includes("login") || response.data.message.includes("token") || response.data.message == "can`t find user") && isFailuire()
            response && response.data.success == true && setServices(response.data.data)
        } catch (error) {
            error && error.message == "Network Error" && navigate("/server-error-response")
        }
    }
    useEffect(() => {
        getServices()
    }, [])
    return (
        <>
            {services && console.log(services)
            }
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
                                    <input type="radio" name="price" id="p_htl" />
                                    <label htmlFor="p_htl">High to High</label>
                                </div>
                                <div className="price">
                                    
                                </div>
                            </div>
                            <div className="sortby-price category-sort">
                                <h4>Categories</h4>
                                {
                                    categorys.map((category, i) => {
                                        return <div key={i} className="price">
                                            <input onChange={(e)=>{handleSelectedValues(e)}} type="checkbox" value={category}  name="category" id={category} />
                                            <label htmlFor={category}>{category}</label>
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
                                    <h2>Services</h2>
                                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                </div>
                            </div>
                            <div className="main-top-right">
                                <h5>{`${services && services.length}`} Services Found</h5>
                            </div>
                        </div>
                        <hr className="service-hr" />
                        <div className="main-bottom">
                            {
                                services && services.map((service, i) => {
                                    return <div key={i} className="seller">
                                        <div className="profile-status">
                                            <div className="profile-pic-details">
                                                <div className="profile-pic">
                                                    {service.provider.userName[0].toUpperCase()
                                                    }
                                                </div>
                                                <div className="profile-pic-details-name">
                                                    <h5>{service.provider.userName}</h5>
                                                    <h6>Verified Provider</h6>
                                                </div>
                                            </div>
                                            <div className="pr-status">
                                                <h3 className="top-rated">4.5 Ratings</h3>
                                                {/* <h3>24/7 Available</h3> */}
                                            </div>
                                        </div>
                                        {/* <hr /> */}
                                        <div className="name-desc">
                                            <h3>{service.serviceName}</h3>
                                            <h6>{service.serviceDescription.slice(0,90)}...</h6>
                                        </div>
                                        <hr />
                                        <div className="ratings-category">
                                            <h3>{service.serviceCategory}</h3>
                                            <div className="service-list">
                                                <h3>COD available</h3>
                                                <h3>100+ Customers</h3>
                                                <h3>+2 More</h3>
                                            </div>
                                        </div>
                                        <hr />
                                        <div onClick={() => { navigate(`/service-details/${service._id}`) }} className="view-btn pop">
                                            Get Your Service
                                            {/* <div className="arrow"><img src={arrow} alt="" /></div> */}
                                        </div>
                                    </div>
                                })
                            }
                            {
                                services == true && <div className="no-services">
                                <h3>Services Not available</h3>
                                <h6 onClick={()=>{getServices()}}>Try again</h6>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Service