import {useAuth} from "../Context/Auth-context"
import {Navigate, useLocation} from "react-router-dom";

const RequireAuth=({children})=>{
    const {Login}=useAuth()
    const location=useLocation()
    console.log(location)

    return Login ? (
        children
    ):(
        <Navigate to="/login" state={{from:location}} replace/>

    )
    
}

export default RequireAuth;