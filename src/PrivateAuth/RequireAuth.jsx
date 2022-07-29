import {useAuth} from "../Context/Auth-context"
import {Navigate, useLocation} from "react-router-dom";

const RequireAuth=({children})=>{
    const {Login : {user}}=useAuth()
    const location=useLocation()

    return user ? (
        children
    ):(
        <Navigate to="/login" state={{pathname: location.pathname }} replace />

    )
    
}

export default RequireAuth;