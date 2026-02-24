import { useState } from "react"
import "./Css/AdminManagement.css"
import Users from "./Users"
const AdminManagement = () =>{
    const [tab,setTab] = useState("users")
    return(
        <>
            <div className="admin-manage">
                <div className="admin-manage-container">
                    <div className="admin-manage-navs">
                        <div onClick={()=>{setTab("users")}} className={tab == "users" ? "provider-view-service-nav isActive" : "provider-view-service-nav"}>Users</div>
                        <div onClick={()=>{setTab("providers")}} className={tab == "providers" ? "provider-view-service-nav isActive" : "provider-view-service-nav"}>Providers</div>
                        <div onClick={()=>{setTab("services")}} className={tab == "services" ? "provider-view-service-nav isActive" : "provider-view-service-nav"}>Services</div>
                        <div onClick={()=>{setTab("payments")}} className={tab == "payments" ? "provider-view-service-nav isActive" : "provider-view-service-nav"}>Payments</div>
                    </div>
                    <div className="userProviderService-container">
                        <Users/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminManagement