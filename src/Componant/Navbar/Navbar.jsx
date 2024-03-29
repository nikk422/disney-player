import "./navbar.css";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useAuth } from "../../Context/Auth-context";
import {useFilter} from "../../Context/Filter-context"

const Navbar = () => {
  const {VideoDispatch,} = useFilter(); 
    const {Login  }= useAuth();

  return (
    <header className="navbar-container  gap-2r padding-24p position-sticky">
      <section>
        <Link to="/">
          <img
            className="brand-logo"
            src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
            alt="Disney+;Hotstar"
          ></img>
        </Link>
      </section>
      <section>
        <input
          type="search"
          placeholder="search songs"
          onChange={(e)=>VideoDispatch({type:"SEARCH", payload:e.target.value})}
          className="Search-box padding-8p font-16p"
        />
      </section>
      <section>
        {Login.user ? (
          <Link to="/logout">
            <i className=" loginIcon font-26p hoverText" >
              <FaUser />
            </i>
          </Link>
        ) : (
          <Link to="/login">
            <i className=" loginIcon font-26p hoverText">
              <FaUser />
            </i>
          </Link>
        )}
      </section>
    </header>
  );
};

export default Navbar;
