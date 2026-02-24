import "./Css/ProviderViewServices.css"
import moreIcon from "../assets/icons8-more-30.png"
import { useState } from "react"
const ProviderViewOrders = () => {
    const [tab,setTab] = useState("all")
    return (
        <>
            <div className="provider-view-services">
                <div className="provider-view-services-container">
                    <div className="provider-view-services-navs">
                        <div onClick={()=>{setTab("all")}} className={tab == "all" ? "provider-view-service-nav isActive" : "provider-view-service-nav"}>View All Orders</div>
                        <div onClick={()=>{setTab("pending")}} className={tab == "pending" ? "provider-view-service-nav isActive" : "provider-view-service-nav"}>Pending Orders</div>
                        <div onClick={()=>{setTab("completed")}} className={tab == "completed" ? "provider-view-service-nav isActive" : "provider-view-service-nav"}>Completed Orders</div>
                        <div onClick={()=>{setTab("ongoing")}} className={tab == "ongoing" ? "provider-view-service-nav isActive" : "provider-view-service-nav"}>OnGoing Orders</div>
                    </div>
                    {
                        (tab == "all" || tab == "pending" || tab == "completed" || tab == "ongoing") && <div className="provider-view-services-lists">
                        <div className="provider-view-service">
                            <div className="provider-view-service-name-status">
                                <div className="provider-view-service-name-category">
                                    <h4>Ac Repair</h4>
                                    <p>Ac Service</p>
                                </div>
                                <p>OnGoing</p>
                            </div>
                            <p className="badge-flex"><p className="badge">User Id : #3243345654</p> <p className="badge">Service Id : #3243345654</p></p>
                            <p className="badge-flex"><p className="provider-view-service-created-at badge">Orderd At 12 Jul </p>
                            <p className="provider-view-service-orders badge">Completed At 15 Jul</p></p>
                            <p className="badge-flex"><p className="provider-view-service-created-at badge">Paid At 12 Jul </p>
                            <p className="provider-view-service-orders badge">Payment Id : #565676890</p></p>
                            <p className="provider-view-service-price badge">
                                <p>$ 1500</p>
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
                                <p>OnGoing</p>
                            </div>
                            <p className="badge-flex"><p className="badge">User Id : #3243345654</p> <p className="badge">Service Id : #3243345654</p></p>
                            <p className="badge-flex"><p className="provider-view-service-created-at badge">Orderd At 12 Jul </p>
                            <p className="provider-view-service-orders badge">Completed At 15 Jul</p></p>
                            <p className="badge-flex"><p className="provider-view-service-created-at badge">Paid At 12 Jul </p>
                            <p className="provider-view-service-orders badge">Payment Id : #565676890</p></p>
                            <p className="provider-view-service-price badge">
                                <p>$ 1500</p>
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
                                <p>OnGoing</p>
                            </div>
                            <p className="badge-flex"><p className="badge">User Id : #3243345654</p> <p className="badge">Service Id : #3243345654</p></p>
                            <p className="badge-flex"><p className="provider-view-service-created-at badge">Orderd At 12 Jul </p>
                            <p className="provider-view-service-orders badge">Completed At 15 Jul</p></p>
                            <p className="badge-flex"><p className="provider-view-service-created-at badge">Paid At 12 Jul </p>
                            <p className="provider-view-service-orders badge">Payment Id : #565676890</p></p>
                            <p className="provider-view-service-price badge">
                                <p>$ 1500</p>
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
                                <p>OnGoing</p>
                            </div>
                            <p className="badge-flex"><p className="badge">User Id : #3243345654</p> <p className="badge">Service Id : #3243345654</p></p>
                            <p className="badge-flex"><p className="provider-view-service-created-at badge">Orderd At 12 Jul </p>
                            <p className="provider-view-service-orders badge">Completed At 15 Jul</p></p>
                            <p className="badge-flex"><p className="provider-view-service-created-at badge">Paid At 12 Jul </p>
                            <p className="provider-view-service-orders badge">Payment Id : #565676890</p></p>
                            <p className="provider-view-service-price badge">
                                <p>$ 1500</p>
                            </p>
                            <div className="more-btn">
                                <img src={moreIcon} alt="" />
                            </div>
                        </div> 
                        
                    </div>
                    }
                </div>
            </div>
        </>
    )
}

export default ProviderViewOrders;