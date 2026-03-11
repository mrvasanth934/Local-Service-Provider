import "./Css/ProviderViewServices.css"
import moreIcon from "../assets/icons8-more-30.png"
import { useEffect, useState } from "react"
import axios from "axios"
import { orderBase } from "../../url"
const UserViewOrders = () => {
    const [tab, setTab] = useState("all")
    const [orders, setOrders] = useState()
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
    return (
        <>
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
                                            <p className="provider-view-service-orders badge">Orderd At 12 Jul</p>
                                        </div>
                                        <div className="badge-flex">
                                            <p className="provider-view-service-created-at badge">Completed At 15 Jul</p>
                                            <p className="provider-view-service-orders badge">Payment Id : #565676890</p>
                                        </div>
                                        <div className="provider-view-service-price badge">
                                            <p>$ 1500</p>
                                        </div>
                                        <div className="more-btn">
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