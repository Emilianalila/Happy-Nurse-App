import { useNavigate } from "react-router-dom";
import "./nav-logout.css"

const NavLogout = () => {
  let navigate = useNavigate();

  function handleLogout() {
    navigate("/");
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
          </ul>
          <button className="btn loginButton nav-border" type="submit" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavLogout