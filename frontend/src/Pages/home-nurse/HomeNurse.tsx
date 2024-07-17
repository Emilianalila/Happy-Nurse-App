import middlePhoto2 from "../../assets/middle2.png";
import Nav from "../../components/nav/Nav";
import "./home-nurse.css"

const HomeNurse = () => {
  return (
    <div>
      <Nav />
      <section className="section2-container">
        <div className="section1-content">
          <br />
          <br />
          <br />
          <h2 className="main-title">
            Be your own Boss and Become a Happy Nurse.
          </h2>
          <br />
          <p>
            If you are a professional nurse, register and find your next job
          </p>
          <p>
            <a className="linkToLogin" href="/Login">
              <button className="joinTeam-button">Click Here </button>
            </a>
             , to Log in.
          </p>
          <p>
            <a className="linkToLogin" href="/CreateProfile">
              <button className="joinTeam-button">Create a Profile</button>
            </a>
            , to Join our team and be part of Happy Nurse.
          </p>
        </div>
      </section>
      <div className="row home-nurse_container">
        <div className="col-md-6 my-2">
          <h3 className="middle-title1">
            Want to make money on your own terms?
          </h3>
          <ul className="list-group ms-3">
            <li className="list-group-item middleItem">♥️ Be your own boss.</li>
            <li className="list-group-item middleItem">
              ♥️ Set up your profile and pricing.
            </li>
            <li className="list-group-item middleItem">
              ♥️ Control your schedule and free time.
            </li>
            <li className="list-group-item middleItem">
              ♥️ Become a part of our nursing community.
            </li>
            <li className="list-group-item middleItem">
              <button className="joinTeam-button">
                <a className="home-link" href="/CreateProfile" >♥️ Become a Happy nurse</a>
              </button>
            </li>
          </ul>
        </div>
        <div className="col-md-6 d-flex align-items-center my-2">
          <img src={middlePhoto2} className="img-fluid" alt="Description 4" />
        </div>
      </div>
    </div>
  );
};

export default HomeNurse;
