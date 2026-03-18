import React, { useState } from "react";
import "./Css/Resetpassword.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { authBase } from "../../url";
import { toast } from "react-toastify";

const ResetPassword = ()=> {
    const location = useLocation()
    const token = location.pathname.split("/")[2]
    
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate()

    const isSuccess = (msg) =>{
        toast.success(msg)
        navigate("/login")
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await axios.put(`${authBase}/reset-password/${token}`,{newPassword : password,confirmPassword})
        console.log(response);
        response && response.data.success == false && toast.error(response.data.message)
        response && response.data.success == true && response.data.message == "your password is reseted" && isSuccess(response.data.message)
    }

    return (

        <div className="resetpassword-container">

            <div className="resetpassword-box">

                <h3>Reset Password</h3>
                <p>Create a new password for your account</p>

                <form onSubmit={handleSubmit}>
                    <div className="inputbox1">
                        <input
                            type="password"
                            placeholder="New Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {/* <h6 className="error">hello</h6> */}

                    <div className="inputbox2">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    {/* <h6 className="error">hello</h6> */}

                    <button type="submit">
                        Reset Password
                    </button>

                </form>

                <p onClick={()=>{navigate('/login')}} className="back">Go back to Login</p>

            </div>

        </div>

    )

}

export default ResetPassword;