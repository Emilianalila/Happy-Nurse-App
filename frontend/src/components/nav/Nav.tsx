import { useNavigate, useLocation } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  let navigate = useNavigate();
  let location = useLocation();

  function handleClick() {
    navigate("/HomeNurse");
  }

  function handleLogin() {
    navigate('/Login');
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          🎈Happy Nurse
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link nav-pointer ${location.pathname === "/HomeNurse" ? "active" : ""}`}
                onClick={handleClick}
              >
                Join Our Team
              </a>
            </li>
          </ul>
          <span className="navbar-text"></span>
          <button
            className={`btn loginButton nav-border ${location.pathname === "/Login" ? "active" : ""}`}
            type="submit"
            onClick={handleLogin}
          >
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

