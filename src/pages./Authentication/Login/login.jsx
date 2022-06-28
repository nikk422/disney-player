import { useAuth } from "../../../Context/Auth-context";
import { useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import { Link } from "react-router-dom";
import Navbar from "../../../Componant/Navbar/Navbar";
import axios from 'axios';
import {  toast } from 'react-toastify';


const Login = () => {
  const { setLogin,setIsStatus } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const loginHandler = () => {
    setLogin((Login) => !Login);
    navigate(location.state.from.pathname); 
  };
  const clickHandler = async()=>{
    try{
      const res = await axios.post("/api/auth/login", {
        email: "nikmalviya422@gmail.com",
        password: "nikhil@123"
      })
      localStorage.setItem("authToken", res.data.encodedToken)
      toast.success("Login is successfully! Click the Login as a Guest",{
        position:"top-right"
      });
      setIsStatus(true)
     
    }catch(err){
      console.log(err)
    }
  }



  return (
    <div>
    <Navbar/>
        <div className="auth-container flex-center">
      <div className="auth-contain flex-column align-center gap-10px padding-17p">
        <h2>Login</h2>
        <lable htmlFor="email">
          Enter your Email
          <input
            type="email"
            placeholder="Enter your Email"
            className="auth-detail-input font-16p flex margin-2p "
          />
        </lable>
        <lable htmlFor="password">
          Enter your password
          <input
            type="password"
            placeholder="Enter your Password"
            className="auth-detail-input font-16p flex margin-2p"
          />
        </lable>
          <lable htmlFor="remember">
            <input type="checkbox" className="checkbox-remember" /> Remember me
            <a className="forgetLink" href="/">
              Forgot Password ?
            </a>
          </lable>
        <button className="loginbtn-createAcount padding-4px font-18p" onClick={clickHandler}>Login</button>
        <button className="login-guest font-16p padding-4px" onClick={loginHandler}>
          Login as Guest
        </button>
        <Link to="/signup">
          <button  className="createBtn-alreadyBtn padding-8p">Create New Account </button>
        </Link>
      </div>
    </div>
    </div>
  );
};
export default Login;
