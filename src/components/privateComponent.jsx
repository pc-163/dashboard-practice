import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () => {
    const isAuthenticated = localStorage.getItem("usersignup");
    return isAuthenticated ? <Outlet /> : <Navigate to="/register" />;
}


export default PrivateComponent