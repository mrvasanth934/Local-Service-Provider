import { useState } from "react"
import "./Css/Update_profile.css"
import { useNavigationType } from "react-router-dom"
import axios from "axios"
import { authBase } from "../../url"
import { toast } from "react-toastify"
const Update_profile = () => {
    const [userName, setUsername] = useState()
    const [email, setEmail] = useState()
    const [mobileNumber, setMobileNumber] = useState()
    const isUserNameUpdateSuccess = () =>{
        toast.success(response.data.message)
        setUsername("")
    }
    const isEmailUpdateSuccess = () =>{
        toast.success(response.data.message)
        setUsername("")
    }
    const isPasswordUpdateSuccess = () =>{
        toast.success(response.data.message)
        setUsername("")
    }
    const updateUsername = async () => {
        const response = await axios.put(`${authBase}/update-username`, { userName }, { withCredentials: true })
        response && response.data.success == false && toast.error(response.data.message)
        response && response.data.success == true && isUserNameUpdateSuccess()
    }
    const updateEmail = async () => {
        const response = await axios.put(`${authBase}/update-email`, { email }, { withCredentials: true })
        response && response.data.success == false && toast.error(response.data.message)
        response && response.data.success == true && isEmailUpdateSuccess()
    }
    const updateMobileNumber = async () => {
        const response = await axios.put(`${authBase}/update-mobile-number`, { mobileNumber }, { withCredentials: true })
        response && response.data.success == false && toast.error(response.data.message)
        response && response.data.success == true && isPasswordUpdateSuccess()
    }
    return (
        <>
            <div className="update-profile">
                <div className="update-profile-container">
                    <div className="personal-info update-profile-section">
                        <h3>Personal Info</h3>
                        <div className="update-profile-inputs">
                            {/* <div className="update-profile-input">
                                <label htmlFor="FullName">Full Name</label>
                                <input type="text" placeholder="Fullname" />
                            </div> */}
                            <div className="update-profile-input grid2">
                                <label htmlFor="userName">User Name</label>
                                <input onChange={(e) => { setUsername(e.target.value) }} value={userName} type="text" placeholder="Username" />
                            </div>
                            <div onClick={() => { updateUsername() }} className="update-profile-btn">
                                Update
                            </div>
                        </div>
                    </div>
                    <div className="personal-info update-profile-section">
                        <h3>Email</h3>
                        <div className="update-profile-inputs">
                            <div className="update-profile-input grid2">
                                <label htmlFor="FullName">Email</label>
                                <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="text" placeholder="Email" />
                            </div>
                            <div onClick={() => { updateEmail() }} className="update-profile-btn">
                                Update
                            </div>
                        </div>
                    </div>
                    <div className="personal-info update-profile-section">
                        <h3>Mobile Number</h3>
                        <div className="update-profile-inputs">
                            <div className="update-profile-input grid2">
                                <label htmlFor="FullName">Mobile Number</label>
                                <input onChange={(e) => { setMobileNumber(e.target.value) }} value={mobileNumber} type="text" placeholder="Mobile number" />
                            </div>
                            <div onClick={() => { updateMobileNumber() }} className="update-profile-btn">
                                Update
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Update_profile