import "./Css/ProviderViewServices.css"
import moreIcon from "../assets/icons8-more-30.png"
import { useState } from "react"
import Model from "./Model"
const ProviderViewOrders = () => {
    const [tab, setTab] = useState("all")
    const [showModel, setShowModel] = useState(false)
    const ProviderModel = () => {
        return (
            <>
                <div className="orderModel"><div className="model-heading">
                    <h5>Manage Order</h5>
                    <h5 onClick={()=>{setShowModel(false)}} className="clse-btn">&times;</h5>
                </div>
                    <hr className="model-heading" />
                    <h4 className="pay-now-form-heading">Update Order Status</h4>
                    <div className="order-cancel-form ">
                        <select className="order-cancel-option" name="order-cancel-option" id="">
                            <option value="">option-1</option>
                            <option value="">option-2</option>
                            <option value="">option-3</option>
                            <option value="">option-4</option>
                        </select>
                        <div className="order-cancel-btn">Update</div>
                    </div></div>
            </>
        )
    }
    return (
        <>
            {showModel && <Model width="79%" element={ProviderModel} />}
            <div className="provider-view-services">
                <div className="provider-view-services-container">
                    <div className="provider-view-services-navs">
                        <div onClick={() => { setTab("all") }} className={tab == "all" ? "provider-view-service-nav isActive" : "provider-view-service-nav"}>View All Orders</div>
                        <div onClick={() => { setTab("pending") }} className={tab == "pending" ? "provider-view-service-nav isActive" : "provider-view-service-nav"}>Pending Orders</div>
                        <div onClick={() => { setTab("completed") }} className={tab == "completed" ? "provider-view-service-nav isActive" : "provider-view-service-nav"}>Completed Orders</div>
                        <div onClick={() => { setTab("ongoing") }} className={tab == "ongoing" ? "provider-view-service-nav isActive" : "provider-view-service-nav"}>OnGoing Orders</div>
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
                                <p className="badge-flex"><p className="badge">User Id : #3243345654</p> <p className="badge">username : Vasanth</p></p>
                                <p className="badge-flex"><p className="provider-view-service-created-at badge">Location : Thiruvaur</p>
                                    <p className="provider-view-service-orders badge">Orderd At 12 Jul</p></p>
                                <p className="badge-flex"><p className="provider-view-service-created-at badge">Completed At 15 Jul</p>
                                    <p className="provider-view-service-orders badge">Payment Id : #565676890</p></p>
                                <p className="provider-view-service-price badge">
                                    <p>$ 1500</p>
                                </p>
                                <div onClick={()=>{setShowModel(true)}} className="more-btn">
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