import "./Css/UsersProvidersServices.css"
const Users = () => {
    return (
        <>
            <div className="serch-bar-sort">
                <div className="admin-serch-box">
                    <input placeholder="Serch users" type="text" name="" id="" />
                </div>
                <div className="sort-btn">
                    Sort By
                </div>
            </div>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>User Id</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Role</th>
                        <th>Last Login</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <br />
                <tbody className="tbody">
                    <tr>
                        <td>1</td>
                        <td>#93454312323</td>
                        <td>Vasanth kumar</td>
                        <td>mrvasanth93@gmail.com</td>
                        <td>9345488130</td>
                        <td>User</td>
                        <td>12 Jul</td>
                        <td className="action">...</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>#93454312323</td>
                        <td>Vasanth kumar</td>
                        <td>mrvasanth93@gmail.com</td>
                        <td>9345488130</td>
                        <td>User</td>
                        <td>12 Jul</td>
                        <td className="action">...</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>#93454312323</td>
                        <td>Vasanth kumar</td>
                        <td>mrvasanth93@gmail.com</td>
                        <td>9345488130</td>
                        <td>User</td>
                        <td>12 Jul</td>
                        <td className="action">...</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>#93454312323</td>
                        <td>Vasanth kumar</td>
                        <td>mrvasanth93@gmail.com</td>
                        <td>9345488130</td>
                        <td>User</td>
                        <td>12 Jul</td>
                        <td className="action">...</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>#93454312323</td>
                        <td>Vasanth kumar</td>
                        <td>mrvasanth93@gmail.com</td>
                        <td>9345488130</td>
                        <td>User</td>
                        <td>12 Jul</td>
                        <td className="action">...</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Users