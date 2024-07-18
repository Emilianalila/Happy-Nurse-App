import "./footer.css";

const Footer = () => {
  return (
    <>
      <nav
        className="navbar background border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid d-flex justify-content-center align-items-center">
          {/* <a className="navbar-brand" href="#">
          <h5 className="title-footer">Happy Nurse</h5>
          </a> */}
          <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  © Copyright | Privacy notice | Terms of use
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Footer;
