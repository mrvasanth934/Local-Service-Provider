import "./Css/Password_security.css"
const Password_security = () =>{
    return(
        <>
            <div className="password-security">
                <div className="password-security-container">
                    <div className="password-security-section">
                        <h3>Change Password</h3>
                        <div className="update-profile-inputs">
                            <div className="update-profile-input password-update">
                                <label htmlFor="FullName">Old Password</label>
                                <input type="text" placeholder="Old Password" />
                            </div>
                            <div className="update-profile-input password-update">
                                <label htmlFor="userName">New Password</label>
                                <input type="text" placeholder="New Password" />
                            </div>
                            <div className="update-profile-input password-update">
                                <label htmlFor="userName">Confirm Password</label>
                                <input type="text" placeholder="Confirm Password" />
                            </div>
                            <div className="update-profile-btn password-update-btn">
                                Update
                            </div>
                        </div>
                    </div>
                    <div className="password-security-section">
                        <h3>Forgot Password</h3>
                        <div className="update-profile-inputs">
                            <div className="update-profile-input grid3">
                                <label htmlFor="FullName">Email</label>
                                <input type="text" placeholder="Enter your Email to Update your Password" />
                            </div>
                            <div className="update-profile-btn password-update-btn">
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