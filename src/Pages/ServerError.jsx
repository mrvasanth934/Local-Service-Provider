import axios from "axios"
import { useEffect, useState } from "react"
import { authBase } from "../../url"
import { useNavigate } from "react-router-dom"
const ServerError = () =>{    
    const navigate = useNavigate()
    const getProfile = async () => {
        try {
            const response = await axios.get(`${authBase}/profile`, { withCredentials: true })
            response && navigate("/")
        } catch (error) {
            error && error.message == "Network Error" && navigate("/server-error-response")
        }
    }
    useEffect(() => {
        getProfile()
    }, [])
    return (
        <>
            <div style={{display:"flex",alignItems:"start",justifyContent:"center",height:"100vh",flexDirection:"column",textAlign:"left",marginLeft:"200px"}} className="server-error">
                <h1>This site can`t be reached</h1>
                <h5 style={{color:"rgb(171, 171, 171)",marginTop:"20px",fontWeight:"normal"}}>Local Service Provider   refused to connect</h5>
                <h6 style={{color:"rgb(171, 171, 171)",marginTop:"20px",fontWeight:"normal"}}>Chck Your Internet Conection</h6>
                <h5 style={{marginTop:"30px",fontWeight:"normal", backgroundColor:"blue",padding:"10px 20px",color:"white",borderRadius:"50px"}}>Reload</h5>
            </div>
        </>
    )
}
export default ServerError