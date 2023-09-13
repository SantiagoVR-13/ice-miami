import "./Header.scss";
import logoImage from "../../Assets/Images/ice-logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header-logo">
          <a href="/">
            <img className="header-logo__img" src={logoImage} alt="ice-logo" />
          </a>
        </div>
        <nav className="nav">
          <div className="nav-links">
            <Link className="nav-links__page-link" to="#">
              <button className="nav-links__current nav-links__current--active">
                About
              </button>
            </Link>
            <Link className="nav-links__page-link" to="#">
              <button className="nav-links__inactive nav-links__inactive--hover">
                Services
              </button>
            </Link>
            <Link className="nav-links__page-link" to="#">
              <button className="nav-links__inactive nav-links__inactive--hover">
                Blog
              </button>
            </Link>
            <Link className="nav-links__page-link" to="#">
              <button className="nav-links__inactive nav-links__inactive--hover">
                Contact
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
