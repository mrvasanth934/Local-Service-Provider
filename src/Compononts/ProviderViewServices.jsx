import "./Css/ProviderViewServices.css"
import moreIcon from "../assets/icons8-more-30.png"
import { useEffect, useState } from "react"
import axios from "axios"
import { serviceBase } from "../../url"
import { toast } from "react-toastify"
const ProviderViewServices = () => {
    const [serviceCategory,setServiceCategory] = useState()
    const [serviceName,setServiceName] = useState()
    const [servicePrice,setServicePrice] = useState()
    const [experince,setExperience] = useState()
    const [description,setDescription] = useState()
    const categories = [
        { category: "AC & Cooling", services: ["AC Repair & Installation"] },
        { category: "Plumbing", services: ["Plumbing Service", "Tap Repair", "Pipe Leakage Fix"] },
        { category: "Electrical", services: ["Electrical Repair", "Fan Installation", "Switchboard Repair", "Light Installation", "Wiring Work", "Inverter Setup"] },
        { category: "Water Appliances", services: ["Geyser Repair", "RO Water Purifier Service"] },
        { category: "Cleaning", services: ["Full House Deep Cleaning", "Kitchen Cleaning"] },
        { category: "Painting", services: ["Interior Painting", "Exterior Painting"] },
        { category: "Furniture & Carpentry", services: ["Furniture Repair", "Door Installation", "Cupboard Installation", "Custom Furniture Work"] },
        { category: "Construction & Interior", services: ["Tile Installation", "False Ceiling Installation", "Modular Kitchen Setup"] },
        { category: "Gardening", services: ["Tree Cutting", "Plant Maintenance"] },
        { category: "Glass & Windows", services: ["Sliding Door Repair", "Glass Replacement", "Window Installation"] }
    ]
    const [showServicesByCategory, setShowServicesByCategory] = useState(0)
    const [tab, setTab] = useState("create")
    const isSuccess = (message) =>{
        setServiceCategory("")
        setServiceName("")
        setExperience("")
        setDescription("")
        setServicePrice("")
        toast.success(message)
    }
    const createService = async () => {
        try {
            const response = await axios.post(`${serviceBase}/create-service`, {serviceName, serviceCategory, serviceDescription:description, servicePrice, providerExperince:experince}, { withCredentials: true })
            response && response.data.success == true && isSuccess(response.data.message)
            response && response.data.success == false && toast.error(response.data.message)
        } catch (error) {
            error && error.message == "Network Error" && navigate("/server-error-response")
        }
    }
    const getProviderServices = async () =>{
        try {
            const response = await axios.get(`${serviceBase}/provider-services`,{withCredentials:true})
            console.log(response);
            
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        getProviderServices()
    })
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
                                    $1500 / hr
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
                                $1500 / hr
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
                                    $1500 / hr
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
                                $1500 / hr
                                </p>
                                <div className="more-btn">
                                    <img src={moreIcon} alt="" />
                                </div>
                            </div>

                        </div>
                    }
                    {
                        tab == "create" && <div className="create-service">
                            <h3>Create Service</h3>
                            <div className="create-service-inputs">
                                <div className="provider-view-create-service">
                                    <label htmlFor="FullName">Choose Service Category</label>
                                    <select onClick={(e) => {
                                        setShowServicesByCategory(e.target.selectedIndex)
                                        setServiceCategory(e.target.value)
                                    }} name="category" id="">
                                        {
                                            categories.map((category, i) => {
                                                return <option key={i} value={category.category} onClick={() => { alert("hello") }}>{category.category}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="provider-view-create-service">
                                    <label htmlFor="userName">Choose Service Name</label>
                                    <select onClick={(e)=>{
                                        setServiceName(e.target.value)
                                    }} name="service" id="">
                                        {
                                            categories[showServicesByCategory].services.map((service, i) => {
                                                return <option key={i} value={service}>{service}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="provider-view-create-service">
                                    <label htmlFor="userName">Enter Experince</label>
                                    <input onChange={(e)=>{setExperience(e.target.value)}} value={experince} type="number" placeholder="1.5" />
                                </div>
                                <div className="provider-view-create-service">
                                    <label htmlFor="userName">Service Price</label>
                                    <input onChange={(e)=>{setServicePrice(e.target.value)}} value={servicePrice} type="number" placeholder="Enter price" />
                                </div>
                                <div className="provider-view-create-service desc">
                                    <label htmlFor="userName">Service Description</label>
                                    <textarea onChange={(e)=>{setDescription(e.target.value)}} value={description} name="" id=""></textarea>
                                </div>
                                <div onClick={()=>{createService()}}  className="provider-view-create-service-btn">
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