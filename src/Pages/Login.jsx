// import "./Css/Login.css"
import loginImg from "../assets/login (2).jpg"
import googleIcon from "../assets/google-icon.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import eyeClose from "../assets/eye-close.png"
import eyeOpen from "../assets/eye-open.png"
const Login = () => {
    const navigate = useNavigate()
    const [emailOrMobileNumerOrPassword, setEmailOrMobileNumerOrPassword] = useState()
    const [password, setPassword] = useState()
    const [emailError, setEmailError] = useState()
    const [passwordError, setpasswordError] = useState()
    const [isOpened, setIsOpened] = useState(false)
    const emailFormat = /^[a-z]+\d+@[a-z]+.com$/
    const handleLogin = async () => {
        console.log(emailOrMobileNumerOrPassword);
        if (!emailOrMobileNumerOrPassword) {
            setEmailError("UserName or Emailid or MobileNumber are required")
        }
        else {
            if (!isNaN(emailOrMobileNumerOrPassword)) {
                if (emailOrMobileNumerOrPassword.length != 10) {
                    setEmailError("Mobile number must 10 character")
                }
                else {
                    if (!/^[6-9]{1}/.test(emailOrMobileNumerOrPassword) || /[0-9]{9}$/.test(emailOrMobileNumerOrPassword)) {
                        setPhoneNumberError("Enter a valid mobile Number")
                    }
                    else {
                        setPhoneNumberError("")
                    }
                }
            }
            else{
                setEmailError("")
            }
        }
        if (!password) {
            setpasswordError("Password is Required")
        }
        else {
            if (password.length < 8) {
                setpasswordError("password must 8 character")
            }
            else {
                setpasswordError("")
            }
        }
        // if (!emailError | !passwordError) {
        //     const response = await axios.post('http://localhost:3000/auth/login', { userField: emailOrMobileNumerOrPassword, password }, { withCredentials: true })
        //     response ? response.data.success == true ?
        //     response.data.message == "login successfull" && navigate("/"):  //If Success
        //     response.data.message == "user can`t find continue with signup" ? setEmailError("user can`t find continue with signup") : //If Not Success
        //     response.data.message == "password can`t matched" && setpasswordError("password can`t matched"): 
        //     console.log("server failure")
        // }
    }
    // const getProfile = async () => {
    //     const respose = await axios.get('http://localhost:3000/auth/profile', { withCredentials: true })
    //     respose ? respose.data.success == true && respose.data.user && navigate("/profile") : console.log();
    // }
    // useEffect(() => {
    //     getProfile()
    // })
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
                            <h5>Don` have an account? <Link to="/register">Register here</Link></h5>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Login