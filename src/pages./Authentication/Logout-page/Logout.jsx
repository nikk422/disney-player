import Navbar from "../../../Componant/Navbar/Navbar";
import { useAuth } from "../../../Context/Auth-context";
import { Link } from "react-router-dom";


const Logout = () => {
  const {logoutHandler } = useAuth();

  
  return (
    <div>
      <Navbar />
      <div className="auth-container flex-center">
        <section className="auth-contain flex-column align-center gap-10px padding-17p">
          <h2>LogOut</h2>
          <p>Thank you for coming Disney Player </p>
          <Link to="/">
          <button onClick={logoutHandler} className="loginbtn-createAcount">
            Logout
          </button>
          </Link>
          <Link to="/">
            <button className="backBtn-log font-16p padding-4px">
              Back to home
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Logout;
