import {Link} from "react-router-dom";
import {useEffect , useState} from "react";
import Navbar from "../../../Componant/Navbar/Navbar";
import { SignupValidChecker } from "../../../styless/passwordChecker";

import {useAuth} from "../../../Context/Auth-context";

const Signup=()=>{

  const [error, setError] = useState({ isError: true });
  const [userDetail, setUserDetail] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmpassword: ""
  });

  const {SignupPage}= useAuth();

  useEffect(() => {
    if (!error.isError) {
        SignupPage(userDetail);
    }
}, [error]);



  const inputHandler = (e) => {
    const { name, value } = e;
    setUserDetail({ ...userDetail, [name]: value });
};

  const handleCreateAccount=()=>{
    const error = SignupValidChecker(userDetail);
    setError(error);
  }

    return(
      <div>
      <Navbar/>
        <div className="auth-container flex-center">
        <div className="auth-contain flex-column align-center gap-10px padding-8p">
          <h2>Sign-up</h2>
          <lable htmlFor="email">
            Email Address
            <input
              type="email"
              onChange={e => inputHandler(e.target)}
              placeholder="abcd@gmail.com"
              name="email"
              required
              className="auth-detail-input font-16p flex margin-2p"
            />
          </lable>
          {error.email && <div className="wrong-input">{error.email}</div>}
          <lable htmlFor="First Name">
            First Name
            <input
              type="text"
              onChange={e => inputHandler(e.target)}
              placeholder="First Name"
              name="firstName"
              required
              className="auth-detail-input font-16p flex margin-2p"
            />
          </lable>
          {error.firstname && <div className="wrong-input">{error.firstname}</div>}
          <lable htmlFor="Last Name">
            Last Name
            <input
              type="text"
              onChange={e => inputHandler(e.target)}
              placeholder="Last Name"
              required
              name="lastName"
              className="auth-detail-input font-16p flex margin-2p"
            />
          </lable>
          {error.lastname && <div className="wrong-input">{error.lastname}</div>}
          <lable htmlFor="New password">
            New Password
            <input
              type="password"
              onChange={e => inputHandler(e.target)}
              name="password"
              required
              placeholder="*********"
              className="auth-detail-input font-16p flex margin-2p"
            />
          </lable>
          {error.password && <div className="wrong-input">{error.password}</div>}

          <lable htmlFor=" Confirm password">
            Confirm Password
            <input
              type="password"
              onChange={e => inputHandler(e.target)}
              name="confirmpassword"
              required
              placeholder="**********"
              className="auth-detail-input font-16p flex margin-2p"
            />
          </lable>
          {error.confirmpassword && <div className="wrong-input">{error.confirmpassword}</div>}
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