import {useContext,createContext , useState} from "react";
import { toast } from "react-toastify";
import axios from "axios";
import {useNavigate} from "react-router-dom"


const AuthContext=createContext()

const AuthProvider=({children})=>{
    const navigate = useNavigate();
    const [Login, setLogin]=useState({
        user:localStorage.getItem("user"),
        authToken:localStorage.getItem("authToken")
    });

    // ------for login---------------------

    const LoginPage = async ({ email, password }) => {
        try{
            const { data, status } = await axios.post("/api/auth/login", { email, password });
            localStorage.setItem("authToken", data.encodedToken);
            localStorage.setItem("user", data.foundUser.firstName);
            setLogin({...Login,user:data.foundUser.firstName});

            if (status === 200){
                toast.success(`Welcome Back ${data.foundUser.firstName}`)
            }
            navigate("/")

        } catch (err){
            console.log(err);
            toast.error("Failed To Login")
        }
    };


    // for signUp----------

    const SignupPage = async ({firstName, lastName, email, password}) => {
        try{
            const { data, status } = await axios.post("/api/auth/signup",
            {
                firstName,
                lastName,
                email,
                password
            }
            );
            localStorage.setItem("authToken", data.encodedToken);
            localStorage.setItem("user", data.createdUser.firstName);
            setLogin({...Login,user:data.createdUser.firstName});

            if (status === 201){
                toast.success(`Welcome ${data.createdUser.firstName}`)
            }
            navigate("/")
        } catch (err) {
            console.log(err)
            toast.error("Failed To Singup")
        }
    };

    // for logout--------

    const logoutHandler = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        setLogin({...Login, user:false});
        toast.info("Successfully Logout..")
      };

    return(
        <AuthContext.Provider value={{LoginPage ,SignupPage, Login, setLogin,logoutHandler}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth=()=>useContext(AuthContext);

export {useAuth , AuthProvider};