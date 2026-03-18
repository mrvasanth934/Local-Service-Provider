import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import "./Css/Forgotpass.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authBase } from "../../url";
import { toast } from "react-toastify";

const Forgotpassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate()
  const [error, setError] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.put(`${authBase}/forget-password`, { email }, { withCredentials: true })
    console.log(response);

    response && response.data.success == false ? setError(response.data.message) : setError("")
    response && response.data.success == false && response.data.message == "can`t sent reset password link to the email" && toast.error(response.data.message)
    response && response.data.success == true && toast.success(response.data.message)
  };
  return (
    <div className="reset-container">
      <div className="reset-box">

        <h3>Forgot Password</h3>

        <p>We'll email you a link to reset your password.</p>

        <form onSubmit={handleSubmit}>

          <div className="input-box">
            <FaEnvelope className="icon" />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>
          {
            error ? <h6 className="error">{error}</h6> : <h6 className="error-clear">email is Required</h6>
          }

          <button type="submit" className="reset-btn">
            Send an email
          </button>

        </form>

        <p onClick={() => { navigate("/login") }} className="back-login">Go back to Login</p>
      </div>

    </div>

  );
}
export default Forgotpassword;