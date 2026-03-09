import { useState } from "react"
import "./Css/Password_security.css"
import axios from "axios"
import { toast } from "react-toastify"
import { authBase } from "../../url"
const Password_security = () => {
    const [oldpassword, setOldPassword] = useState()
    const [newPassword, setNewPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [resetPasswordEmail, setResetPasswordEmail] = useState()
    const updateMobileNumber = async () => {
        const isSuccess = (message) => {
            toast.success(message)
            setOldPassword("")
            setNewPassword("")
            setConfirmPassword("")
        }
        try {
            const response = await axios.put(`${authBase}/change-password`, { currentPassword: oldpassword, newPassword, confirmPassword }, { withCredentials: true })
            response && response.data.success == false && toast.error(response.data.message)
            response && response.data.success == true && isSuccess(response.data.message)
        } catch (error) {
            error && error.message == "Network Error" && navigate("/server-error-response")
        }
    }
    const handleForgetPassword = async () => {
        const isSuccessForgetPassword = (message)=>{
            toast.success(message)
        }
        try {
            const response = await axios.put(`${authBase}/forget-password`, {email:resetPasswordEmail})
            response && response.data.success == false && toast.error(response.data.message)
            response && response.data.success == true && isSuccessForgetPassword(response.data.message)
        } catch (error) {
            error && error.message == "Network Error" && navigate("/server-error-response")
        }
    }
    return (
        <>
            <div className="password-security">
                <div className="password-security-container">
                    <div className="password-security-section">
                        <h3>Change Password</h3>
                        <div className="update-profile-inputs">
                            <div className="update-profile-input password-update">
                                <label htmlFor="FullName">Current Password</label>
                                <input onChange={(e) => { setOldPassword(e.target.value) }} value={oldpassword} type="text" placeholder="Old Password" />
                            </div>
                            <div className="update-profile-input password-update">
                                <label htmlFor="userName">New Password</label>
                                <input onChange={(e) => { setNewPassword(e.target.value) }} value={newPassword} type="text" placeholder="New Password" />
                            </div>
                            <div className="update-profile-input password-update">
                                <label htmlFor="userName">Confirm Password</label>
                                <input onChange={(e) => { setConfirmPassword(e.target.value) }} value={confirmPassword} type="text" placeholder="Confirm Password" />
                            </div>
                            <div onClick={() => { updateMobileNumber() }} className="update-profile-btn password-update-btn">
                                Update
                            </div>
                        </div>
                    </div>
                    <div className="password-security-section">
                        <h3>Forgot Password</h3>
                        <div className="update-profile-inputs">
                            <div className="update-profile-input grid3">
                                <label htmlFor="FullName">Email</label>
                                <input onChange={(e)=>{setResetPasswordEmail(e.target.value)}} value={resetPasswordEmail} type="text" placeholder="Enter your Email to Update your Password" />
                            </div>
                            <div onClick={() => { handleForgetPassword() }} className="update-profile-btn password-update-btn">
                                Update
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Password_security