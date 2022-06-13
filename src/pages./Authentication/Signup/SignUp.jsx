import {Link} from "react-router-dom";
import Navbar from "../../../Componant/Navbar/Navbar";
import axios from "axios"

const Signup=()=>{

  const handleCreateAccount = async ()=>{
    try {
      const res = await axios.post("/api/auth/signup", 
        {firstName:"Sajjad", lastName:"Mazhar", email:"sajjad@gmail.com", password:"Sajj@d123"}
      )
      console.log(res.data)
    } catch (error) {
      console.log(error.message)
    }
  }
    return(
      <div>
      <Navbar/>
        <div className="auth-container flex-center">
        <div className="auth-contain flex-column align-center gap-10px padding-17p">
          <h2>Sign-up</h2>
          <lable htmlFor="email">
            Email Address
            <input
              type="email"
              placeholder="abcd@gmail.com"
              className="auth-detail-input font-16p flex margin-2p"
            />
          </lable>
          <lable htmlFor="First Name">
            First Name
            <input
              type="text"
              placeholder="First Name"
              className="auth-detail-input font-16p flex margin-2p"
            />
          </lable>
          <lable htmlFor="Last Name">
            Last Name
            <input
              type="text"
              placeholder="Last Name"
              className="auth-detail-input font-16p flex margin-2p"
            />
          </lable>
          <lable htmlFor="New password">
            New Password
            <input
              type="password"
              placeholder="*********"
              className="auth-detail-input font-16p flex margin-2p"
            />
          </lable>
          <lable htmlFor=" Confirm password">
            Confirm Password
            <input
              type="password"
              placeholder="**********"
              className="auth-detail-input font-16p flex margin-2p"
            />
          </lable>
          <lable htmlFor="term & conditions">
            <input type="checkbox" className="checkbox-remember-conditions" /> I accept all Term & Conditions
          </lable>
          <button className="loginbtn-createAcount font-18p" onClick={handleCreateAccount}>Create New Account</button>
          <Link to="/login">
          <button className="createBtn-alreadyBtn padding-8p">Already have an Account </button>
          </Link>
        </div>
      </div>
      </div>
    );
  
}
export default Signup;