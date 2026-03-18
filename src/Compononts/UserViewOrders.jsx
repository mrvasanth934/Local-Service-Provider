import "./Css/ProviderViewServices.css"
import moreIcon from "../assets/icons8-more-30.png"
import { useEffect, useState } from "react"
import axios from "axios"
import { orderBase } from "../../url"
import Model from "./Model"
const UserViewOrders = () => {
    const [tab, setTab] = useState("all")
    const [orders, setOrders] = useState()
    const [showModel, setShowModel] = useState(false)
    const isFailed = async () => {
        await cookieStore.set("token", "")
        navigate("/login")
    }
    const getMyOrders = async () => {
        try {
            const response = await axios.get(`${orderBase}/my-orders`, { withCredentials: true })
            response && response.data.success == true && response.data.message == "my orders" && setOrders(response.data.data)
            response && response.data.success == false && (response.data.message == "continue with login" || response.data.message == "unAuthorized token" || response.data.message == "can`t find user" || response.data.message == "error from get profile") && isFailed()
            console.log(response);

        } catch (error) {
            error && error.message == "Network Error" && navigate("/server-error-response")
        }
    }
    useEffect(() => {
        getMyOrders()
    }, [])
    const modelContent = () => {
        const [mainModelTab, setMainModeltab] = useState("pay")
        const [subModeltab, setSubModelTab] = useState("card")
        return (
            <>
                <div className="orderModel">
                    <div className="model-heading">
                        <h5>Manage Order</h5>
                        <h5 onClick={() => { setShowModel(false) }} className="clse-btn">&times;</h5>
                    </div>
                    <hr className="model-heading" />
                    <div className="order-model-btn-option">
                        <div onClick={() => { setMainModeltab("pay") }} className={mainModelTab == "pay" ? "order-model-btn visible" : "order-model-btn"}>Pay Now</div>
                        <div onClick={() => { setMainModeltab("order-cancel") }} className={mainModelTab == "order-cancel" ? "order-model-btn visible" : "order-model-btn"}>Cancel order</div>
                    </div>
                    {
                        mainModelTab == "order-cancel" && <div className="order-cancel-form">
                            <select className="order-cancel-option" name="order-cancel-option" id="">
                                <option value="">option-1</option>
                                <option value="">option-2</option>
                                <option value="">option-3</option>
                                <option value="">option-4</option>
                            </select>
                            <textarea className="order-cancel-message" placeholder="Write description why are you cancel order" name="order-message" id=""></textarea>
                            <div className="order-cancel-btn">Cancel Now</div>
                        </div>
                    }
                    {
                        mainModelTab == "pay" && <>
                            <div className="pay-now-form">
                                {
                                    subModeltab == "card" && <>
                                        <h4 className="pay-now-form-heading">Enter Your Card Details</h4>
                                        <hr className="model-heading" />
                                        <div className="pay-now-form-card">
                                            <div className="card-number">
                                                <label htmlFor="">Card Number</label>
                                                <input type="text" placeholder="Card number" />
                                            </div>
                                            <div>
                                                <label htmlFor="">Cvv</label>
                                                <input type="text" placeholder="Cvv Number" />
                                            </div>
                                        </div>
                                        <h6 onClick={() => { setSubModelTab("upi") }} className="pay-now-form-method">Try Using Card</h6>
                                        <div style={{ marginTop: "20px" }} className="order-cancel-btn">Pay Now</div>
                                    </>
                                }
                                {
                                    subModeltab == "upi" && <>
                                        <h4 className="pay-now-form-heading">Enter Your UPI Details</h4>
                                        <hr className="model-heading" />
                                        <div className="pay-now-form-card">
                                            <div style={{ width: "100%" }} className="card-number">
                                                <label htmlFor="">Enter Your UPI Id</label>
                                                <input type="text" placeholder="Upi id" />
                                            </div>
                                        </div>
                                        <h6 onClick={() => { setSubModelTab("card") }} className="pay-now-form-method">Try Using UPI</h6>
                                        <div style={{ marginTop: "20px" }} className="order-cancel-btn">Pay Now</div>
                                    </>
                                }
                            </div>
                        </>
                    }
                </div>
            </>
        )
    }
    return (
        <>
            {
                showModel && <Model width="79%" element={modelContent} />
            }
            <div className="provider-view-services">
                <div className="provider-view-services-container">
                    <div className="provider-view-services-navs">
                        <div onClick={() => { setTab("all") }} className={tab == "all" ? "provider-view-service-nav isActive" : "provider-view-service-nav"}>All Orders</div>
                    </div>
                    {
                        (tab == "all") && <div className="provider-view-services-lists">
                            {
                                orders && orders.map((order) => {
                                    return <div className="provider-view-service">
                                        {console.log(order)
                                        }
                                        <div className="provider-view-service-name-status">
                                            <div className="provider-view-service-name-category">
                                                <h4>{order && order.service.serviceName}</h4>
                                                <p>{order && order.service.serviceCategory}</p>
                                            </div>
                                            <p>{order && order.orderStatus}</p>
                                        </div>
                                        <div className="badge-flex">
                                            <p className="badge">Provider : {order && order.provider.userName}</p>
                                            <p className="badge">username : Vasanth</p>
                                        </div>
                                        <div className="badge-flex">
                                            <p className="provider-view-service-created-at badge">Location : Thiruvaur</p>
                                            {/* `${order && order.orderedDate.split("-")[1]}  ${order && order.orderedDate.split("-")[2]}` */}
                                            <p className="provider-view-service-orders badge">Orderd At : {order && order.createdAt.split("-")[2].split("T")[0]}-{order && order.createdAt.split("-")[1]}-{order && order.createdAt.split("-")[0][2]}{order && order.createdAt.split("-1")[0][3]}</p>
                                        </div>
                                        <div className="badge-flex">
                                            <p className="provider-view-service-created-at badge">Excepted At At : {order && order.orderedDate.split("-")[2].split("T")[0]}-{order && order.orderedDate.split("-")[1]}-{order && order.orderedDate.split("-")[0][2]}{order && order.orderedDate.split("-1")[0][3]}</p>
                                            <p className="provider-view-service-orders badge">Payment Method :{order && order.payment.paymentMethod}</p>
                                        </div>
                                        <div className="provider-view-service-price badge">
                                            <p>$ {order && order.orderTotal}</p>
                                        </div>
                                        <div onClick={() => { setShowModel(true) }} className="more-btn">
                                            <img src={moreIcon} alt="" />
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default UserViewOrders;