// import "./Css/Login.css"
import loginImg from "../assets/login (2).jpg"
import googleIcon from "../assets/google-icon.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import eyeClose from "../assets/eye-close.png"
import eyeOpen from "../assets/eye-open.png"
import axios from "axios"
import { authBase } from "../../url"
import { toast } from "react-toastify"
const Login = () => {
    const navigate = useNavigate()
    const [emailOrMobileNumerOrPassword, setEmailOrMobileNumerOrPassword] = useState()
    const [password, setPassword] = useState()
    const [emailError, setEmailError] = useState()
    const [passwordError, setpasswordError] = useState()
    const [isOpened, setIsOpened] = useState(false)
    const getProfile = async () => {
        const response = await axios.get(`${authBase}/profile`, { withCredentials: true })
        response && response.data.success == true && navigate("/")
    }
    useEffect(() => {
        getProfile()
    }, [])
    const isSuccess = () =>{
        toast.success("login successfull")
        navigate("/")
    }
    const handleLogin  = async() =>{
        const response = await axios.post(`${authBase}/login`,{userCredintials:emailOrMobileNumerOrPassword,password},{withCredentials:true})
        response && response.data.success == false && (response.data.message == "email, userName or mobileNumber is required" || response.data.message.includes("email") || response.data.message.includes("number") || response.data.message.includes("mobile") || response.data.message.includes("userName"))  ? setEmailError(response.data.message) : setEmailError("") 
        response && response.data.success == false && response.data.message.includes("password") ? setpasswordError(response.data.message) : setpasswordError("") 
        response && response.data.success == true &&  response.data.message == "login successfull" && isSuccess()
    }
    return (
        <>
            <section className="login">
                <div className="login-container">
                    <div className="login-left-side">
                        <div className="login-img">
                            <img src={loginImg} alt="" />
                        </div>
                    </div>
                    <div className="login-right-side">
                        <div className="form">
                            <h1>Login</h1>
                            <h4>Welcome back, let's get started</h4>
                            <form action="">
                                <div className="email">
                                    <label htmlFor="email">Email</label><br />
                                    <input value={emailOrMobileNumerOrPassword} onChange={(e) => { setEmailOrMobileNumerOrPassword(e.target.value) }} placeholder="Email or UserName or Mobile Number" type="text" id="email" />
                                    {emailError ? <p className="error">{emailError}</p> : <p className="error-clear">No error</p>}
                                </div>
                                <div className="password">
                                    <label htmlFor="">Password</label><br />
                                    <div className="password-container">
                                        <input placeholder="password" onChange={(e) => { setPassword(e.target.value) }} value={password} type={isOpened ? "text" : "password"} id="password" />
                                        <div onClick={() => { setIsOpened(!isOpened) }} className="passwordshow"><img src={isOpened ? eyeOpen : eyeClose} alt="" /></div>
                                    </div>
                                    {passwordError ? <p className="error">{passwordError}</p> : <p className="error-clear">No error</p>}
                                </div>
                            </form>
                            <div onClick={() => { handleLogin() }} className="submit-button">
                                Login
                            </div>
                            <h6>or</h6>
                            <div className="google-auth">
                                <div className="icon"><img src={googleIcon} alt="" /></div>
                                Continue with Google
                            </div>
                            <h5>Don` have an account? <Link to="/signup">Register here</Link></h5>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Login