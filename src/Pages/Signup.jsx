import "./Css/Signup.css"
import loginImg from "../assets/login (2).jpg"
import googleIcon from "../assets/google-icon.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import eyeClose from "../assets/eye-close.png"
import eyeOpen from "../assets/eye-open.png"
import { useEffect } from "react"
const Signup = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
    const [userNameError, setUserNameError] = useState()
    const [emailError, setEmailError] = useState()
    const [phoneNumberError, setPhoneNumberError] = useState()
    const [passwordError, setpasswordError] = useState()
    const [isOpened, setIsOpened] = useState(false)
    const emailFormat = /^[a-z]+\d+@[a-z]+.com$/
    useEffect(() => {
    })
    const handleSignup = async () => {
        if (!userName) {
            setUserNameError("UserName is Required")
        }
        else {
            setUserNameError("")
        }
        if (!email) {
            setEmailError("Email is required")
        }
        else {
            if (!emailFormat.test(email)) {
                setEmailError("Enter a valid email addres")
            }
            else {
                setEmailError("")
            }
        }
        if (!phone) {
            setPhoneNumberError("Mobile Number is required")
        }
        else {
            if (phone.length != 10) {
                setPhoneNumberError("Mobile number must 10 character")
            }
            else {
                if (!/^[6-9]{1}/.test(phone) || /[0-9]{9}$/.test(email)) {
                    setPhoneNumberError("Enter a valid mobile Number")
                }
                else {
                    setPhoneNumberError("")
                }
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
                if (!/[a-z]+/.test(password)) {
                    setpasswordError("Enter atleast one small letter")
                }
                else if (!/[A-Z]+/.test(password)) {
                    setpasswordError("Enter atleast one capital letter")
                }
                else if (!/\d+/.test(password)) {
                    setpasswordError("Enter atleast one number")
                }
                else if (!/[!@#$%^&*]+/.test(password)) {
                    setpasswordError("Enter atleast one special character")
                }
                else {
                    setpasswordError("")
                }
            }
        }
        // if (!userNameError || !passwordError || !emailError || !phoneNumberError) {
        //     const response = await axios.post('http://localhost:3000/auth/signup', { userName, email, phoneNumber: phone, password }, { withCredentials: true })
        //     response ? response.data.success == true ?
        //         response.data.message == "signup successfull" && navigate("/") :  // If Success
        //         response.data.message == "user already exist by th email" ? setEmailError("user is already exist by th email") :// IF Not Success
        //             response.data.message == "user already exist by th userName" ? setUserNameError("user is already exist by th userName") :
        //                 response.data.message == "user already exist by the PhoneNumber" ? setPhoneNumberError("user is already exist by the PhoneNumber") : console.log("hello")
        //         :
        //         console.log("Server failure");

        // }
    }

    return (
        <>
            <section className="login">
                <div className="login-container container">
                    <div className="login-left-side">
                        <div className="login-img">
                            <img src={loginImg} alt="" />
                        </div>
                    </div>
                    <div className="login-right-side form-side">
                        <div className="form">
                            <h1>Register</h1>
                            <h4>Create your account today</h4>
                            <form action="" className="signup-form">
                                <div className="username">
                                    <label htmlFor="username">Username</label><br />
                                    <input placeholder="Yourname" onChange={(e) => { setUserName(e.target.value) }} value={userName} type="text" id="username" />
                                    {userNameError ? <p className="error">{userNameError}</p> : <p className="error-clear">No error</p>}
                                </div>
                                <div className="email">
                                    <label htmlFor="email">Email</label><br />
                                    <input placeholder="example@gmail.com" onChange={(e) => { setEmail(e.target.value) }} value={email} type="text" id="email" />
                                    {emailError ? <p className="error">{emailError}</p> : <p className="error-clear">No error</p>}
                                </div>
                                <div className="phone">
                                    <label htmlFor="phone">Phone</label><br />
                                    <input placeholder="Ex : 9345488130" onChange={(e) => { setPhone(e.target.value) }} value={phone} type="number" id="phone" />
                                    {phoneNumberError ? <p className="error">{phoneNumberError}</p> : <p className="error-clear">No error</p>}
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
                            <div onClick={() => { handleSignup() }} className="submit-button">
                                Register
                            </div>
                            <h6>or</h6>
                            <div className="google-auth">
                                <div className="icon"><img src={googleIcon} alt="" /></div>
                                Continue with Google
                            </div>
                            <h5>Already have an account? <Link to="/login">Login here</Link> </h5>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup