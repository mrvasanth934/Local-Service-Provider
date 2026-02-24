import "./Css/ProviderViewServices.css"
import moreIcon from "../assets/icons8-more-30.png"
import { useState } from "react"
const ProviderViewServices = () => {
    const [tab, setTab] = useState("create")
    return (
        <>
            <div className="provider-view-services">
                <div className="provider-view-services-container">
                    <div className="provider-view-services-navs">
                        <div onClick={() => { setTab("create") }} className={tab == "create" ? "provider-view-service-nav isActive" : "provider-view-service-nav"}>Create Service</div>
                        <div onClick={() => { setTab("all") }} className={tab == "all" ? "provider-view-service-nav isActive" : "provider-view-service-nav"}>All Services</div>
                    </div>
                    {
                        (tab == "all" || tab == "pending" || tab == "completed" || tab == "ongoing") && <div className="provider-view-services-lists">
                            <div className="provider-view-service">
                                <div className="provider-view-service-name-status">
                                    <div className="provider-view-service-name-category">
                                        <h4>Ac Repair</h4>
                                        <p>Ac Service</p>
                                    </div>
                                </div>
                                <div className="provider-view-service-desc">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum exercitationem numquam ipsam?
                                </div>
                                <p className="provider-view-service-created-at badge-service">Creted At 12 Jul </p>
                                <p className="provider-view-service-orders badge-service">no of Orders : 23</p>
                                <p className="provider-view-service-orders badge-service">Total Earnings : $ 34000</p>
                                <p className="provider-view-service-price badge-service">
                                    <p>$1500 / hr</p>
                                </p>
                                <div className="more-btn">
                                    <img src={moreIcon} alt="" />
                                </div>
                            </div>
                            <div className="provider-view-service">
                                <div className="provider-view-service-name-status">
                                    <div className="provider-view-service-name-category">
                                        <h4>Ac Repair</h4>
                                        <p>Ac Service</p>
                                    </div>
                                </div>
                                <div className="provider-view-service-desc">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum exercitationem numquam ipsam?
                                </div>
                                <p className="provider-view-service-created-at badge-service">Creted At 12 Jul </p>
                                <p className="provider-view-service-orders badge-service">no of Orders : 23</p>
                                <p className="provider-view-service-orders badge-service">Total Earnings : $ 34000</p>
                                <p className="provider-view-service-price badge-service">
                                    <p>$1500 / hr</p>
                                </p>
                                <div className="more-btn">
                                    <img src={moreIcon} alt="" />
                                </div>
                            </div>
                            <div className="provider-view-service">
                                <div className="provider-view-service-name-status">
                                    <div className="provider-view-service-name-category">
                                        <h4>Ac Repair</h4>
                                        <p>Ac Service</p>
                                    </div>
                                </div>
                                <div className="provider-view-service-desc">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum exercitationem numquam ipsam?
                                </div>
                                <p className="provider-view-service-created-at badge-service">Creted At 12 Jul </p>
                                <p className="provider-view-service-orders badge-service">no of Orders : 23</p>
                                <p className="provider-view-service-orders badge-service">Total Earnings : $ 34000</p>
                                <p className="provider-view-service-price badge-service">
                                    <p>$1500 / hr</p>
                                </p>
                                <div className="more-btn">
                                    <img src={moreIcon} alt="" />
                                </div>
                            </div>
                            <div className="provider-view-service">
                                <div className="provider-view-service-name-status">
                                    <div className="provider-view-service-name-category">
                                        <h4>Ac Repair</h4>
                                        <p>Ac Service</p>
                                    </div>
                                </div>
                                <div className="provider-view-service-desc">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum exercitationem numquam ipsam?
                                </div>
                                <p className="provider-view-service-created-at badge-service">Creted At 12 Jul </p>
                                <p className="provider-view-service-orders badge-service">no of Orders : 23</p>
                                <p className="provider-view-service-orders badge-service">Total Earnings : $ 34000</p>
                                <p className="provider-view-service-price badge-service">
                                    <p>$1500 / hr</p>
                                </p>
                                <div className="more-btn">
                                    <img src={moreIcon} alt="" />
                                </div>
                            </div>

                        </div>
                    }
                    {
                       tab == "create" &&  <div className="create-service">
                            <h3>Create Service</h3>
                            <div className="create-service-inputs">
                                <div className="provider-view-create-service">
                                    <label htmlFor="FullName">Choose Category</label>
                                    <select name="category" id="">
                                        <option value="">Ac Service</option>
                                    </select>
                                </div>
                                <div className="provider-view-create-service">
                                    <label htmlFor="userName">Choose Service</label>
                                    <select name="service" id="">
                                        <option value="">Ac Service</option>
                                    </select>
                                </div>
                                <div className="provider-view-create-service">
                                    <label htmlFor="userName">Descrription</label>
                                    <input type="text" placeholder="Write Description" />
                                </div>
                                <div className="provider-view-create-service">
                                    <label htmlFor="userName">Price per hour</label>
                                    <input type="text" placeholder="Enter price per hour" />
                                </div>
                                <div className="provider-view-create-service-btn">
                                    Create service
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default ProviderViewServices;