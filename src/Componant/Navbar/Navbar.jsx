import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <header className="navbar-container flex-justify-between gap-2r padding-24p position-sticky">
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
          className="Serch-box padding-8p font-16p"
        />
      </section>
      <section>
        <Link to="/login">
          <i class="fas fa-user loginIcon font-26p hoverText"></i>
        </Link>
      </section>
    </header>
  );
};

export default Navbar;
